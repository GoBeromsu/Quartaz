---
aliases: 
date_created: 2025-03-26
date_modified: 2025-03-26
tags: 
---
## Metrics Overview

| **Metric**                   | **Value**                |
| ---------------------------- | ------------------------ |
| **Total Lines Added**        | 16,914                   |
| **Total Lines Deleted**      | 12,651                   |
| **Net Code Size**            | 4,263                    |
| **Analysis Period**          | 2021-11-17 to 2024-12-24 |
| **Total Days with Activity** | 126                      |

#### Top 10 Bulk Changes (by Total Lines Modified)

![](https://i.imgur.com/MsJhCI2.png)

| **Date**       | **Changes**             | **Top Contributor(s)**                      |
| -------------- | ----------------------- | ------------------------------------------- |
| **2022-08-17** | +861 / -1024 (**1885**) | Cedric Kulbach, Lucas Cazzonelli            |
| **2024-08-06** | +738 / -943 (**1681**)  | Lucas Cazzonelli                            |
| **2021-11-17** | +1426 / -6 (**1432**)   | Cedric Kulbach                              |
| **2022-07-07** | +757 / -636 (**1393**)  | Lucas Cazzonelli, Cedric Kulbach (combined) |
| **2022-07-22** | +834 / -432 (**1266**)  | Lucas Cazzonelli                            |
| **2022-08-04** | +466 / -727 (**1193**)  | Cedric Kulbach                              |
| **2022-11-18** | +641 / -326 (**967**)   | Cedric Kulbach                              |
| **2021-12-02** | +816 / -91 (**907**)    | Lucas Cazzonelli                            |
| **2024-07-26** | +703 / -194 (**897**)   | Lucas Cazzonelli, Cedric Kulbach            |
| **2022-02-09** | +351 / -501 (**852**)   | Cedric Kulbach                              |

## Consolidated Key Contributors

|**Contributor**|**Total Commits**|**Lines Inserted**|**Lines Deleted**|**Files Changed**|**Total Lines Modified**|
|---|---|---|---|---|---|
|**Cedric Kulbach**|297 (275+22)|9,984 (8,809+1,175)|8,535 (7,915+620)|178 (139+39)|18,519 (16,724+1,795)|
|**Lucas Cazzonelli**|87 (85+2)|6,930 (6,917+13)|4,116 (4,083+33)|77 (75+2)|11,046 (11,000+46)|

## Detailed Bulk Commit Activity

![](https://i.imgur.com/E7nQdg3.png)
### v0.1.x Initial Development
#### 1. 2021-11-17
- **Total Lines Changed**: +1426 / -6
- **Top Contributor**: Cedric Kulbach
- **Commits**:
    - Hash: `8e22c40`, Author: Cedric Kulbach
        - [Initial Commit · online-ml/deep-river@8e22c40](https://github.com/online-ml/deep-river/commit/8e22c40de8d556bd0fc71d1b0cb15eca100146f9)
        - Original Message: Initial Commit
        - Guessed Type: `chore(init)`
        - Changes: +2390 / -0
    - Hash: `05b0f53`, Author: Cedric Kulbach
        - Original Message: Refactor setup.py
        - Guessed Type: `refactor`
        - Changes: +2 / -6
- **Insights**:
    - Large initial code drop and a quick setup script refactor.
#### 2. 2021-12-02
- **Total Lines Changed**: +816 / -91
- **Top Contributor**: Lucas Cazzonelli
- **Commits**:
    - Hash: `cd3acc8`, Author: Lucas Cazzonelli
        - Original Message: -added datasets
        - Guessed Type: `feat`
        - Changes: +2 / -0
    - Hash: `c3c252e`, Author: Lucas Cazzonelli
        - [-added datasets · online-ml/deep-river@c3c252e](https://github.com/online-ml/deep-river/commit/c3c252e6efb768b874e4fd5efcfb9500698bda92)
        - Original Message: -added datasets
        - Guessed Type: `feat`
        - Changes: +1250 / -93
- **Insights**:
    - Focus on new datasets, indicating feature expansion.

#### 3. 2022-02-09
- **Total Lines Changed**: +351 / -501
- **Top Contributor**: Cedric Kulbach
- **Commits** (sampling 9 total):
    - Hash: `2cfe0a1`, Author: Cedric Kulbach
        - [Merge branch 'sliding_window_scaling' · online-ml/deep-river@2cfe0a1](https://github.com/online-ml/deep-river/commit/2cfe0a157a9e905e6f6edf90b455d276dcb17dad)
        - Original Message: Merge branch 'sliding_window_scaling'
        - Guessed Type: `chore(merge)`
        - Changes: +306 / -18
    - Hash: `cff679e`, Author: Cedric Kulbach
        - [MOVE Autoencoder to base · online-ml/deep-river@cff679e](https://github.com/online-ml/deep-river/commit/cff679e7cac870169f47c4db9ea4c6844eca825f)
        - Original Message: MOVE Autoencoder to base
        - Guessed Type: `refactor(move)`
        - Changes: +191 / -164
    - Hash: `53b2a3b`, Author: Cedric Kulbach
        - [REFACTOR · online-ml/deep-river@53b2a3b](https://github.com/online-ml/deep-river/commit/53b2a3b6b7ef6d56cca1c5f40dcb84060ceaf436)
        - Original Message: REFACTOR
        - Guessed Type: `refactor`
        - Changes: +70 / -207
- **Insights**:
    - Heavy reorganization of autoencoder code and imports.
#### 4. 2022-07-07
- **Total Lines Changed**: +757 / -636
- **Contributors**: Lucas Cazzonelli & Cedric Kulbach (combined)
- **Commits** (sampling 19 total):
    - Hash: `ad6b491`, Author: kulbach
        - [REFACTOR pull apart AE · online-ml/deep-river@ad6b491](https://github.com/online-ml/deep-river/commit/ad6b491e2f84c56b1ada7ad20e0388f16df62bfc)
        - Original Message: REFACTOR pull apart AE
        - Guessed Type: `refactor`
        - Changes: +335 / -305
    - Hash: `ba134a8`, Author: kulbach
        - [FIX documentation · online-ml/deep-river@ba134a8](https://github.com/online-ml/deep-river/commit/ba134a893efb7814918d55da0bcaf82410cd72de)
        - Original Message: FIX documentation
        - Guessed Type: `fix(docs)`
        - Changes: +103 / -101
    - Hash: `ddc9a64`, Author: Lucas Cazzonelli
        - [refactor: add wrappers for scaling anomaly scores · online-ml/deep-river@ddc9a64](https://github.com/online-ml/deep-river/commit/ddc9a64720486e1ef90941fbe5ad283105a01c81)
        - Original Message: refactor: add wrappers for scaling anomaly scorer
        - Guessed Type: `refactor`
        - Changes: +293 / -215
- **Insights**:
    - Pulling AE logic into separate modules, adding wrappers, and fixing docs.
#### 5. 2022-07-22
- **Total Lines Changed**: +834 / -432
- **Top Contributor**: Lucas Cazzonelli
- **Commits** (sampling 3 total):
    - Hash: `d7d5518`, Author: Lucas Cazzonelli
        - [refactor: remove redundant docstrings · online-ml/deep-river@d7d5518](https://github.com/online-ml/deep-river/commit/d7d5518ab05f187086888b0c6395d8c125c9dacf)
        - Original Message: refactor: remove redundant docstrings
        - Guessed Type: `refactor`
        - Changes: +25 / -105
    - Hash: `f13bb5c`, Author: Lucas Cazzonelli
        - [feat: add docstrings and clean up codebase · online-ml/deep-river@f13bb5c](https://github.com/online-ml/deep-river/commit/f13bb5c6d6f21238ff3c95c382fae42be033d189)
        - Original Message: feat: add docstrings and clean up codebase
        - Guessed Type: `feat/docs`
        - Changes: +920 / -400
- **Insights**:
    - Major documentation push and cleanup.
#### 6. 2022-08-04
- **Total Lines Changed**: +466 / -727
- **Top Contributor**: Cedric Kulbach
- **Commits** (sampling 23 total):
    - Hash: `d7d77d5`, Author: Cedric Kulbach
        - Original Message: Refactor examples
        - Guessed Type: `refactor`
        - Changes: +28 / -52
    - Hash: `794be6f`, Author: Cedric Kulbach
        - [REMOVE datasets · online-ml/deep-river@794be6f](https://github.com/online-ml/deep-river/commit/794be6f7332bb9628593133162c0d752f19b2f97)
        - Original Message: REMOVE datasets
        - Guessed Type: `chore(cleanup)`
        - Changes: +15 / -388
- **Insights**:
    - Significant line removal from dropping datasets or old code.
#### 7. 2022-08-17
- **Total Lines Changed**: +861 / -1024
- **Contributors**: Cedric Kulbach, Lucas Cazzonelli
- **Commits** (sampling 8 total):
    - Hash: `3159bc0`, Author: Cedric Kulbach
        - [Switch to Modules · online-ml/deep-river@3159bc0](https://github.com/online-ml/deep-river/commit/3159bc09ee3ea8c06ee033155d586465111232b7)
        - Original Message: Switch to Modules
        - Guessed Type: `feat/refactor`
        - Changes: +437 / -127
    - Hash: `c4e891f`, Author: Lucas Cazzonelli
        - [fix: autoencoder examples · online-ml/deep-river@c4e891f](https://github.com/online-ml/deep-river/commit/c4e891f2941dd2960d08d5732c965ff28090945d)
        - Original Message: fix: autoencoder examples
        - Guessed Type: `fix`
        - Changes: +102 / -73
- **Insights**:
    - Major shift to “Modules” and autoencoder fixes.
#### 8. 2022-11-18
- **Total Lines Changed**: +641 / -326
- **Top Contributor**: Cedric Kulbach
- **Commits** (sampling 10 total):
    - Hash: `c9ea604`, Author: Cedric Kulbach
        - [REFACTOR flake8 errors · online-ml/deep-river@c9ea604](https://github.com/online-ml/deep-river/commit/c9ea604055e9954271bb83b48369c331f1d3fc48)
        - Original Message: REFACTOR flake8 errors
        - Guessed Type: `refactor(style)`
        - Changes: +463 / -173
    - Hash: `db5f8c5`, Author: Cedric Kulbach
        - [Refactor unit-tests.yml · online-ml/deep-river@db5f8c5](https://github.com/online-ml/deep-river/commit/db5f8c5aa10e6d73b3b37c3deaba023866ee65ee)
        - Original Message: Refactor unit-tests.yml
        - Guessed Type: `chore(ci)`
        - Changes: +1826 / -0
- **Insights**:
    - Code style enforcement, CI test file updates, and merges.
### v0.2.x Reorganization and Modularization

#### 9. 2024-07-26
- **Total Lines Changed**: +703 / -194
- **Contributors**: Lucas Cazzonelli, Cedric Kulbach
- **Commits** (sampling 13 total):
    - Hash: `d6c28ba`, Author: Lucas Cazzonelli
        - [feat: layer adaptation utils · online-ml/deep-river@d6c28ba](https://github.com/online-ml/deep-river/commit/d6c28ba4c9eca3008884f66765fd049a81b5ce50)
        - Original Message: feat: layer adaptation utils
        - Guessed Type: `feat`
        - Changes: +488 / -0
    - Hash: `febcd9b`, Author: Lucas Cazzonelli
        - [feat: add input layer expansion · online-ml/deep-river@febcd9b](https://github.com/online-ml/deep-river/commit/febcd9b21ba1f42f2206f77798ebbfe2bb64596e)
        - Original Message: feat: add input layer expansion
        - Guessed Type: `feat`
        - Changes: +55 / -37
- **Insights**:
    - 새로운 기능이 생기면서, 오랜만에 큰 변화가 생기었음
    - Emphasis on layer adaptation features and compile scripts.
#### 10. 2024-08-06
- **Total Lines Changed**: +738 / -943
- **Top Contributor**: Lucas Cazzonelli
- **Commits** (2 total):
    - Hash: `d270540`, Author: Lucas Cazzonelli
        - [feat: compliance with multiple river estimator checks · online-ml/deep-river@d270540](https://github.com/online-ml/deep-river/commit/d2705403ce55b0e7fad38b8293780a6f5516b89f)
        - Original Message: feat: compliance with multiple river estimator …
        - Guessed Type: `feat`
        - Changes: +980 / -1096
    - Hash: `6fdb721`, Author: Lucas Cazzonelli
        - Original Message: fix: scipy version (latest removed necessary function)
        - Guessed Type: `fix`
        - Changes: +1 / -0
- **Insights**:
    - Large removal of code combined with a new feature for multi-estimator compliance.
## Overall Observations & Insights

#### 1. Size and Complexity Over Time
- Net code size increased by 4,263 lines, reflecting new features.
- Frequent large removals indicate regular cleanup and reorganizations.
- Growing complexity managed by modular refactors and reorganized architecture.
#### 2. Architecture, Design, and Functionality Evolution
- Many “refactor” and “merge” commits show an iterative approach to code structure.
- Splitting monolithic Python files into multiple submodules improved maintainability.
- Automated style checks (flake8, black) and docstring expansions enhanced quality.
#### 3. Factors Influencing Changes
- New features (e.g., layer adaptation, multi-estimator compliance) drove big commits.
- Parallel development branches culminated in merge commits with broad code overhauls.
- Continuous improvements in documentation, testing, and CI practices guided refactors.
## Conclusion
- After merging contributor identities (e.g., “kulbach” with Cedric Kulbach, “LCa95” with Lucas Cazzonelli), the project effectively has two primary authors driving most changes.
- Major spikes in activity often introduce or refine crucial functionalities (e.g., autoencoders, rolling estimators, layer expansion) while re-architecting the codebase for better modularity.
- Overall, the repository exhibits healthy growth: strong net additions, recurring cleanups, and a structured evolution aligned with increasing feature depth and code quality.