import { useEffect } from "react"
import { HeaderLink } from "../Components/HeaderLink"

export function MobileMenu() {

    useEffect(() => {
        const clickBurgerMenu = (e) => {
            if (e.target.matches('.right img')) {
                e.target.classList.toggle('rotate-mobile-menu')

                const mobileMenu = document.querySelector('.hero header .mobile-menu')
                mobileMenu.classList.toggle('visibility')
                
                document.body.classList.toggle('disable-scroll')
            }
        }

        document.addEventListener('click', clickBurgerMenu)

        return () => {
            document.removeEventListener('click', clickBurgerMenu)
        }

    }, [])

    return (
        <div className="mobile-menu mobile">
            <HeaderLink links={["Overview", "Pricing", "Marketplace", "Features", "Integrations"]}>Product</HeaderLink>
            <HeaderLink links={["About", "Team", "Blog", "Careers"]}>Company</HeaderLink>
            <HeaderLink links={["Contact", "Newletter", "LinkedIn"]}>Connect</HeaderLink>
        </div>
    )
}