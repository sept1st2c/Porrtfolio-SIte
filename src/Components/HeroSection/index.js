import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'
import Typewriter from 'typewriter-effect'
import HeroBgAnimation from '../HeroBgAnimation'
const Hero = () => {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Tittle>Hlw, I'm <br/>
            {Bio.name}
            </Tittle>
            <TextLoop>
              I am a 
              <Span>
                <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                  }}/>
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src='./cappy.jpg' alt='me fr'></Image>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>

    </div>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;

  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: -5%;
  left: 6%;

`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  `;

const HeroLeftContainer =styled.div`
  width: 100%;
  order: 1;
  `;

const HeroRightContainer =styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;

`;
const Tittle = styled.div `
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

`;
const TextLoop = styled.div `
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  gap: 12px;
  display: flex;
`;
const Span = styled.span `
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;
const SubTitle = styled.div`
  font-size: 20px;

  color: ${({ theme }) => theme.text_primary};
  opacity: 70%;
  line-height: 32px;
  margin-bottom: 42px;
`;
const Image = styled.img `
  width: 100%;
  height: 100%;
  max-width: 500px;
  position: relative;
  border-radius: 50%;
  max-width: 400px;
  max-height: 500px;
  object-fit: cover;
  object-position: center;
  border-radius: 2px solid ${({ theme }) => theme.primary};
`;
