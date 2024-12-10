import phones from "../../images/illustration-phones.svg"
import circles from "../../images/bg-pattern-circles.svg"
import { Article } from "../Components/Article"

export function StateOfTheArt() {
  return (
    <div className="state-of-the-art">
        <div className="container"><img src={phones} alt="phones" /></div>
      <div className="blue-wrapper">
        <img src={circles} alt="pattern background circles" />
        <div className="container">
          <Article title="State of the Art Infrastructure">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </Article>
        </div>
      </div>
    </div>
  )
}
