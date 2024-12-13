export function HeaderLink({ links, children, desktop }) {
  
  return (
    <p className={`header-link ubuntu ${desktop ? 'desktop' : 'mobile'}`}>
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
