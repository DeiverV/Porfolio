import { BarTopHeader, HeaderContainer, NavBarHeader } from './Header.sty'

export const Header = () => {
  return (
    <HeaderContainer>
        <BarTopHeader>
            <button>Light</button>
            <button>Dark</button>
        </BarTopHeader>
        <NavBarHeader>
            <h3>DeiberV</h3>
            <button>About me</button>
            <button>Skills</button>
            <button>Certificates</button>
            <button>Projects</button>
        </NavBarHeader>
    </HeaderContainer>
  )
}
