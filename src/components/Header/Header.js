import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/images/invovaLogoV.png';
import navbarBackground from '../../assets/images/navbar-background1.png'; // Import your image



const ContainerNavbar = styled.div`
 text-align: center;
 
`

const Navbar = styled.nav`
  
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 35px;
  background-color: white;
  background-image: url(${navbarBackground}); /* Set the background image */
  background-size: cover; /* Ensure the image covers the container */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.5s ease;
  
  border-bottom-right-radius: 2em;
  border-bottom-left-radius: 2em;

  box-shadow: 1rem;

  
  left: 10%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.img`
  font-size: 22px;
  width: auto; // Adjust to your desired width
  height: 50px; // Automatically adjust the height to maintain aspect ratio
`;

const LogoLink = styled.a`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-left: 12px;
  text-decoration: none;
  
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const MenuLinks = styled.div`
  display: flex;
  gap: 24px;
  border-right: 1px solid #999999;
  padding-inline: 24px;
`;

const NavLink = styled.a`
  font-weight: 500;
  color: #003366;
  padding: 8px 16px;
  text-decoration: none;

  &:hover {
    color: orange;
  }
`;

const LoginButton = styled.button`
  font-weight: 500;
  padding: 12px 22px;
  background-color: transparent;
  color: #999999;
  border-radius: 10px;
  border: 2px solid #0067BC;
  transition: 0.2s;

  &:hover {
    background-color: #F8B133;
    color: white;
  }
`;

const MenuButton = styled.div`
  font-size: 32px;
  color: white;
  cursor: pointer;
  display: none;
`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(169, 169, 169);
`;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  text-align: center;
  text-wrap: balance;
`;


const Header = () => {
 
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const navBar = document.querySelector('.navbar');

      if (currScrollPos > prevScrollPos) {
        navBar.style.transform = 'translateY(-105%)';
      } else {
        navBar.style.transform = 'translateY(0%)';
      }

      setPrevScrollPos(currScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  // Add event listener for closing dropdowns on click outside...

  return (
    <>

    <ContainerNavbar>
      <Navbar className="navbar">
        <LogoContainer>
          <LogoIcon className="fa-solid fa-font-awesome" src={logoImage} alt="Invova Logo" ></LogoIcon>
          <LogoLink href="#"></LogoLink>
        </LogoContainer>
        <MenuContainer>
          <MenuLinks className="menu-links">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
            <NavLink href="#">Blog</NavLink>
          </MenuLinks>
          <LoginButton className="log-in">Log In</LoginButton>
        </MenuContainer>
        <MenuButton className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </MenuButton>
      </Navbar>
      </ContainerNavbar>
      
    </>
  );
};

export default Header;
