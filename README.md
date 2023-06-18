# JUMP-Web-Study
점프 웹 스터디 레포입니다 🙆🏻‍♀️


## 📁 Project Structure
자신의 아이디를 기준으로 한 폴더를 하나 생성하여, 그 하위 폴더부터 공부한 내용 정리
```
│
├─ JUMP-Web-Study
│     │
│     ├─ YoungGyo-00 (dir)
│     │     │ 
│     │     ├─  스프링 입문 (dir)
│     │     │    ├─ README.md // 해당 강의 마크다운 파일
│     │     │    ├─ gradle/wrapper
│     │     │    ├─ src
│     │     │    ├─ .gitignore
│     │     │    ├─ build.gradle
│     │     │    ├─ gradlew
│     │     │    ├─ gradlew.bat
│     │     │    └─ settings.gradle
│     │     │
│     │     ├─ 스프링 핵심 원리 - 기본편 (dir)
│     │     │    └─ .. 이하 동일
│     │     │
│     │     ├─ 스프링 부트와 JPA 활용1 (dir)
│     │     │    └─ .. 이하 동일
│     │     │
│     │     ├─ 스프링 부트와 JPA 활용2 (dir)
│     │     │    └─ .. 이하 동일
│     │     │
│     │     │
│     │     └─ 자바객체지향 스프링 기본책 (dir)
│     │          └─ README.md
│     │   
│     │   
│     ├─ .. 이하 동일(자신 아이디 기준으로 폴더를 만드세요)
│ 
│ 
```

## 📝 해당 주차 과제 가이드


### 📤 프로젝트 열기
* 프로젝트를 하나 생성하고 IntelliJ에서 원격 저장소를 연결해줍니다
* ```git init``` // 원격 저장소 init
* ```git remote -v https://github.com/JUMP-Hongik/JUMP-Web-Study.git``` // 원격 저장소 연결
* ```git pull origin master```
* IntelliJ의 terminal에서 자신의 branch로 checkout을 해주세요
    * ```git checkout origin [본인 github 아이디]```
* 작업은 해당 **본인 branch에서만** 진행해주세요 **(~~❌master branch❌~~)**
    * ```git branch``` : 현재 branch 확인


### 🏡 작업공간 생성
* JUMP-Web-Study (프로젝트 루트 디렉토리)
    * 본인 github 아이디명의 디렉토리 (본인 github 아이디로 설정해주세요!)
        * 해당 강의 디렉토리 (강의 이름으로 설정해주세요!)
            * 소스코드 ...
        * 주차별 정리한 내용


| 본인 github 아이디명의 디렉토리부터 만들고 시작하시면 됩니다! 😊


### 💾 중간 중간 commit 하기
* 파트 별로 작업을 끝냈거나 더 작은 단위로 작업을 끝낼 때 마다 commit을 해 주는 게 좋아요
* ❗commit convention ❗️
    * **Feat**: 새로운 기능 추가
    * **Fix**: 버그 수정
    * **Docs**: 문서 수정
    * **Style**: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
    * **Refactor**: 코드 리펙토링
    * **Test**: 테스트 코드, 리펙토링 테스트 코드 추가
    * **Chore**: 빌드 업무 수정, 패키지 매니저 수정

* 예시: ```git commit -m "[Feat(해당 파일): OO 기능 추가]"```


### ✍🏻 README.md 파일 작성하기


* 해당 주차 책을 공부하면서 알게 된 부분, 중요하다고 생각한 부분이 있다면 정리해 주세요!
    * 개념 정립도, 요약도 모두 좋습니다! 😊
* 해당 주차 강의를 들으면서 새롭게 알게 된 사실이나 추가적으로 더 공부한 부분이 있다면 정리해 주세요!
  * 요약도, 복습도 모두 좋습니다! 😊😊

* .md 파일은 mark down 언어로 작성된 파일을 뜻해요
    * [참고] https://gist.github.com/ihoneymon/652be052a0727ad59601#24-코드


### 🙌🏻 Github 레포지토리에 push하기

* 해당 주차의 강의를 모두 듣고 작업을 모두 끝냈다면, 프로젝트 변경 사항을 remote repository(github repository)에 push 합니다
    * ```git push origin [본인 github 아이디 브랜치 명]``` : git에 등록되어 있는 origin(github repository)에 있는 자신의 branch로 프로젝트의 변경 사항을 반영합니다
* push를 완료했다면 스터디 repository에서 pull request를 진행합니다
    * 링크: ```https://github.com/JUMP-Hongik/JUMP-Web-Study/pulls```
* PR(Pull Request)시 메세지 제목은 다음과 같이 ```[이름] 공부한 내용``` 라고 적은 후 ```create pull request``` 버튼을 눌러주세요
* PR : ```base: [master]``` <- ```compare: [본인 github 아이디]```