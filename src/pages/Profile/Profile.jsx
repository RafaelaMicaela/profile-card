import React from "react";
import { Container, Wrapper, Content, Name, Footer, Num } from "./styles";
import bgcard from "../../assets/bg-pattern-card.svg";
import imagevictor from "../../assets/image-victor.jpg";

export default function Profile() {
  return (
    <Container>
      <Wrapper>
        <img src={bgcard} alt="Img Card" />
        <Content>
          <img src={imagevictor} alt="Avantar" />
          <Name>
            Victor Crest <span> 26 </span>{" "}
          </Name>
          <p>London</p>
          <Footer>
            <div>
              <Num>80K</Num>
              <p>Followers</p>
            </div>
            <div>
              <Num>803K</Num>
              <p>Likes</p>
            </div>
            <div>
              <Num>1.4K</Num>
              <p>Followers</p>
            </div>
          </Footer>
        </Content>
      </Wrapper>
    </Container>
  );
}
