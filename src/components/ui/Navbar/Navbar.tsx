import { useState } from 'react';
import { Hamburger, Logo, Menu, MenuItem, Nav, RegisterButton } from './styled';

export interface IMenuProps {
  isOpen: boolean;
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const routes = [
    { path: '/', label: 'Conversor' },
    { path: '/tools', label: 'Herramientas' },
    { path: '/resources', label: 'Recursos' },
    { path: '/contact', label: 'Contacto' },
    { path: '/login', label: 'Iniciar sesión' },
    { path: '/register', label: 'Registrarse', isButton: true },
  ];

  return (
    <Nav>
      <Logo to="/">Logo</Logo>
      <Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        {routes.map(({ path, label, isButton }) =>
          isButton ? (
            <RegisterButton key={path} to={path}>
              {label}
            </RegisterButton>
          ) : (
            <MenuItem key={path} to={path}>
              {label}
            </MenuItem>
          )
        )}
      </Menu>
    </Nav>
  );
};