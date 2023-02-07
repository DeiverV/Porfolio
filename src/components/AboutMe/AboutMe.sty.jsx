import styled from 'styled-components'
import { THEME } from '../../config/constants'

export const SectionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    .title{
        position: relative;
        overflow: hidden;
        transition: 0.5s ease;
        transition-delay: .3s;
        border-left: 10px solid ${THEME.primaryDark};
        h2{
            color: ${THEME.primaryDark};
            margin: 0;
            margin-left: 15px;
            font-size: 2rem;
            width: 100%;
        }
        &::before{
            position: absolute;
            left: 0;
            width: 100%;
            content: '';
            top: 50%;
            transform: translate(-101%, -50%);
            height: 100%;
            z-index: 1;
            background: ${THEME.primaryDark};
            transition: transform 1s ease;
        }
    }
    &:hover{
        .title{
            background-color: ${THEME.primaryDark};
            text-align: center;
            h2{
                color: white;
            }
            &::before {
                transform: translate(101%, -50%);
            }
        }
    }
`

export const AboutMeInfo = styled.div`
    width: 80%;
    padding: 20px 5%;
    p{
        font-size: 1.8em;
    }
`
