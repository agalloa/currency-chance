import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IMenuProps } from './Navbar';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
`;


export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
`;


export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: white;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;


export const Menu = styled.div<IMenuProps>`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-115%")};
    width: 100%;
    background-color: #333;
    transition: left 0.3s ease-in-out;
    padding: 1rem 0;
  }
`;


export const MenuItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding: 0rem 1rem;
  &:hover {
    color: #aaa;
  }
`;


export const RegisterButton = styled(Link)`
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
   
  &:hover {
    background-color: #45a049;
  }
    @media (max-width: 768px) {
     width: 85%;
    margin: 0px auto;
  }
`;
