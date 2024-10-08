# 동아리 소개집 웹뷰 프로젝트

## 폴더 구조

- **`PAMPHLET/`**: 프로젝트의 루트 폴더입니다. 여기서부터 모든 파일과 폴더가 관리됩니다.

### 주요 폴더

- **`.vscode/`**: VSCode(Visual Studio Code) 설정 폴더입니다. 이 폴더 안에는 프로젝트를 위한 코드 편집기의 사용자 설정 파일들이 포함될 수 있습니다. 코드 스타일, 확장 기능 설정 등을 관리할 수 있습니다.

- **`node_modules/`**: 프로젝트에서 사용되는 모든 NPM(Node Package Manager) 패키지들이 저장되는 폴더입니다. 이 폴더에는 프로젝트에서 필요한 모든 외부 라이브러리와 의존성이 포함되어 있습니다. 이 폴더는 일반적으로 직접 수정하지 않습니다.

- **`public/`**: 정적 파일들이 위치하는 곳입니다. 이 폴더 안에 있는 파일들은 빌드 후 그대로 서버에 배포됩니다. 주로 `index.html` 파일이나 favicon, 로고 이미지 등이 이곳에 위치합니다.

- **`src/`**: 실제 애플리케이션 소스 코드가 위치하는 폴더입니다. 모든 React 컴포넌트와 스타일 파일들이 이곳에 포함됩니다.

### 파일 설명 (`src/` 폴더 내)

- **`App.css`**: `App.js` 컴포넌트에 적용될 CSS 스타일을 정의한 파일입니다. 여기서 작성한 스타일은 `App.js`에 적용됩니다.

- **`App.js`**: React 애플리케이션의 메인 컴포넌트 파일입니다. 보통 이 파일에서 애플리케이션의 주요 UI가 정의됩니다. 기본적으로 React 컴포넌트가 정의되어 있으며, 앱의 주요 구조를 담당합니다.

- **`App.test.js`**: `App.js`에 대한 테스트를 작성하는 파일입니다. React 애플리케이션에서 유닛 테스트를 작성할 때 사용되며, Jest와 같은 테스트 프레임워크와 함께 사용됩니다.

- **`index.css`**: 애플리케이션의 전역 스타일을 정의하는 CSS 파일입니다. 이 파일에 작성된 스타일은 모든 컴포넌트에 전역적으로 적용됩니다.

- **`index.js`**: React 애플리케이션의 진입점(entry point) 파일입니다. 이 파일에서 ReactDOM을 사용해 `App.js` 컴포넌트를 브라우저 DOM에 렌더링합니다. 주로 애플리케이션을 초기화하고, React와 DOM을 연결하는 역할을 합니다.

- **`logo.svg`**: 프로젝트의 기본 로고 이미지 파일입니다. React 프로젝트를 생성할 때 기본적으로 제공되는 SVG 형식의 로고입니다. `App.js`에서 이 로고가 사용될 수 있습니다.

- **`reportWebVitals.js`**: 웹 성능 측정을 위한 파일입니다. 이 파일은 웹 애플리케이션의 성능 측정을 위한 도구인 Web Vitals를 설정하고 보고하는 역할을 합니다. 이 파일은 기본적으로 성능 최적화를 위해 사용됩니다.

- **`setupTests.js`**: 테스트 환경을 설정하는 파일입니다. `App.test.js`와 같은 테스트 파일들이 실행되기 전에 필요한 설정을 정의할 수 있습니다. 예를 들어, Jest의 환경 설정 등을 여기서 할 수 있습니다.

### 기타 파일

- **`.gitignore`**: Git에서 추적하지 않을 파일이나 폴더를 지정하는 파일입니다. 예를 들어, `node_modules/` 폴더나 빌드 아티팩트 등이 여기에 포함될 수 있습니다.

- **`package-lock.json`**: 프로젝트에 설치된 NPM 패키지의 정확한 버전과 의존성을 잠그는 파일입니다. 이 파일은 패키지 설치 시 동일한 버전의 패키지를 설치할 수 있도록 보장합니다.

- **`package.json`**: 프로젝트의 메타데이터와 의존성을 관리하는 파일입니다. 여기에는 프로젝트 이름, 버전, 스크립트 명령어, 의존성 목록 등이 포함되어 있습니다. NPM 명령어로 패키지를 설치하거나 스크립트를 실행할 때 참조됩니다.

- **`README.md`**: 프로젝트에 대한 설명이 들어있는 파일입니다. Markdown 형식으로 작성되며, 프로젝트의 목적, 설치 방법, 사용법 등을 기록할 수 있습니다.