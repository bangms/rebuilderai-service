
# Rebuilderai Service Page Clone Coding
***
### 📅 개발 기간

- 2024-01-22 ~ 2024-01-24
- 참고 사이트 : https://rebuilderai.com/service  
- 구현 사이트 : https://bangms.github.io/rebuilderai-service/
###
#
### 📌 Skill
<img alt="HTML" src="https://img.shields.io/badge/HTML-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white"/>  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white"/>  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">


#### 반응형 웹 구현

media-query를 사용하여 웹사이트의 내용을 다양한 화면 크기에 맞춰서 보여줍니다. 
|화면크기|이미지|
|---|---|
|~ 1024px|<img src="https://github.com/bangms/rebuilderai-service/assets/60212686/67950547-e61b-4bc3-ab02-6760060d0854" width="40%"/>|
|768px ~ 601px|<img src="https://github.com/bangms/rebuilderai-service/assets/60212686/ca84f58f-9e4f-4780-9e7b-a3e5cd0b6f94" width="35%" />|
|600px ~|<img src="https://github.com/bangms/rebuilderai-service/assets/60212686/b5c6fe9c-26d1-48b0-a785-946f742a37ca" width="25%" />|

#
### 화면 애니메이션 구현

framer-motion 라이브러리를 사용한 부드러운 화면 애니메이션 구현
- 헤더 스크롤 애니메이션
- 메인 비디오 스크롤 애니메이션
- 배너 이미지 스크롤 애니메이션
- 이미지 슬라이드
- 모바일 Top 이동 버튼
```javascript
...
const positionValue = useTransform(
    scrollY,
    [0, 600, 601],
    ["fixed", "fixed", "absolute"]
);
const displayValue = useTransform(
    scrollY,
    [0, 600, 601],
    ["flex", "flex", "none"]
);
...
<VideoContainer
  style={{
    position: positionValue,
    display: displayValue,
  }}
>
  <motion.video
    loop={scrollY > 600 ? true : false}
    autoPlay={true}
    ref={mainVedioRef}
    playsInline={true}
    style={{
      transform: matrixValue,
      filter: blurValue,
    }}
  >
    <source src={"videos/main_video.mp4"} type="video/mp4" />
  </motion.video>
</VideoContainer>
...
```
#

### 다국어 지원 기능 (한글, 영어)

context API + useReducer 를 사용하여 locale 상태 관리를 통해 다국어 지원 기능을 구현하였습니다.
```javascript
const SET_LOCALE = "SET_LOCALE";

/**
 * SET_LOCALE
 * lang - "ENG" , "KOR"
 */
const initialState = { lang: "KOR" };
...
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        lang: action.lang,
      };
...
```

