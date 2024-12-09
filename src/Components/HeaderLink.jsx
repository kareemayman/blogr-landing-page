export function HeaderLink({ links, children }) {
  function handleClick(e) {
    const span = e.target.querySelector("span") || e.target.closest("span")
    span.classList.toggle("visibility")
  }

  return (
    <p className="header-link ubuntu desktop" onClick={(e) => handleClick(e)}>
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
