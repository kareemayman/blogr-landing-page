export function Article({ title, children }) {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  )
}
