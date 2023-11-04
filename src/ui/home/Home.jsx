import {ButtonListContainer, HomeContainer, TitleContainer} from "./HomeStyle";
import SnsButton from "../../component/Button/SnsButton";

export default function Home() {
  let models = [{
    text: "instagram",
    url: "https://www.instagram.com/g_3.14/"
  }, {
    text: "github",
    url: "https://github.com/bestswlkh0310"
  }, {
    text: "email",
    url: "mailto:hhhello0507@gmail.com"
  }, {
    text: "discord",
  }]
  return (
    <HomeContainer>
      <TitleContainer>
        혁신을 만드는 개발자 >>>> 이강현
      </TitleContainer>
      <div>이런 구린 웹사이트로 어떻게 세상을 바꾸냐고요?</div>
      <div>잠시만 기다려 주세요... 프론트 배우고 있습니다</div>
      <ButtonListContainer>
        {models.map((i) =>
          <SnsButton model={i}/>
        )}
      </ButtonListContainer>
    </HomeContainer>
  )
}

