# 실행방법

```
git clone https://github.com/engall-recruit/frontend_jsj.git


npm install
```

설치 후,

```
npm start
```

http://localhost:3000 을 실행시켜주세요.

# 사용한 기술과 선택한 이유

```
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.3.0",
  "react-redux": "^8.0.2",
  "styled-components": "^5.3.5",
  "@reduxjs/toolkit": "^1.8.3","uuid": "^8.3.2",

```

- styled-components<br/>
  props를 사용하여 style을 컴포넌트에 맞춰 유동적이게 적용할 수 있는 점을 좋아하기에 선택하게 되었습니다. 자체 스타일을 포함하기에 작은 컴포넌트를 잘 만들어 놓는다면 이외의 여러 프로젝트에서도 쉽게 재사용할 수 있는 이점과 이 외에도 글로벌 스타일을 주어 전체적으로 통일된 스타일 또한 적용할 수 있는 이점이 있어 해당 기술을 선택하게 되었습니다.

- uuid<br/>
  React에서 key 값을 설정해줄 때 고유한 키 값을 설정해주기 위해 uuid를 사용하여 편리하게 설정해주었습니다.

- @reduxjs/toolkit<br/>
  redux-toolkit의 사용법과 편리성에 대해 직접적으로 느껴보지 못하였다가 이번 과제를 통해 이전 redux와 toolkit의 어떠한 차이가 있는지, 또 직접 하나씩 세팅해보면서 toolkit의 편리성에 대해 공부해보려고 사용해보게 되었습니다.

# Challenge

달력을 구현하는 것에 있어 타 라이브러리를 편하게 사용할 수도 있었겠지만, 작게 쪼개진 작은 컴포넌트(Day)로 만들어 이를 재사용성있게 Week Calendar로 만들어보는 것 또한 저에게 많은 공부가 될 수 있을 것이라 생각하여 캘린더를 직접 만들어보게 되었습니다.

# 구현된 기능 및 구현되지 않은 기능

# 코드에서 수행한 가정

# 고려한 엣지 케이스 및 아직 처리하지 못한 엣지 케이스

- Time Picker를 직접 만들어보았으나 이게 과연 효율적일까?

# 당신이 시간이 더 있다면 구현하고 싶은 내용과 이를 어떻게 구현할 수 있는지 대략적으로 설명

# About

# 배포 사이트
