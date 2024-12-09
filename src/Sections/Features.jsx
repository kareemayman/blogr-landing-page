import illustrationDesktop from "../../images/illustration-editor-desktop.svg"
import illustrationMobile from "../../images/illustration-editor-mobile.svg"
import { Article } from "../Components/Article"

export function Features() {
  return (
    <div className="features overpass" id="features">
      <div className="container">
        <h1>Designed for the future</h1>
        <img src={illustrationDesktop} alt="editor illustration" className="desktop"/>
        <img src={illustrationMobile} alt="editor mobile" className="mobile"/>
        <div className="article-container">
          <Article title="Introducing an extensible editor">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </Article>
          <Article title="Robust content management">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you're in full control.
          </Article>
        </div>
      </div>
    </div>
  )
}
