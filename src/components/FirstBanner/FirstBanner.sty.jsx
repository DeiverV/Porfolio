import styled from 'styled-components'
import { THEME } from '../../config/constants'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const FirstBannerContainer = styled.section`
    width: 100%;
    margin-top: 120px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FirstContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    padding: 0 50px;
    background: ${THEME.secondaryLight};
    justify-content: center;
    align-items: center;
    gap: 2%;
    color: ${THEME.primaryDark};
    font-size: 1.2rem;
    span{
        border-bottom: 5px solid ${THEME.primaryDark};
    }
    h1{
     animation: appearInfo 1.5s ease-in 0s 1;
    }
    animation: appear 1s ease-in 0s 1;
    @keyframes appear {
        0% { width: 0%; }
        100% { width: 100%; }
    }
    @keyframes appearInfo {
        0% { opacity: 0%; }
        75% { opacity: 0%; }
        100% { opacity: 100%; }
    }
    ${ResponsiveTo('sm')} {
        font-size: 2.5rem;
    }
    ${ResponsiveTo('md')} {
        font-size: 3.5rem;
        flex-direction: row;
    }
`

export const ChangingTextContainer = styled.div`
    padding: 0 50px;
    border: 2px dotted ${THEME.primaryDark};
    border-radius: 30px;
    animation: appearInfo 1.5s ease-in 0s 1;

`
