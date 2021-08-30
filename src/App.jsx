import React from 'react';

//Components
import LogoMascavo from './components/LogoMascavo';
import { FooterTextComponent } from './components/FooterText';
import { Main } from './components/Main';
import Thumb from './assets/img/thumb.png';

//Styles
import { HeaderMascavo, Wrapper } from './components/HeaderMascavo/style';
import { Configuration } from './styles';
import { ButtonMascavo } from './components/ButtonMascavo/style';
import { FooterMascavo } from './components/FooterMascavo/style';
import { BannerMascavo } from './components/BannerMascavo/style';
import { TagMascavo } from './components/TagMascavo/style';
import { TitleMascavo } from './components/TitleMascavo/style';
import { DescriptionMascavo } from './components/DescriptionMascavo/style';
import { ThumbMascavo } from './components/ThumbMascavo/style';

function App() {
  return (
    <>
      <HeaderMascavo>
        <Wrapper>
          <LogoMascavo />

          <ButtonMascavo>Novo vídeo</ButtonMascavo>
        </Wrapper>
      </HeaderMascavo>

      <Main>
        <BannerMascavo>
          <TagMascavo> Front End </TagMascavo>

          <TitleMascavo>Criando Player com React</TitleMascavo>
          <DescriptionMascavo>
            O Marco Bruno nesse vídeo iniciou a criação de um Player com React
          </DescriptionMascavo>

          <ThumbMascavo
            src={Thumb}
            alt="Thumb do Marco Bruno fazendo Player com React"
          />
        </BannerMascavo>
      </Main>

      <FooterMascavo>
        <LogoMascavo />

        <FooterTextComponent />
      </FooterMascavo>
      <Configuration />
    </>
  );
}

export default App;
