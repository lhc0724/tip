# Project TIP-on! React Boilerplate
## What's mean TIP?
> Travel + Infomation + Plan on  
> Every element of the trip's tip just for you.

##### 시작하기
```
npm install
npm start
```

##### 환경변수 설정
```
.env.development, .env.test, .env.production

# API Url 설정 (.env 파일)
REACT_APP_API_URL = "API URL"

# 변수 추가시 
REACT_APP_변수 이름
```

##### Code Splitting
React lazy 활용
```
> app-routes.js

예제)
const Component = lazy(() => import('./domain/example/Component'));
```


##### 적용된 모듈 및 라이브러리
- [Progressive Web App (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Code Splitting](https://reactjs.org/docs/code-splitting.html)
- [ESLint](https://eslint.org/)
- [React](https://reactjs.org/)
- [Redux Toolkit (RTK)](https://redux-toolkit.js.org/)
- [Axios](https://github.com/axios/axios)
- [Styled components](https://github.com/styled-components/styled-components)
- [React Intl](https://github.com/formatjs/formatjs)