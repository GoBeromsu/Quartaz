---
aliases: []
date_created: 2024-11-10
date_modified: 2024-11-10
permalink: refactoring-my-obsidian-plugin
tags:
  - obsidian
  - obsidian-plugin
  - refactoring
  - typescript
title: "내가 만든 Obsidian Plugin 리팩토링 하기 - 난 똥쟁이"
---

![Metadata Auto Classifier 플러그인 정보 화면](/_attachments/tistory-597-01.png)

드디어 첫 옵시디언 플러그인인을 출시하였습니다 !!! 옵시디언을 좋아해서 꼭 직접 만들어서 기여하고 싶다는 생각을 했었는데 만들면서 참 즐거웠습니다!

![플러그인 등록 PR 리뷰와 병합 화면](/_attachments/tistory-597-02.png)

첫 플러그인을 출시할 때는 "어떻게든 동작하게 만드는 것"에 집중했습니다. 하지만 이제는 향후 유지보수를 고려하여 리팩토링이 필요하다고 느끼게 되었습니다. 또한, github issue에 user feedback이 달리고, 고치다보니 자연스럽게 리팩토링을 고려하게 됩니다

출시 후 돌아보니, 처음에는 책임을 분리하려는 목적으로 클래스를 나누어 개발했지만, 실제로는 **책임의 분리가 아닌 책임을 떠넘기는 구조**가 되어버린 것 같았습니다. 특히 생성형 AI의 도움을 받아 개발한 만큼, 코드의 양이 기하급수적으로 늘어나면서 제가 바로 이해하거나 처리하기 어려워졌습니다. 따라서 코드를 제대로 이해하고 최적화하는 과정이 필수적이라는 생각을 하게 되었습니다.

결국 **흑백요리사**에 나오는 안성재 셰프의 말처럼, 개발자는 **명확한 의도**를 가져야 합니다. 개발자 또한 의도를 쌓아가는 사람들이니깐요

![도대체 무슨 의도인지 모르겠어요 자막이 나온 장면](/_attachments/tistory-597-03.png)

이번 리팩토링을 통해 배우고 싶은 점은 객체지향적 접근도 좋지만, 궁극적으로 **함수 단위에서 가독성 있게 동작하는 코드**를 작성하는 것입니다. 지금의 코드는 부끄러워서 친구에게 "내가 정말 엉망진창의 코드를 만들어냈다"고 말할 정도이지만, 이를 통해 성장할 수 있으리라 믿습니다.

## 오늘의 요리 재료 : FrontMatter 핸들러

