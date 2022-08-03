import React from "react";
import { Container, Wrapper, Content, Name, Footer, Num } from "./styles";
import bgcard from "../../assets/bg-pattern-card.svg";
import imagevictor from "../../assets/image-victor.jpg";

export default function Profile() {
   var user = {
    nome: 'Victor Crest',
    idade: 26,
    localidade: 'London',
    numseguidores: '80K',
    numlikes: '803K',
    numseguindo: '1.4K'

   }
  return (
    <Container>
      <Wrapper>
        <img src={bgcard} alt="Img Card" />
        <Content>
          <img src={imagevictor} alt="Avantar" />
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
