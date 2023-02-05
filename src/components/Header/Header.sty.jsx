import styled from 'styled-components'
import { THEME } from '../../config/constants'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const HeaderContainer = styled.header`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70px;
    border-radius: 0 0 20px 20px;
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    ${ResponsiveTo('lg')} {
        width: 80%;
    }
`

export const BarTopHeader = styled.div`
    background-color: ${THEME.primaryDark};
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    padding-right: 90px;
    button{
        font-size: .8em;
        background: none;
        border: none;
        color: ${THEME.primaryLight};
        cursor: pointer;
    }
`

export const NavBarHeader = styled.nav`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${THEME.primaryDark};
    background-color: ${THEME.primaryLight};
    position: relative;
    gap: 20px;
    h3{
        position: absolute;
        left: 40px;
        top: -35px;
        color: ${THEME.primaryLight};
        font-size: .9em;
        transition: 2s;
    }
    ${ResponsiveTo('md')} {
        h3{
            top: 0px;
            color: ${THEME.primaryDark};
        }
    }
    button{
        background: none;
        border: none;
        color: ${THEME.primaryDark};
        cursor: pointer;
    }
`
