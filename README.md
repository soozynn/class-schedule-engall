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
  "@reduxjs/toolkit": "^1.8.3","uuid": "^8.3.2",    "redux-persist": "^6.0.0",

```

- styled-components<br/>
  props를 사용하여 style을 컴포넌트에 맞춰 유동적이게 적용할 수 있는 점을 좋아하기에 선택하게 되었습니다. 자체 스타일을 포함하기에 작은 컴포넌트를 잘 만들어 놓는다면 이외의 여러 프로젝트에서도 쉽게 재사용할 수 있는 이점과 이 외에도 글로벌 스타일을 주어 전체적으로 통일된 스타일 또한 적용할 수 있는 이점이 있어 해당 기술을 선택하게 되었습니다.

- uuid<br/>
  React에서 key 값을 설정해줄 때 고유한 키 값을 설정해주기 위해 uuid를 사용하여 편리하게 설정해주었습니다. 또 해당 class를 찾을 때 좀 더 수월하게 값을 찾기 위함.

- @reduxjs/toolkit<br/>
  redux-toolkit의 사용법과 편리성에 대해 직접적으로 느껴보지 못하였다가 이번 과제를 통해 이전 redux와 toolkit의 어떠한 차이가 있는지, 또 직접 하나씩 세팅해보면서 toolkit의 편리성에 대해 공부해보려고 사용해보게 되었습니다.

- redux-persist<br/>
  새로고침 또는 페이지를 나가게 될 경우 모든 값이 사라지기 때문에 이를 로컬 스토리지를 사용하여 상태 값을 유지하고자 하였습니다. 하지만 로컬 스토리지에 저장해주기 위해서는 스토어에 들어있는 각각의 상태를 매번 setItem 혹은 getItem과 같이 반복적인 코드를 작성해야하는데 이는 가독성에도 좋지않고 비효율적이라고 판단하여 이를 해결하기 위해 해당 라이브러리를 채택하게 되었습니다.

# Challenge

달력을 구현하는 것에 있어 타 라이브러리를 편하게 사용할 수도 있었겠지만, 작게 쪼개진 작은 컴포넌트(Day)로 만들어 이를 재사용성있게 Week Calendar로 만들어보는 것 또한 저에게 많은 공부가 될 수 있을 것이라 생각하여 캘린더를 직접 만들어보게 되었습니다.
이 외에도 이전에는 사용해보지 않은 redux-toolkit과 redux-persist 라이브러리를 응용하여 과제 요구사항을 구현해보았습니다.

# 구현된 기능 및 구현되지 않은 기능

[구현되지 않은 기능]

- 기본 요구사항 중 시간대 순서대로 렌더링 표시하는 사항 및 추가 기능

# 고려한 엣지 케이스 및 아직 처리하지 못한 엣지 케이스

[고려한 엣지 케이스]

[아직 처리하지 못한 엣지 케이스]

# 시간이 더 있다면 구현하고 싶은 내용과 이를 어떻게 구현할 수 있는지 대략적으로 설명

시간이 더 있다면, x mark 클릭 시 해당 스케줄을 전체 삭제하는 것이 아닌 요일 별로 선택하여 삭제가 가능하도록 하는 케이스도 추가적으로 더 구현하고 싶다는 생각이 들었습니다.
이를 구현하기 위해 현재 생각하기로는 분기를 나누어 전체 삭제를 할 것인지 선택한 요일만 삭제할 것인지 유저가 선택한 뒤, scheduleSlice 내에서 분기별로 action을 호출하여 삭제를 원하는 요일의 repeat 배열 안에서 해당 요일을 제거하는 방법을 생각하였습니다. 또 이외에 평일, 주말만 선택하는 항목이 있어 버튼을 하나하나 누르지 않고도 편하게 스케줄을 추가할 수 있는 부분 또한 생각해보았습니다.

# About

최근에 감기 몸살로 사전 과제에 더욱 시간을 투자하지 못한 것이 가장 아쉬웠습니다.
또 현재 하위 컴포넌트에서 state 값을 핸들링 해주는 것이 옳은지, 성능 최적화에 대해서 더 생각해보지 못한 부분도 많이 아쉬웠기에 이후 추가적으로 작성한 코드를 더 개선하도록 하겠습니다. 감사합니다.