[FrontMatterHandler.ts](https://github.com/GoBeromsu/Metadata-Auto-Classifier/blob/31ef32fd83e7243a2630d8a9ce616cea6044c77e/src/frontmatter/FrontMatterHandler.ts)를 가시면 문제의 코드를 볼 수 있습니다

Frontmatter handler의 본래 목적은 frontmatter와 관련된 책임을 관리하는 것이었습니다. 그러나 현재의 Frontmatter handler는 필요 이상의 의존성을 가지게 되어, 본래의 목적을 벗어난 역할을 하고 있습니다.

Frontmatter handler가 강한 의존성을 가지게 된 주요 원인은 Obsidian 플러그인 개발 시 옵시디언 내 노트 정보 등에 접근하기 위해 API 호출이 필요한데, 이 API에 접근하기 위해 plugin instance가 필요하기 때문입니다.

![Obsidian Plugin API 구조 다이어그램](/_attachments/tistory-597-04.png)

*Obsidian Plugin API 구조*

위 다이어그램에서 보이듯이, 여러 Obsidian 핵심 컴포넌트들(App, Vault, MetadataCache 등)은 모두 플러그인을 통해 접근 가능합니다. 이러한 구조 때문에 plugin 개발시 Obsidian 라이브러리의 Plugin을 확장하면서 시작하게 됩니다.

```typescript
export default class AutoClassifierPlugin extends Plugin {
    // 플러그인 코드…
}
```

결과적으로 Frontmatter handler는 `plugin` instance에 의존하게 되었고, 이를 통해 앱의 여러 기능에 접근하게 되었습니다. 이로 인해 `FrontMatterHandler`는 다음과 같은 방식으로 강한 결합도를 가지게 되었습니다.

```typescript
export default class FrontMatterHandler {
    private readonly app: App;
    private readonly plugin: AutoClassifierPlugin;

    constructor(plugin: AutoClassifierPlugin) {
        this.plugin = plugin;
        this.app = plugin.app; // App을 plugin을 통해 참조함으로써 결합이 생김
    }

    async insertToFrontMatter(file: TFile, key: string, value: string[]): Promise<void> {
        await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
            // frontmatter 수정 작업…
        });
    }

    // 기타 메소드들…
}
```

위 코드에서 볼 수 있듯이, `FrontMatterHandler`는 `plugin`과 `app` 인스턴스를 직접 참조하고 있습니다. 이러한 접근 방식은 플러그인과 핸들러 간의 결합도를 높이며, Frontmatter handler의 역할을 제한하고 있습니다.

이처럼 핸들러와 플러그인이 강하게 결합된 구조는 몇 가지 문제를 일으킵니다.

첫째, **독립적인 단위 테스트 작성이 어렵습니다**. `FrontMatterHandler`가 플러그인 인스턴스를 직접 의존하기 때문에, 단위 테스트 시 `plugin` 인스턴스를 모킹(mocking)해야 하고, 이 과정에서 복잡한 상호작용을 모두 처리해야 합니다. 이러한 테스트 설정은 코드의 유지보수성을 떨어뜨리며, 테스트 자체의 복잡성을 크게 증가시킵니다. 예를 들어, 다음과 같은 테스트 코드가 필요해질 수 있습니다.

```typescript
// 단위 테스트 예시
const mockPlugin = new MockPlugin();
const frontMatterHandler = new FrontMatterHandler(mockPlugin);

// app의 모든 구성 요소를 모킹해야 하기 때문에 복잡도가 높아짐
mockPlugin.app = new MockApp();
```

둘째, **디버깅 과정이 복잡해집니다**. 핸들러가 플러그인 인스턴스의 여러 기능에 의존하다 보니, 특정 기능에서 문제가 발생했을 때 원인을 파악하기가 어렵습니다. 여러 객체 간의 상호작용을 모두 추적해야 하며, 문제가 발생한 위치를 좁혀나가는 데 많은 시간과 노력이 필요합니다. 이는 특히 핸들러가 플러그인의 다른 여러 기능과 연결되어 있을 때 더욱 그렇습니다.

이 문제를 해결하기 위해, **Frontmatter handler의 구조를 재검토**하였습니다. 기존 구조는 핸들러가 특정 상태를 유지할 필요 없이 입력을 받아 변환하거나 데이터를 처리하는 역할을 하는데도 불구하고, 불필요하게 플러그인 인스턴스에 의존하고 있었습니다. 이러한 경우, 클래스로 관리하는 것보다는 순수 함수 형태로 작성하여 모듈화하는 것이 훨씬 더 적합하다고 판단했습니다.

리팩토링 이후, Frontmatter handler는 다음과 같은 형태의 순수 함수로 변환될 수 있습니다.

```typescript
export async function insertToFrontMatter(app: App, file: TFile, key: string, value: string[]): Promise<void> {
    await app.fileManager.processFrontMatter(file, (frontmatter) => {
        // frontmatter 수정 작업…
    });
}
```

이렇게 전환하면 다음과 같은 이점이 있습니다:

1.  **의존성 제거**: `plugin` 인스턴스를 주입받지 않고, `app` 객체만을 필요로 함으로써 결합도를 줄였습니다.
2.  **테스트 용이성 향상**: 각 함수가 독립적으로 동작하며 상태를 가지지 않기 때문에, 단순히 `app`을 모킹하여 함수 단위로 테스트할 수 있습니다.
3.  **재사용성 증가**: 특정 플러그인에 종속되지 않는 범용적인 형태로 작성되어, 다른 곳에서도 쉽게 재사용할 수 있습니다.

결론적으로, Frontmatter handler를 순수 함수 형태로 리팩토링함으로써 불필요한 의존성을 제거하고, **독립적인 테스트 가능성**을 확보하며, 코드의 **유지보수성과 재사용성**을 높이고자 합니다.

## 순수 함수 기반 모듈화로의 전환

위와 같은 구조에서 문제점은 **의존성 주입의 오용**과 **강한 결합성**입니다. `plugin` 인스턴스를 통해 `app`에 접근하는 방식은 결국 특정 플러그인과 강하게 연결되어 있으며, 이러한 강한 결합은 핸들러의 독립적인 테스트나 다른 맥락에서의 재사용을 어렵게 만듭니다.

사실상 **필요한 의존성을 넘어서 불필요하게 깊은 연결**을 가지게 되어, 단순히 코드 복사에 의존하는 것과 크게 다르지 않은 구조로 변질된 것입니다.

이 문제를 해결하기 위해, Frontmatter handler는 의존성 주입을 없애고, 모든 기능을 **순수 함수(pure function)** 의 형태로 변환하였습니다. 이렇게 함으로써 강한 결합을 피하고, 더 유연한 테스트 및 코드 재사용이 가능하게 되었습니다.

순수 함수는 입력값에만 의존하여 동일한 결과를 보장하며 부작용이 없는 형태로 작성되었기 때문에, **독립적인 테스트**와 **재사용성**을 크게 개선할 수 있었습니다.

다음은 기존 Frontmatter handler의 클래스 형태에서 순수 함수로 변환된 코드 예시입니다

```typescript
/**
 * @param str String to process
 * @returns Processed string with spaces removed except in wiki links
 */
export const processString = (str: string): string => {};

/**
 * @param content - The full content of the markdown file
 * @returns The content without frontmatter
 */
export const getContentWithoutFrontmatter = (content: string): string => {};

/**
 * @param files - List of markdown files to process
 * @param metadataCache - MetadataCache object from Obsidian
 * @returns Array of all unique tags
 */
export const getTags = async (
    files: ReadonlyArray<TFile>,
    metadataCache: MetadataCache
): Promise<string[]> => {};
...
```

또한, handler 클래스를 지우면서, folder 구조로 모듈을 관리하도록 하였습니다 . 모든 함수를 개별 모듈로 분리한 후 **폴더 구조를 통해 관리**함으로써 함수들을 필요한 곳에서 **가볍게 import**하여 사용할 수 있게 되었습니다. 예를 들어, 아래와 같이 각 함수가 특정 파일에 모듈화되어 export되고, 필요에 따라 선택적으로 가져와 사용할 수 있습니다.

```text
/src
  /frontmatter
      index.ts
```

## Frontmatter 삽입 로직

기존의 코드는 frontmatter 핸들러 내에서 `app.fileManager`로 frontmatter를 처리하였습니다.

```typescript
// Insert or update a key-value pair in the frontmatter of a file
async insertToFrontMatter(
    file: TFile,
    key: string,
    value: string[],
    overwrite = false
): Promise<void> {
    await this.app.fileManager.processFrontMatter(file, (frontmatter: FrontMatter) => {
        // Process the value
        // Remove duplicates and empty strings
    });
}
```

현재는 main plugin 인스턴스 내에서 `app` 의존성을 받습니다.

```typescript
const processFrontMatter = (file: TFile, fn: (frontmatter: any) => void) =>
    this.app.fileManager.processFrontMatter(file, fn);

await insertToFrontMatter(processFrontMatter, {
    file: currentFile,
    key: frontmatter.name,
    value: apiResponse.output,
    overwrite: frontmatter.overwrite,
});
```

따라서, 기존의 `insertToFrontMatter`는 frontmatter 처리 함수와 인자만 받아서 업데이트만 하고 반환합니다.

```typescript
export const insertToFrontMatter = async (
    processFrontMatter: ProcessFrontMatterFn,
    params: InsertFrontMatterParams
): Promise<void> => {
    await processFrontMatter(params.file, (frontmatter: FrontMatter) => {
        // Remove duplicates and empty strings
    });
};
```

이렇게 해서 함수를 인자로 받아 `insertToFrontMatter`는 순수해졌지만, 이 패턴이 옳은지는 고민 중입니다. 현재 진행한 리팩토링은 핸들러의 역할을 줄이고, 의존성을 분리하여 **순수 함수 기반**으로 코드를 재작성하는 방향으로 이루어졌습니다. 그러나 여전히 몇 가지 고민이 남아 있습니다.

#### 프로젝트 규모와 일관성에 대한 고려

현재 프로젝트의 규모는 아직 크지 않은 상태이기 때문에, **핸들러 클래스를 완전히 제거**하고 모든 관련된 로직을 **순수 함수**로 변환하는 것이 합리적이라고 판단했습니다. 핸들러를 제거함으로써 불필요한 클래스를 줄이고, 코드의 복잡성을 낮추는 이점을 가져올 수 있었습니다. 그러나 이러한 리팩토링이 장기적으로 일관성 있는 코드베이스로 이어질지에 대해서는 여전히 고민이 있습니다.

#### 의존성 주입의 관리 복잡성

현재 방식은 **의존성 주입**을 통해 `insertToFrontMatter` 같은 함수의 독립성을 높였지만, 의존성을 관리하는 **부담** 또한 늘어났습니다. 프로젝트가 확장되면서 이러한 방식이 계속 적합할지, 아니면 특정 기능들은 다시 **핸들러와 같은 구조적 단위로 묶어서 관리**하는 것이 더 나을지에 대해 고민하고 있습니다. 특히, 모든 함수에 대해 의존성을 외부로부터 주입받아야 한다면, 코드베이스가 커질수록 의존성 관리가 점점 더 복잡해질 수 있습니다.

#### 앞으로의 방향

- **핸들러와 순수 함수의 균형**: 모든 기능을 순수 함수로 구현하는 것이 이상적일 수 있으나, 특정 경우에는 **핸들러와 같은 클래스 기반 구조**를 통해 의존성을 묶는 것이 코드의 **일관성과 유지보수성** 측면에서 더 적합할 수 있습니다. 앞으로 프로젝트가 확장될 때, 이러한 구조적 접근을 다시 도입할지에 대해 지속적으로 검토할 계획입니다.

결론적으로, **핸들러를 제거하고 순수 함수로 전환한 현 리팩토링**은 지금 단계에서는 적절한 선택으로 보입니다. 하지만 코드의 **일관성**, **의존성 관리의 복잡성** 등 여러 측면에서 지속적인 모니터링과 검토가 필요하며, 장기적인 유지보수를 위해 다시 **핸들러 혹은 다른 구조적 패턴**으로 변경할 가능성도 염두에 두고 있습니다

### 모든 태그 가져오는 기능의 리팩토링 - `getAllTags`에서 `getTags`로

기존의 `getAllTags` 함수는 볼트 내의 모든 태그를 수집하고 반환하는 역할을 수행했습니다. 이 기능의 목적은 노트의 내용을 분석하여, **기존에 있던 태그에 가장 잘 맞는 노트를 찾기 위한 것**입니다. 하지만 기존 구현에서는 강한 의존성을 가지는 구조 때문에 리팩토링의 필요성이 있었습니다.

기존의 `getAllTags`는 **Obsidian의 `app` 인스턴스**를 직접 참조하여, `app.vault`를 통해 파일 목록을 얻고, `app.metadataCache`를 통해 각 파일의 메타데이터를 가져오는 방식으로 동작했습니다.

```typescript
async getAllTags(): Promise<string[]> {
    const allTags = new Set<string>();
    this.app.vault.getMarkdownFiles().forEach((file) => {
        const cachedMetadata = this.app.metadataCache.getFileCache(file);
        if (cachedMetadata) {
            const fileTags = getAllTags(cachedMetadata);
            if (fileTags) fileTags.forEach((tag) => allTags.add(tag.slice(1))); // Remove the '#' prefix
        }
    });
    return Array.from(allTags);
}
```

이 함수는 **`app`에 직접 의존**하고 있으며, 이를 통해 파일 접근 및 메타데이터 캐시를 가져오기 때문에 **독립적인 테스트**가 어려웠습니다. 또한, 강한 결합도는 핸들러가 재사용되거나 다른 곳에서 사용될 때 장애 요소가 될 수 있습니다.

#### `getTags`로의 리팩토링

리팩토링된 `getTags` 함수는 **순수 함수로 작성**되어 불필요한 의존성을 제거했습니다. 이 함수는 `app` 객체에 직접 접근하지 않고, 대신 **파일 배열(`files`)과 메타데이터 캐시(`metadataCache`)** 를 인자로 받습니다.  
리팩토링된 `getTags` 함수의 구조는 다음과 같습니다.

```typescript
export const getTags = async (
    files: ReadonlyArray<TFile>,
    metadataCache: MetadataCache
): Promise<string[]> => {
    const allTags = files.reduce((tags, file) => {
        const cache = metadataCache.getFileCache(file);
        if (!cache) return tags;

        const fileTags: string[] | null = getAllTags(cache);

        if (fileTags && fileTags.length > 0) {
            fileTags.forEach((tag) => tags.add(tag.replace('#', ''))); // Remove the '#' prefix
        }

        return tags;
    }, new Set<string>());

    return [...allTags];
};
```

1.  **의존성 주입 제거**: 기존의 `getAllTags` 함수는 `app`을 직접 참조하면서 Obsidian의 여러 내부 요소에 접근했습니다. 하지만 리팩토링된 `getTags` 함수는 이러한 **`app` 의존성을 제거**하고, 필요한 데이터(파일 목록과 메타데이터 캐시)를 직접 인자로 받음으로써 독립적인 모듈로 만들어졌습니다.
2.  **메인 함수에서 데이터 추출**: `app`에서 필요한 파일 목록과 메타데이터 캐시를 메인 함수에서 추출하고, `getTags` 함수에는 이들 데이터를 인자로 전달함으로써 **순수 함수의 형태**를 유지하게 되었습니다.
3.  **테스트 가능성 향상**: `getTags` 함수는 이제 특정 컨텍스트에 얽매이지 않는 순수 함수이므로, 별도의 **목 객체(Mock Object)** 없이도 파일 배열과 메타데이터 캐시만 주어지면 테스트할 수 있습니다. 이는 단위 테스트 작성 시, 특정 환경 설정 없이 간단한 테스트 데이터만으로도 함수의 동작을 검증할 수 있게 합니다.
4.  사용 예시 - 메인 함수에서의 호출

리팩토링 후, `getTags` 함수를 사용하는 메인 함수에서는 `app` 객체를 통해 파일과 메타데이터 캐시를 먼저 추출한 후 `getTags`를 호출합니다. 예를 들어:

```typescript
const files = this.app.vault.getMarkdownFiles();
const metadataCache = this.app.metadataCache;

const allTags = await getTags(files, metadataCache);
console.log(allTags);
```

이런 방식으로 `getTags` 함수는 특정 컨텍스트에 의존하지 않고, **입력으로 주어진 데이터**만을 사용하여 태그를 추출합니다. 이는 함수의 **응집력**을 높이며, 코드의 **유지보수성**과 **확장성**을 개선하는 결과로 이어집니다.

## Frontmatter 설정 가져오는 로직의 개선

기존의 `getFrontmatterSetting` 함수는 frontmatter 설정을 가져오는 목적으로 설계되었습니다. 이 함수의 주요 역할은 사용자가 설정한 다양한 frontmatter 설정을 가져오는 것이었으며, 이를 위해 설정 ID를 기반으로 `frontmatter` 배열에서 특정 설정을 찾아 반환하였습니다.

```typescript
getFrontmatterSetting(id: number): FrontmatterTemplate {
    const setting = this.plugin.settings.frontmatter.find((f) => f.id === id);
    if (!setting) {
        const newSetting = { ...DEFAULT_FRONTMATTER_SETTING, id };
        this.plugin.settings.frontmatter.push(newSetting);
        return newSetting;
    }
    return setting;
}
```

그러나 이 함수는 **단일 책임 원칙(Single Responsibility Principle, SRP)** 을 위반하고 있었습니다. 설정을 단순히 가져오는 역할 외에도, 설정이 없는 경우 **새로운 설정을 생성**하는 역할을 동시에 수행하고 있었기 때문입니다.

이로 인해 설정이 필요할 때마다 동일한 함수가 사용되었는데, 설정이 존재하지 않을 경우 의도치 않게 새로운 설정이 생기는 사이드 이팩트가 발생 할 수 있습니다.

- **혼합된 책임**: `getFrontmatterSetting` 함수는 설정을 가져오는 책임과 새로운 설정을 생성하는 책임을 동시에 가지고 있었습니다. 이는 함수의 책임을 혼란스럽게 하며, 코드를 사용하는 개발자 입장에서 해당 함수의 역할을 오해할 수 있는 여지를 남겼습니다.
- **잠재적 위험**: 설정이 없는 경우 자동으로 새로운 설정을 추가하는 동작은 의도치 않은 상황에서 새로운 설정이 생성될 수 있는 위험을 내포하고 있었습니다. 예를 들어, 단순히 설정을 확인하기 위해 호출했을 때 설정이 없는 경우도 자동으로 새 설정을 생성하면서 불필요한 데이터가 추가될 수 있습니다.

### 개선 방안

이러한 문제를 해결하기 위해, 함수의 책임을 **명확히 분리**하였습니다. `getFrontmatterSetting` 함수는 설정을 **단순히 가져오는 역할**만 하도록 수정되었으며, 설정이 존재하지 않을 경우에는 **명확하게 에러를 발생**시키도록 하였습니다. 이를 통해 설정을 생성하는 로직과 가져오는 로직을 명확하게 분리하고, **단일 책임 원칙**을 준수하였습니다.

수정된 `getFrontmatterSetting` 함수는 다음과 같습니다:

```typescript
export const getFrontmatterSetting = (
    id: number,
    settings: FrontmatterTemplate[]
): FrontmatterTemplate => {
    const setting = settings?.find((f) => f.id === id);
    if (!setting) {
        throw new Error('Setting not found');
    }
    return setting;
};
```

위와 같이 **설정이 없는 경우 명확하게 에러를 발생**시킴으로써, 설정이 필요할 때 함수가 항상 예상 가능한 동작을 하도록 만들었습니다. 이는 설정이 존재하지 않는 상황을 분명하게 인지할 수 있게 하여, 의도치 않은 새로운 설정의 생성과 같은 오류를 방지합니다.

### 설정 추가 로직의 분리

새로운 설정을 생성하는 로직은 별도의 함수 `addFrontmatterSetting`으로 분리되었습니다. 이 함수는 명확하게 **새로운 설정을 생성하는 역할**을 가지며, 이를 통해 설정의 생성과 관련된 동작을 별도로 관리할 수 있습니다.

```typescript
export const addFrontmatterSetting = (): FrontmatterTemplate => {
    return {
        ...DEFAULT_FRONTMATTER_SETTING,
        id: generateId(),
    };
};
```

이제 새로운 설정을 추가하고자 할 때는 명시적으로 `addFrontmatterSetting` 함수를 호출해야만 하므로, **의도치 않은 설정 추가**를 방지할 수 있습니다.

### UI 로직의 변경

기존에는 UI 컴포넌트에서 설정을 가져오거나, 새로운 설정을 추가할 때 두 가지 기능이 혼재된 함수를 사용하였습니다. 이제는 **설정 추가와 조회가 명확히 분리**되었기 때문에, UI 로직에서도 보다 명확하게 이러한 함수를 사용할 수 있게 되었습니다. 새로운 설정을 추가하는 로직은 UI 컴포넌트에서 필요할 때 `addFrontmatterSetting` 함수를 사용해 설정을 추가하고, 이후 필요한 동작을 수행합니다.

```typescript
private addNewFrontmatter(containerEl: HTMLElement): void {
    const newFrontmatter = addFrontmatterSetting();
    this.plugin.settings.frontmatter.push(newFrontmatter);
    this.plugin.saveSettings();

    const newFrontmatterContainer = containerEl.createDiv();
    this.frontmatterSetting.display(newFrontmatterContainer, newFrontmatter.id);
}
```

이처럼 설정을 추가하는 로직을 명확히 분리함으로써, 설정 추가와 조회의 목적이 **명확히 드러나도록** 하였으며, 플러그인 내에서 **설정 추가의 단일 진입점**을 만들었습니다. 이제 Frontmatter 설정은 **조회**와 **생성**의 두 가지 주요 동작이 명확히 분리되어, 각 동작이 필요한 상황에서 일관되게 사용될 수 있습니다.

---

*2024-11-10에 [Tistory](https://berom.tistory.com/597)에 쓴 글을 옮겼습니다.*
