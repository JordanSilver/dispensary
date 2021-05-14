import Link from 'next/link';
import React from 'react';
import { FaHome, FaShoppingBag, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const Sidebar = ({ isOpen, toggle, props }) => {
  const size = 35;
  return (
    <SidebarContainer props={props} isOpen={isOpen} onClick={toggle}>
      {/* <MenuBtn>
        <FaTimes onClick={toggle} />
      </MenuBtn> */}
      <MenuWrap>
        <Link href='/' passHref>
          <StyledLink>
            <FaHome size={size} />
          </StyledLink>
        </Link>

        <Link href='/' passHref>
          <StyledLink>
            <FaShoppingBag size={size} />
          </StyledLink>
        </Link>
      </MenuWrap>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: ${(props) => props.theme.pageBackground};
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  border-bottom: 1px solid #333;
  border-right: 1px solid #333;
  box-shadow: 1px 1px 5px #ccc;
  color: black;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const StyledLink = styled.a`
  padding: 1rem 1.5rem;
  color: black;
`;

const MenuBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1.8rem 2rem;
  cursor: pointer;
  color: ${(props) => props.theme.titleColor};
`;
