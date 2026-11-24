---
aliases: []
date_created: 2026-03-24
date_modified: 2026-11-25
permalink: iphone-mac-dev-setup
tags:
  - ios
  - xcode
title: "iPhone-Mac 개발 환경 연결"
---

Apple Developer Program 등록 후 iPhone에서 직접 앱을 실행하면 iCloud 동기화, 푸시 알림 등 시뮬레이터에서 테스트할 수 없는 기능을 검증할 수 있다. 이 문서를 따라하면 Xcode에서 실제 iPhone으로 앱을 빌드하고 iCloud Capability를 활성화할 수 있다.

## 목표

Xcode 26에서 iPhone에 앱을 빌드하고, iCloud Capability를 설정해 CloudKit 테스트 환경을 완성한다.

## 사전 요구사항

- Apple Developer Program(Individual, $99) 등록 완료
- Mac + Xcode 26 이상
- iPhone (iOS 18 이상 권장)
- Lightning 또는 USB-C 케이블

## Developer Mode 활성화

iOS 16부터 iPhone에서 개발자 모드를 켜야 Xcode가 앱을 설치할 수 있다.

1. iPhone에서 **설정 > 개인정보 보호 및 보안 > 개발자 모드**를 연다
2. 토글을 ON으로 변경한다
3. iPhone이 재시동되면 "개발자 모드 켜기"를 확인한다

iPhone 설정에 "개발자 모드" 항목이 보이면 활성화에 성공한 것이다.

## Xcode에 Developer 계정 등록

Xcode에 Apple ID를 한 번 등록하면 이후 모든 프로젝트에서 자동 서명을 사용할 수 있다.

1. Xcode를 열고 **Xcode > Settings > Accounts** (`Cmd + ,`)로 이동한다
2. 왼쪽 하단 **+** 버튼을 클릭하고 **Apple ID**를 선택한다
3. Developer Program에 등록한 Apple ID와 비밀번호를 입력한다
4. 오른쪽 Team 목록에 "Your Name (Individual)"이 표시되면 등록 완료다

## iPhone 연결 및 UDID 등록

1. iPhone을 USB 케이블로 Mac에 연결한다
2. iPhone에 "이 컴퓨터를 신뢰하시겠습니까?" 팝업이 뜨면 **신뢰**를 누른다
3. Xcode 상단 툴바에서 실행 대상을 클릭하고 연결된 iPhone을 선택한다
4. "Register Device?" 팝업이 뜨면 **Register**를 클릭한다

Xcode가 UDID를 Apple Developer 포털에 자동 등록하고 Development Provisioning Profile을 생성한다. Individual 계정은 연간 100대까지 등록할 수 있다.

## iCloud Capability 추가

iCloud 기능(CloudKit, Key-Value Storage 등)을 사용하려면 프로젝트에 Capability를 추가해야 한다.

1. 프로젝트 네비게이터에서 프로젝트 파일(파란색 아이콘)을 클릭한다
2. **Signing & Capabilities** 탭을 선택한다
3. **Automatically manage signing**이 체크되어 있는지 확인하고, Team을 선택한다
4. **+ Capability** 버튼을 클릭하고 "iCloud"를 검색해 추가한다
5. iCloud 섹션에서 필요한 서비스를 체크한다:
   - **CloudKit** — SwiftData sync, CloudKit Database 사용 시 필수
   - **Key-Value Storage** — 간단한 설정값 동기화
   - **iCloud Documents** — 파일 저장 및 동기화
6. **Containers** 섹션에서 **+**를 클릭하고 `iCloud.com.yourname.yourapp` 형태의 컨테이너를 생성한다

CloudKit을 체크한 경우 반드시 컨테이너를 하나 이상 선택해야 한다. "No container selected" 경고가 뜨면 컨테이너를 생성해서 선택한다.

### SwiftData + CloudKit 설정 예시

```swift
let config = ModelConfiguration(
    cloudKitDatabase: .private("iCloud.com.yourname.yourapp")
)
let container = ModelContainer(
    for: YourModel.self,
    configurations: config
)
```

`iCloud.com.yourname.yourapp`을 Capability에서 생성한 컨테이너 이름과 동일하게 맞춘다.

## 앱 빌드 및 실행

1. `Cmd + R`을 눌러 앱을 빌드한다
2. 첫 실행 시 iPhone에 "신뢰할 수 없는 개발자" 알림이 뜬다
3. iPhone에서 **설정 > 일반 > VPN 및 기기 관리**로 이동한다
4. 등록한 Apple ID를 탭하고 **신뢰**를 클릭한다
5. Xcode에서 다시 `Cmd + R`을 눌러 앱을 실행한다

iPhone에서 앱이 정상 실행되면 빌드 성공이다.

## 최종 결과 확인

다음 항목을 모두 확인하면 개발 환경 설정이 완료된 것이다:

- [ ] Xcode Settings > Accounts에 Developer Program 팀이 표시된다
- [ ] Xcode 실행 대상에 iPhone이 나타난다
- [ ] iPhone에서 앱이 정상 실행된다
- [ ] Signing & Capabilities에 iCloud가 추가되어 있다
- [ ] CloudKit 컨테이너가 생성되어 선택되어 있다

iCloud 동기화를 테스트하려면 iPhone에서 Developer Program과 동일한 Apple ID로 iCloud에 로그인한 상태여야 한다. CloudKit Dashboard([icloud.developer.apple.com](https://icloud.developer.apple.com))에서 데이터를 실시간으로 확인할 수 있다.

## 문제 해결

| 증상 | 원인 | 해결 |
|------|------|------|
| "Developer Mode required" | iPhone 개발자 모드 비활성화 | 설정 > 개인정보 보호 및 보안 > 개발자 모드 ON |
| "No matching provisioning profile" | 서명 불일치 | Product > Clean Build Folder 후 재빌드 |
| "Provisioning profile doesn't match" | Bundle ID 변경됨 | Automatically manage signing 체크 확인 |
| iPhone이 실행 대상에 안 보임 | USB 미인식 또는 iOS 버전 불일치 | 케이블 재연결, Xcode 최신 버전 확인 |
| iCloud sync 미작동 | 컨테이너 미선택 또는 iCloud 미로그인 | Capability에서 컨테이너 선택, iPhone iCloud 로그인 확인 |

## 무선 연결 설정

USB 연결 후 무선 디버깅을 활성화하면 케이블 없이 빌드할 수 있다.

1. iPhone을 USB로 연결한 상태에서 Xcode 상단 메뉴 **Window > Devices and Simulators**를 연다
2. 연결된 iPhone을 선택하고 **Connect via network** 체크박스를 활성화한다
3. iPhone과 Mac이 같은 Wi-Fi 네트워크에 있으면 USB를 분리해도 Xcode 실행 대상에 iPhone이 유지된다
