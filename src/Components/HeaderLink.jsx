import { useEffect } from "react"

export function HeaderLink({ links, children }) {
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

        // Hide Header Link Menu If It Was Visible
        if (span.classList.contains("visibility")) {
          span.classList.remove("visibility")
        } else {
          // Hide All Other Header Link Menus & Showing Menu Related To Header Link Clicked
          spans.forEach((span) => {
            span.classList.remove("visibility")
          })
          span.classList.add("visibility")
        }
        // If User Clicks On Any Thing Else Hide Visibile Header Link Menus
      } else {
        spans.forEach((span) => {
          span.classList.remove("visibility")
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
    <p className="header-link ubuntu desktop">
      {children}
      <span className="special-menu">
        {links.map((link) => {
          return (
            <a href={`#${link.toLowerCase()}`} key={crypto.randomUUID()}>
              {link}
            </a>
          )
        })}
      </span>
    </p>
  )
}
