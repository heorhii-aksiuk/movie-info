import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { TbMovie } from 'react-icons/tb'
import { HiOutlineFilm } from 'react-icons/hi'

export default function AppBar() {
  return (
    <Header>
      <Navigation>
        <StyledLink to="/">
          <HiOutlineFilm size="24px" />
          <LogoText>MovieInfo</LogoText>
        </StyledLink>
        <PagesNavList>
          <PageNavItem>
            <StyledLink to="/">Home</StyledLink>
          </PageNavItem>
          <PageNavItem>
            <StyledLink to="movies">Movies</StyledLink>
          </PageNavItem>
        </PagesNavList>
      </Navigation>
    </Header>
  )
}

const Header = styled.header`
  position: sticky; //TODO:???
  width: 100%;
  height: 70px;
  padding: 15px 20px;
  font-family: ${(props) => props.theme.secondaryFont};
  color: ${(props) => props.theme.secondaryTextColor};
  background-color: ${(props) => props.theme.accentColor};
  z-index: 100;
  box-shadow: ${(props) => props.theme.appBarBoxShadow};
`
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 700px;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.secondaryTextColor};
  display: flex;
  align-items: center;
`

const LogoText = styled.p`
  font-size: 25px;
  font-weight: 400;
`

const PagesNavList = styled.ul`
  display: flex;
`

const PageNavItem = styled.li`
  :not(last-child) {
    margin-right: 15px;
  }
`
