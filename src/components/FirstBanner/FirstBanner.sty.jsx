import styled from 'styled-components'
import { THEME } from '../../config/constants'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const FirstBannerContainer = styled.section`
    width: 100%;
    margin-top: 80px;
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
    padding: 0px 50px;
    background: ${THEME.secondaryLight};
    justify-content: center;
    align-items: center;
    gap: 2%;
    color: ${THEME.primaryDark};
    font-size: 1.7rem;
    animation: appear 1s ease-in 0s 1;
    span{
        border-bottom: 5px solid ${THEME.primaryDark};
    }
    h1{
     animation: appearInfo 1.5s ease-in 0s 1;
     transition: .2s;
    }
    .firstH1Label{
        animation-name: dissapear;
        animation-duration: 2s;
        animation-delay: 8s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    .secondH1Label{
        color: ${THEME.primaryLight};
        opacity: 0;
        font-size: 0px;
        animation-name: dissapear2;
        animation-duration: 3s;
        animation-delay: 10s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    @keyframes dissapear {
        0% { font-size: unset; }
        99.9% { font-size: unset;  opacity: .1%;}
        100% { font-size: 0px; opacity: 0%}
    }
    @keyframes dissapear2 {
        0% { font-size: 0px; opacity: 0%}
        0.1% { font-size: unset;  opacity: .1%;}
        100% { font-size: unset; opacity: 100%;}
    }
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
    padding: 0px 50px;
    border: 2px dotted ${THEME.primaryDark};
    border-radius: 30px;
    height: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    animation-name: BackgroundChange, appearInfo;
    animation-duration: 10s, 1.5s;
    animation-delay: 2s, 0;
    animation-iteration-count: 1, 1;
    animation-fill-mode: forwards, none;
    animation-timing-function: ease, ease-in;
    h2{
        margin: 0;
        animation-name: labelColorChange;
        animation-duration: 10s;
        animation-delay: 2s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    .firstLabel{
        animation-name: labelChange, labelColorChange;
        animation-duration: 10s, 10s;
        animation-delay: 2s, 2s;
        animation-iteration-count: infinite, 1;
        animation-fill-mode: none, forwards;
    }

    @keyframes labelChange {
        0% { margin-top: 0%; }
        25% { margin-top: -1.2em }
        50% { margin-top: -2.4em }
        75% { margin-top: -3.6em }
        100% { margin-top: 0%; }
    }
    @keyframes labelColorChange {
        0% { color: ${THEME.primaryDark}; }
        90% { color: ${THEME.primaryDark}; }
        100% { color: ${THEME.primaryLight}; }
    }
    @keyframes BackgroundChange {
        0% { background-color: none; }
        90% { background-color: transparent; }
        100% { background-color: ${THEME.primaryDark}; }
    }
`
