# daily-report

기록하면 이룰 수 있다.

## 스타일 네이밍

1. 최상위 부모
   '컴포넌트명'Layout 이란 이름으로 생성

2. 최상위 부모의 자식 (최상위 부모의 바로 하위 요소) (optional)
   '컴포넌트명'Row or '컴포넌트명'Col 이란 이름으로 생성
   Row나 Col 이라는 네이밍의 실질적인 태그는 div, section 태그등이 될 수 있음
   Row는 가로, Col은 세로!
   둘 다 실제 태그는 div여도, css로 flex-direction등을 변경해서 가로 or 세로를 변경해주면?
   flex-direction이 row 라면 Row, column 이라면 Col
   최상위 부모가 대분류의 느낌이라면, 이 요소는 소분류의 느낌

3. 나머지 요소들
   네이밍 예시 (예시일뿐! 특정 태그의 의미와 부합된다면 됨!)
   div 태그: '컴포넌트명'Box
   section 태그: '컴포넌트명'Section
   ul 태그: '컴포넌트명'List
   li 태그: '컴포넌트명'Item
   p 태그: '컴포넌트명'Paragraph
   span 태그: '컴포넌트명'Span or '컴포넌트명'Text
   어떻게보면 큰 규칙은 없는 것, 제일 많이 쓰일 것임!
