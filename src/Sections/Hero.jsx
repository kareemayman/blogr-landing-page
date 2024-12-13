import logoImg from '../../images/logo.svg'
import { HeaderLink } from '../Components/HeaderLink'
import { WhiteButton } from '../Components/WhiteButton'
import burgerIcon from '../../images/icon-hamburger.svg'
import { MobileMenu } from './MobileMenu'

export function Hero() {


    return (
        <div className="hero overpass" id='overview'>
            <div className="bg-img"></div>
            <header>
                <MobileMenu></MobileMenu>
                <div className="container">
                    <div className="left">
                        <div className="logo">
                            <img src={logoImg} alt="logo" />
                        </div>
                        <HeaderLink links={["Overview", "Pricing", "Marketplace", "Features", "Integrations"]}>Product</HeaderLink>
                        <HeaderLink links={["About", "Team", "Blog", "Careers"]}>Company</HeaderLink>
                        <HeaderLink links={["Contact", "Newletter", "LinkedIn"]}>Connect</HeaderLink>
                    </div>

                    <div className="right">
                        <a href="#login" className="login ubuntu desktop">Login</a>
                        <WhiteButton white={true} link={'sign-up'} className='desktop'>Sign Up</WhiteButton>
                        <img src={burgerIcon} alt="burger icon" className='mobile'/>
                    </div>
                </div>
            </header>

            <main>
                <div className="container">
                    <h1 >A modern publishing platform</h1>
                    <p>Grow your audience and build your online brand</p>
                    <div className="flex">
                        <WhiteButton link={'start'} white={true}>Start for Free</WhiteButton>
                        <WhiteButton link={'features'}>Learn More</WhiteButton>
                    </div>
                </div>
            </main>
        </div>
    )
}