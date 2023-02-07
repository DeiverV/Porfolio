import { AboutMe } from './components/AboutMe/AboutMe'
import { FirstBanner } from './components/FirstBanner/FirstBanner'
import { Header } from './components/Header/Header'

export default function PortfolioApp () {
  return (
    <div>
      <Header />
      <FirstBanner />
      <div className='custom-container'>
        <AboutMe />
      </div>
    </div>
  )
}
