import './App.css';
import { useEffect } from 'react';
import styled , { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Theme';
import Navbar from './Components/Navbar';
import Hero from './Components/HeroSection';
import Skills from './Components/Skills';
import Education from './Components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Exprience from './Components/Experience';
import Footer from './Components/Footer';


function App() {

  return (
    <div className='animation'>

    <ThemeProvider theme={darkTheme} >
      <Router>
        <Navbar/>
        <Body className="App">
          <Hero/>
          <Wrapper>
            <Skills/>
            <Exprience/>  
            <Education/>
          </Wrapper> 
          <Footer/>
        </Body>
      </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;

const Body = styled.div `
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
const Wrapper = styled.div `
  background: linear-gradient(
      90.73deg,
        rgba(204, 0, 187, 0.15) 25%,
        rgba(201, 32, 184, 0) 80%
      ),
      linear-gradient(
        141.27deg,
        rgba(0, 70, 209, 0) 50%,
        rgba(0, 70, 209, 0.15) 100%
      );
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;