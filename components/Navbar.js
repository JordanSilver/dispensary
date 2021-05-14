import styled from 'styled-components';
import Link from 'next/link';
import { FaBars, FaShoppingBag, FaTimes, FaSeedling } from 'react-icons/fa';
import { GrGrow } from 'react-icons/gr';
import Image from 'next/image';

const Navbar = ({ toggle, props }) => {
  return (
    <div>
      <Nav>
        <div>
          <Link href='/' passHref>
            <StyledLink>
              <FaSeedling size={25} /> MOTA
            </StyledLink>
          </Link>
        </div>

        <MenuWrap>
          {/* <Link href='/' passHref></Link> */}

          <Link href='/' passHref>
            <StyledLink>
              <FaShoppingBag size={25} />
            </StyledLink>
          </Link>
        </MenuWrap>

        <SidebarBtn>
          <FaBars onClick={toggle} />
        </SidebarBtn>
      </Nav>
    </div>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 80px;
  background: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.titleColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledLink = styled.a`
  padding: 0rem 1.5rem;
  cursor: pointer;
`;

const SidebarBtn = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: inline-block;
    padding-right: 2rem;
  }
`;

const MenuWrap = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
