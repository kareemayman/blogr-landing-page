import { Features } from "./Sections/Features"
import { Hero } from "./Sections/Hero"
import { StateOfTheArt } from "./Sections/StateOfTheArt"
import illustrationDesktop from "../images/illustration-editor-desktop.svg"
import illustrationMobile from "../images/illustration-editor-mobile.svg"
import laptopDesk from '../images/illustration-laptop-desktop.svg'
import laptopMob from '../images/illustration-laptop-mobile.svg'
import { Footer } from "./Sections/Footer"

function App() {
  return (
    <>
      <Hero></Hero>
      <Features
        title="Designed for the future"
        imgDesk={illustrationDesktop}
        imgMob={illustrationMobile}
        art1Title="Introducing an extensible editor"
        art1Parag="Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog."
        art2Title="Robust content management"
        art2Parag="Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you're in full control."
      ></Features>
      <StateOfTheArt></StateOfTheArt>
      <Features
        imgDesk={laptopDesk}
        imgMob={laptopMob}
        art1Title='Free, open, simple'
        art1Parag='Blogr is a free and open source application backed by a large 
        community of helpful developers. It supports features such as code syntax 
        highlighting, RSS feeds, social media integration, third-party commenting 
        tools, and works seamlessly with Google Analytics. The architecture is 
        clean and is relatively easy to learn.'
        art2Title='Powerful tooling'
        art2Parag='Batteries included. We built a simple and straightforward CLI 
        tool that makes customization and deployment a breeze, but capable of producing 
        even the most complicated sites.'
        id="start"
      ></Features>
      <Footer></Footer>
    </>
  )
}

export default App
