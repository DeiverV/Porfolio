import {
  ChangingTextContainer,
  FirstBannerContainer,
  FirstContentContainer
} from './FirstBanner.sty'

export const FirstBanner = () => {
  return (
    <FirstBannerContainer>
        <FirstContentContainer >
           <h1><span>Love</span> Into</h1>
           <ChangingTextContainer>
                <h2>LOS MOMOS</h2>
           </ChangingTextContainer>
        </FirstContentContainer>
    </FirstBannerContainer>
  )
}
