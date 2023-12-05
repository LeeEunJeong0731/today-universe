1. NASA API 사용하여 오늘의 우주를 확인 하자 
1-1 api 출처 
https://api.nasa.gov/#browseAPI
1-2 바닐라 react로 가상돔을 만들고 api를 읽는다.
1-3 처음 지정된 날짜는 당일 사용자가 변경을 할 수 있다.

디렉토리 구조 
바닐라 리액트이기에 정적파일인 html이 필요하다.



2. 의존성 설치 

npm install react react-dom react-scripts: React 앱을 개발하기 위한 주요 라이브러리들을 설치하는 명령어입니다.

react: React 라이브러리 자체
react-dom: React 앱을 실제 DOM에 렌더링하는 데 사용되는 라이브러리
react-scripts: Create React App과 관련된 스크립트와 설정을 포함한 라이브러리. 개발 환경을 설정하는 데 도움을 주는 패키지입니다.

npm install --save-dev webpack webpack-cli webpack-dev-server: 웹팩(Webpack)과 관련된 패키지들을 개발 의존성으로 설치하는 명령어입니다.

webpack: 모듈 번들러로, 여러 파일을 하나로 합쳐주는 역할을 합니다.
webpack-cli: 웹팩 명령어를 사용할 수 있도록 도와주는 패키지
webpack-dev-server: 개발 서버를 실행하여 코드 수정 시 자동으로 새로고침되도록 도와주는 패키지
npm install axios: HTTP 요청을 쉽게 만들고 처리하기 위한 라이브러리로, 이 프로젝트에서는 NASA의 APOD API와 통신하기 위해 사용됩니다.