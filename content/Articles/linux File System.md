---
aliases: []
date_created: 2019-05-08
date_modified: 2019-05-08
permalink: til-linux-file-system
tags:
  - linux
title: "linux File System"
---
## File Types

* 디렉터리는 파일의 계층을 제공한다.
* 다른 파일 타입들도 존재한다.(including device special files)

### what is Device file

* 디바이스 파일은 주어진 물리적 디바이스의 커널 요청 방법을 제공한다.
* 디바이스 파일들은 /dev 디렉터리에 저장되어 있다.

### Disk naming

* IDE HDD 디바이스 파일들은 /dev/hda, /dev/hdb, /dev/hdc, /dev/hdd에 있다.

#
### fdisk

* fdisk는 디스크의 파티션을 생성, 제거하고 바꾸기 위한 커맨드이다.

    -p : show what partitions currently exist

    -q : to quit without alerting anything

    -q : quit without alerting anything

### mkfs

새 파티션에서 파일 시스템을 초기화한다.(파티션의 오래된 데이터가 지워질 수 있다.)

ex. `$ mkfs -t ext4 -c /dev/sda2`

### Mounting Filesystems

* 파티션들은 임의의 자료들을 포함한다.
* 파일 시스템끼리 서로 마운팅할 수 있다.
    * 한 파일 시스템의 루트 디렉터리를 다른 파일 시스템의 루트 디렉터리에 이식할 수 있다.
    * 위의 정리는 싱글 시스템에서 비롯한 마운트 파일 시스템들을 이름의 공간으로 통합했다.?
    * mount point란 접속한 디렉터리를 이야기한다.

### Mount

* 중요한 파일 시스템들은 boot-up 때 마운트되어 있다.
* mount command는 파일 시스템을 mount시킨다.(root 권한 필요)
* mounting other filesystems
    * mount [filesystem location][mountpoint]
    * -t를 이용해 파일 시스템 타입을 구체화시킬 필요가 있다.

### umount

* umount = unmount
* umount [mount point] = 어떤 것이든지 mountpoint의 것들을 unmount시킨다
* root 권한이 필요하다.
* 실행 중인 바쁜 파일 시스템도 unmount할 수 있다.

### configuring mount : /etc/fstab
* /etc/fstab에는 시스템 관리자로 알려진 파일 시스템에 대한 정보가 포함되어 있다.
* /etc/fstab에서 파일 시스템을 지정하면 마운트 지점을 유일한 인수로 사용할 수 있다.
* 부팅 마운트 구성
* line은 각각의 파일 시스템, column은 6가지 정보(file system, mount point, type, options, dump, pass)이다.

#### mount options

* auto : mount a filesystem on boot-up
* noauto : reverse of auto
* ro : read only
* rw : read/write
* users : let non-root users mount/umount

#### dump

* dump에 사용되고 백업 유틸리티를 회복시킨다.
* 1 = normal filesystem, 0 = removable filesystem

#### Pass-no

* fsck에 의해 체크되는 자동 마운트된 파일 시스템들의 명령을 컨트롤한다.
* 1 : for the root filesystem
* 0 : for filesystems that are not mounted at boot-up
* 2 : otherfilesystems

### Mounting a file

* Using loop devices
    * 리눅스는 normal file에 저장된 파일 시스템을 마운트시킬 수 있다.
    * -o loop
    * e.g) image files
* 시디롬 이미지를 테스트할 때 유용하다.

### Inodes(index nodes)

* data structure로서 각각의 파일 시스템들의 파일을 묘사한다.
* inode는 그 자체로 파일의 정보를 포함한다. 그냥 파일 그 자체로 여겨도 된다.
* inum = 각각의 파일시스템들의 넘버링

* 파일 이름은 아이노드에 저장되지 않고 디렉터리에 저장된다.
    * 디스크에 파일과 디렉터리의 이름이 저장된다.
    * 각각의 이름들은 inode number이다.

## Link
### Symbolic links

* symbolic link(symlink)는 다른 파일이나 디렉터리의 대체 이름으로 사용되는 유사 파일이다.ㅋㅋㅋㅋ
* 약간 바로 가기 느낌이다.
    * 파일은 다른 곳에 보관되어 있지만 링크가 존재하는 거다.
        * 싱글 파일 시스템 계층에서 여러 disk 파티션으로 데이터를 분산시키려고 쓴다.
        * obsolute name을 보장하는 것은 이전 소프트웨어가 작동하는 것을 이어 나가게 하기 위해서이다.
* ln -s : create a symbolic link
* 그래 봐야 directory entry를 연결하는 것이다.

### Hard Links
* hard link는 다른 파일의 inode number를 가리킨다.
- directory entry는 이름과 inode number를 포함한다.
* 파일을 수정하는 것은 파일과 하드 링크 둘 다에 영향을 미친다.
* ln : create a hard link

## Monitoring space

### df

* 마운트된 파일 시스템들의 여유 공간을 보여준다.
* -h : human-readable option
* -i : inode 사용량 출력

### du

* -h : human-readable
* -a : show all files
* -s : summary for each argument
* -c : cumulated total for all directories
* -S : exclude subdirectories

## Finding and repairing filesystem
### fsck

* 파일을 검사하고 수리하는 명령어이다.
* e3fsck = fsck의 확장 명령어
* 마운트된 드라이브에 fsck를 하면 망가질 확률이 올라가니까 unmount하고 실행하자.

### Quotas

* 사용자가 차지할 수 있는 디스크 공간의 양을 제한하는 방법이다.
* 이건 꼭 지켜지나???
    * 다른 사용자가 사용하는 디스크 공간을 사용하는 것을 막을 수 없다.
    * 시스템의 올바른 작동을 방해할 수 없다.

* limit
    * hard limits
        경고만 하고 그냥 초과해도 된다.
    * soft limits
        * 절대 초과할 수 없다.
* 사용할 수 있는 데이터 공간 제한
* 생성 가능한 파일 수 제한

#### per-user and per-group Quotas

* 대부분 quota는 사용자당 설정된다.
* quota는 그룹으로도 설정할 수 있다.
#### Options in /etc/fstab
* 이 파일의 옵션은 할당량을 사용하도록 설정해야 하는 파일 시스템을 지정한다.
* usrquota, grpquota
* quota가 활성화된 파일 시스템에는 루트 디렉터리에 quota.user, quota.group이 있어야 한다.

#### quotacheck
* 유저와 그룹의 quota를 check한다.
* option
    1. -c creating aquota db
    2. -u for user
    3. -g for group
    4. -f force checking

* aquota.group = db for group quota
* aquota.user = db for user quota

#### setquota

* 유저 또는 그룹의 quota 제한을 변경하는 command
* -u, -g로 유저 또는 그룹 지정
* 파일 시스템 지정
* 설정 한도를 순서대로 지정
    1. soft limit for blocks
    2. Hard limit for blocks
    3. soft limit for inodes
    4. hard limit for inodes

    set 0 = remove limit
* -t option : inode softlimit의 기한을 설정
* 사용 예시 : setquota -u kbkim 10 20 10 20 /dev/hda1

#### quotaon, quotaoff

* turns on/off quota support(root 권한 필요)

#### repquota

* 각각의 유저들의 할당량 제한에 대한 정보를 프린트한다.

1. -a all filesystem
2. -g group quotas
3. -v more complete information

#### quota
* for each users to check their quota

---

*2019-05-08에 GitHub TIL 저장소에 쓴 글을 옮겼습니다.*
