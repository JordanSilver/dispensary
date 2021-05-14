import styled from 'styled-components';

const Footer = ({ props }) => {
  return (
    <FooterSection>
      <div>
        <h1>MOTA</h1>
      </div>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.div`
  background: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.titleColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;
