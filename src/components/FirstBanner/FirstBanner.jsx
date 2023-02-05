import {
  ChangingTextContainer,
  FirstBannerContainer,
  FirstContentContainer
} from './FirstBanner.sty'

export const FirstBanner = () => {
  return (
    <FirstBannerContainer>
        <FirstContentContainer >
           <h1>
              <span className='firstH1Label' >Love</span>
              <span className='secondH1Label' >Deiber</span> Into
            </h1>
           <ChangingTextContainer>
                <h2 className='firstLabel'>Development</h2>
                <h2>FrontEnd</h2>
                <h2>BackEnd</h2>
                <h2>Learn</h2>
           </ChangingTextContainer>
        </FirstContentContainer>
    </FirstBannerContainer>
  )
}
