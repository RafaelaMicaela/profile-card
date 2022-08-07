import React from "react";
import { Container, Wrapper, Content, Name, Footer, Num } from "./styles";
import bgcard from "../assets/bg-pattern-card.svg";

export default function CardProfile(props) {
    const user = props.user
  return (
    <Container>
      <Wrapper>
        <img src={bgcard} alt="Img Card" />
        <Content>
          <img src="https://ui-avatars.com/api/?name=John+Doe" alt="Avantar" />
          <Name>
            {user.nome} <span> {user.idade} </span>
          </Name>
          <p>{user.localidade}</p>
          <Footer>
            <div>
              <Num>{user.numseguidores}</Num>
              <p>Followers</p>
            </div>
            <div>
              <Num>{user.numlikes}</Num>
              <p>Likes</p>
            </div>
            <div>
              <Num>{user.numseguindo}</Num>
              <p>Followers</p>
            </div>
          </Footer>
        </Content>
      </Wrapper>
    </Container>
  );
}
