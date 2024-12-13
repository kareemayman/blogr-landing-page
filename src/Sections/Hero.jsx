import logoImg from '../../images/logo.svg'
import { HeaderLink } from '../Components/HeaderLink'
import { WhiteButton } from '../Components/WhiteButton'
import burgerIcon from '../../images/icon-hamburger.svg'
import { MobileMenu } from './MobileMenu'
import { useEffect } from 'react'

export function Hero() {

    // useEffect to Add Event Listener To Handle Clicking On Header Links
  useEffect(() => {
    // Add Function For Click Event
    const clickEvent = (e) => {
      // Select All Header Link Menus
      const spans = document.querySelectorAll("p.header-link span")

      // Handle Clicking On Header Link
      if (e.target.matches("p.header-link")) {
        // Select Header Link Menu
        const span = e.target.querySelector("span")
        console.log(span)

        // Hide Header Link Menu If It Was Visible
        if (span.classList.contains("visibility")) {
          span.classList.remove("visibility")
          e.target.classList.remove('rotate')
        } else {
          // Hide All Other Header Link Menus & Showing Menu Related To Header Link Clicked
          spans.forEach((span) => {
            span.classList.remove("visibility")
            span.closest('.header-link').classList.remove('rotate')
          })
          span.classList.add("visibility")
          e.target.classList.add('rotate')
        }
        // If User Clicks On Any Thing Else Hide Visibile Header Link Menus
      } else {
        spans.forEach((span) => {
          span.classList.remove("visibility")
          span.closest('.header-link').classList.remove('rotate')
        })
      }
    }
    document.addEventListener("click", clickEvent)

    // To Remove Event Listener When Unmounting Component To Avoid Bugs
    return () => {
      document.removeEventListener("click", clickEvent)
    }
  }, []) // Empty Dependency Array To Run Only 1 Time When Component Is Mounted


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
                        <HeaderLink links={["Overview", "Pricing", "Marketplace", "Features", "Integrations"]} desktop>Product</HeaderLink>
                        <HeaderLink links={["About", "Team", "Blog", "Careers"]} desktop>Company</HeaderLink>
                        <HeaderLink links={["Contact", "Newletter", "LinkedIn"]} desktop>Connect</HeaderLink>
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