export function WhiteButton({ link, white, children, className = ''}) {
  return (
    <a href={`#${link}`} className={`white-button ${white ? "bg-white" : "bg-transparent"} ubuntu ${className}`}>
      {children}
    </a>
  )
}
