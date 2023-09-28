import React from 'react'
import styled from 'styled-components'
import { experiences } from '../../data/constants'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';

const Exprience = () => {
  return (
    <Container id="experience">
        <Wrapper>
                <Tittle>Achievements</Tittle>
                <Desc>Here are some of my Achievements</Desc>
                <TimeLineSection>
                        <Timeline>
                        {experiences.map((experience,index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimeLineSection>
        </Wrapper>
    </Container>
  )
}

export default Exprience

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
  color: ${({ theme }) => theme.primary};

`;
const Desc = styled.div`
  font-size: 18px;  
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;
const TimeLineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;