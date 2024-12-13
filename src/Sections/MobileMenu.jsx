import { useEffect } from "react"
import { HeaderLink } from "../Components/HeaderLink"
import { WhiteButton } from "../Components/WhiteButton"

export function MobileMenu() {

    useEffect(() => {
        const handleClicksMob = (e) => {

            const mobileMenu = document.querySelector('.hero header .mobile-menu')

            if (e.target.matches('.right img')) {

                e.target.classList.toggle('rotate-mobile-menu')
                mobileMenu.classList.toggle('visibility')
                document.body.classList.toggle('disable-scroll')

            } else if (e.target.matches('a')) {

                document.body.classList.remove('disable-scroll')
                document.querySelector('.hero header .right img').classList.toggle('rotate-mobile-menu')
                mobileMenu.classList.remove('visibility')
            }
        }

        document.addEventListener('click', handleClicksMob)

        return () => {
            document.removeEventListener('click', handleClicksMob)
        }

    }, [])

    return (
        <div className="mobile-menu mobile">
            <HeaderLink links={["Overview", "Pricing", "Marketplace", "Features", "Integrations"]}>Product</HeaderLink>
            <HeaderLink links={["About", "Team", "Blog", "Careers"]}>Company</HeaderLink>
            <HeaderLink links={["Contact", "Newletter", "LinkedIn"]}>Connect</HeaderLink>
            <span className="hr"/>
            <a href="#login" className="login ubuntu mobile">Login</a>
            <WhiteButton link={'sign-up'} className='mobile'>Sign Up</WhiteButton>
        </div>
    )
}