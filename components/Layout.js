import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function Layout({ children, props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AppBackground>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {children}
      <Footer />
    </AppBackground>
  );
}

const AppBackground = styled.div`
  background: ${(props) => props.theme.pageBackground};
`;
