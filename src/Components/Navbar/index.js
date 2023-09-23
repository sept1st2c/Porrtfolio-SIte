import React from 'react';
import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";

const Navbar = () => {

  return (
    <Nav>
        <NavContainer>
                <NavLogo>
                        <img src='./septic2.png' alt='logo'/>
                </NavLogo>
                <NavItems>
                        <NavLink href='#about'>About</NavLink>
                        <NavLink href='#skills'>Skills</NavLink>
                        <NavLink href='#Experience'>Experience</NavLink>
                        <NavLink href='#Projects'>Projects</NavLink>
                        <NavLink href='#Education'>Education</NavLink>
                </NavItems>
                <ButtonContainer>
                        <GitHubButton>GitHub Profile</GitHubButton>
                </ButtonContainer>
        </NavContainer>
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
        background-color: ${({ theme }) => theme.card_light};
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        position: sticky;
        top: 0;
        z-index: 10;
`;
const NavContainer = styled.div`
        display: flex;
        justify-content: space-between;
        height: 60px;
        z-index: 1;
        width: 100%;
        padding: 0 24px;
        max-width: 1200px;
`;
const NavLogo = styled(LinkR)`
        width: 80%;
        padding: 0 6px;
        display: flex;
        justify-self: flex-start;
        cursor: pointer;
        text-decoration: none;
        align-items: center;
`;

const NavItems =styled.ul `
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 32px;
        list-style: none;

`;
const NavLink=styled.a `
        color: ${({ theme }) => theme.text_primary};
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        &:hover {
                color: ${({ theme }) => theme.primary};
        }
`;
const ButtonContainer=styled.div`
        display: flex;
        align-items: center;
        justify-content: end;
        width: 80%;
        height: 100%;  
        padding: 0 6px;
`;
const GitHubButton = styled.button`
        background-color: transparent;
        color: ${({ theme }) => theme.primary};
        border: 1.8px solid ${({ theme }) => theme.primary};
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        height: 70%;
        transition: 0.3s ease-in;
        :hover {
                background-color: ${({ theme }) => theme.primary};
                color: ${({ theme }) => theme.card};
        }
`;

