import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IMenuProps } from './Navbar';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1rem;
    background-color: #000000;
    color: #cff500;
`;


export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #cff500;
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
    z-index: 10;
  }
`;


export const MenuItem = styled(Link)`
  text-decoration: none;
  color: #cff500;
  font-size: 1.0rem;
  padding: 0rem 1rem;
  font-weight: 100;
  &:hover {
    color: #a66bff;
    text-decoration: underline;
  }
`;


export const RegisterButton = styled(Link)`
    background-color: #5e5c04;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    width: 6vw;
    text-align: center;
    height: 3vh;
    font-size: 1.0rem;
    font-weight: 100;
    @media (max-width: 768px) {
     width: 30vw;
        margin: 0px 15px;
        height: 4vh;
  }
`;
