import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function AppBar() {
  return (
    // <Container>
    <Header>
      <nav>
        <NavLink to="/">
          <Logo>MovieInfo</Logo>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </Header>
    // </Container>
  )
}

/*     <Bar style={{ backgroundColor }}>
      <LogoBox>
        <LogoLink />
      </LogoBox>
      <Navigation>
        <NavList>
          <NavItem>
            <NavLink to="home" smooth>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="about" smooth offset={appBarHeight * -1}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="cases" smooth offset={appBarHeight * -1}>
              Cases
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="blog" smooth offset={appBarHeight * -1}>
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact" smooth offset={appBarHeight * -1}>
              Contact
            </NavLink>
          </NavItem>
        </NavList>
      </Navigation>
    </Bar> */

// const Container = styled.div`
//   position: sticky;
//   height: 72px;
//   z-index: 1100;
//   background-color: ${(props) => props.theme.accentColor};
// `

const Header = styled.header`
  position: sticky;
  width: 100%;
  height: 120px;
  padding: 21px 22px 0px 22px;
  color: ${(props) => props.theme.secondaryTextColor};
  background-color: ${(props) => props.theme.accentColor};
  z-index: 100;
`

const Logo = styled.p``

/* export const Bar = styled.header`
  position: fixed;
  width: 100%;
  height: 120px;
  padding: 21px 22px 0px 22px;
  color: ${(props) => props.theme.color.secondaryText};
  z-index: 100;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    height: 70px;
    padding: 20px 32px 0px 32px;
  }
  @media screen and (min-width: 1360px) {
    padding: 12px 28px 0px 28px;
  }
`;

export const LogoBox = styled.div`
  padding-bottom: 12px;
  @media screen and (min-width: 768px) {
    padding-bottom: 0;
  }
`;

export const Navigation = styled.nav`
  max-width: 480px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    margin: 0;
    margin-left: auto;
    padding-top: 8px;
  }
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 335px;
  }
  @media screen and (min-width: 1360px) {
    width: 420px;
  }
`;
export const NavItem = styled.li`
  font-size: 16px;
  line-height: 1.6;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.56;
  }
`;

export const NavLink = styled(Link)`
  padding-bottom: 18px;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};
  :hover,
  :focus {
    border-color: ${(props) => props.theme.color.accent};
  }
  :active {
    color: ${(props) => props.theme.color.accent};
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 12px;
  }
  @media screen and (min-width: 1360px) {
    padding-bottom: 20px;
  } */
