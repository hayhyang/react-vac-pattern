# React VAC Pattern 2022

## 출처

[네이버 테크톡](https://tv.naver.com/v/23162062)

[소스코드](https://github.com/coxcore/examples-react-ts/tree/todo-list)

## VAC Pattern

View로직과 JSX의 의존성을 최소화한 패턴

### React 협업

- 데이터나 상호작용 결과를 시각화하는 렌더링 처리(마크업, css, ...)
- 사용자의 상호작용을 처리하는 UI 기능 개발(JS, JSX, ...)
- 비즈니스 로직, UI 기능, 렌더링 처리의 통합(React, Redux, ...)
- FE 서빙 환경 구축(Next, graphql, ...)

### React 협업에서 어려운 점

- FE와 UI개발 영역이 겹침으로 인한 코드 충돌 발생
- FE개발이 적용된 JSX는 UI개발자가 수정하기 어려움

### VAC Pattern

View로직과 JSX를 격리해서 관리
VAC - View Asset Component

- 반복, 조건부 노출 등 스타일 제어 렌더링에 관련된 처리만을 수행
- prop를 통해서만 제어되며, 스스로의 상태를 관리하지 않는 stateless컴포넌트
- 이벤트에 함수를 바인딩할 때 추가 처리 없이 적용

### 구현 예제(with VAC Debugger)

해당 레포 todo app 참고
[debugger: react-vac](https://www.npmjs.com/package/react-vac)

### 적용 후기

- 마크업 소스와 분리되어 있어서 유지보수에 편리
- 비즈니스 로직이 모여있어 파악이 쉬움
- 처음 도입 시 스펙이나 환경 이해도 필요
- props 드릴링이 자주 있어 불편함
- 스펙변경 및 설계변경시에 커뮤니케이션 비용 발생
