import logoImg from '../../images/logo.svg'
import { HeaderLink } from '../Components/HeaderLink'
import { WhiteButton } from '../Components/WhiteButton'

export function Hero() {


    return (
        <div className="hero overpass">
            <div className="bg-img"></div>
            <header>
                <div className="container">
                    <div className="left">
                        <div className="logo">
                            <img src={logoImg} alt="logo" />
                        </div>
                        <HeaderLink>Product</HeaderLink>
                        <HeaderLink>Company</HeaderLink>
                        <HeaderLink>Connect</HeaderLink>
                    </div>

                    <div className="right">
                        <a href="#login" className="login">Login</a>
                        <WhiteButton></WhiteButton>
                    </div>
                </div>
            </header>

            <main>
                <div className="container">
                    <h1>A modern publishing platform</h1>
                    <p>Grow your audience and build your online brand</p>
                    <div className="flex">
                        <WhiteButton></WhiteButton>
                        <WhiteButton></WhiteButton>
                    </div>
                </div>
            </main>
        </div>
    )
}