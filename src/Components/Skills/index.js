
import { skills } from '../../data/constants'
import styled from 'styled-components'
import { useEffect } from 'react'

const Skills = () => {
  
  

  return (
    <Container id='skills'>
      <Wrapper>
        <Tittle data-aos="fade-up">SKILLS</Tittle>
        <Desc>
          Here are some of my skills which I have for now :D
        </Desc>
        <SkillsContainer>
          {skills.map((item) => (
            <Skill>
              <SkillTittle>{item.title}</SkillTittle>
              <SkillList>
                {
                  item.skills.map((skill) => (
                    <SkillItem>
                      <SkillImage src={skill.image} />{skill.name}
                    </SkillItem>
                  ))
                }
              </SkillList>

              
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>

    </Container>
  )
}

export default Skills

const Container = styled.div`
  display: flex;

  justify-content: center;
  position: relative;
  z-index: 1;
`;
const Wrapper = styled.div`
  width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;
const Tittle = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: #F39F5A;

`;
const Desc = styled.div`
  font-size: 18px;  
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;
const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
  
  
`;
const Skill = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid #AE445A;
  border-radius: 16px;
  padding: 18px 36px;
  transition: 0.3s ease-in-out;
  :hover{
    scale: 101%;
    filter: drop-shadow(0 0.1em 0.3em #F39F5A);
}
`;
const SkillTittle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: white;
  opacity: 80%;
  margin-bottom: 12px;
  text-align: center;
`;
const SkillList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary+90};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  font-weight: 400;
`;
const SkillImage = styled.img`
  width: 20px;
  height: 20px;
`;
