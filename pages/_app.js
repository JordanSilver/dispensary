import '../styles/globals.css';
import Layout from '../components/Layout';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowCircleUp } from 'react-icons/fa';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  let icon = theme === 'light' ? <HiMoon size={25} /> : <CgSun size={25} />;
  return (
    <ThemeProvider theme={themes[theme]}>
      <ToggleTheme onClick={changeTheme}>{icon}</ToggleTheme>
      <ToggleUp onClick={toggleHome}>
        <FaArrowCircleUp size={25} />
      </ToggleUp>
      <Layout>
        <Component {...pageProps} theme={theme} setTheme={setTheme} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

const lightTheme = {
  pageBackground: 'rgba(121,222,41,.2)',
  appBackground: 'rgba(121,222,41,.4)',
  boxShadow: '1px 1px 5px #dc658b',
  titleColor: 'black',
  tagLineColor: 'white',
  btnColor: 'black',
};

const darkTheme = {
  pageBackground: '#141b00',
  appBackground: 'rgba(255,255,255,.1)',
  boxShadow: '1px 1px 5px lightgreen',
  titleColor: 'white',
  tagLineColor: 'black',
  btnColor: 'white',
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const ToggleTheme = styled.button`
  z-index: 1000;
  position: fixed;
  bottom: 0;
  margin: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.tagLineColor};

  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;

  @media screen and (max-width: 768px) {
    right: 0;
  }
`;

const ToggleUp = styled.div`
  z-index: 1000;
  position: fixed;
  cursor: pointer;
  bottom: 0;
  height: 2rem;
  width: 1.5rem;
  margin: 1.5rem;

  left: 2.5rem;
  transition: all 0.5s ease;
  color: ${(props) => props.theme.btnColor};
  @media screen and (max-width: 768px) {
    left: 0;
  }
`;
