export function WhiteButton({ link, white, children }) {
  return (
    <a href={`#${link}`} className={`white-button ${white ? "bg-white" : "bg-transparent"} ubuntu`}>
      {children}
    </a>
  )
}
