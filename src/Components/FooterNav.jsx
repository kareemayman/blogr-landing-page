export function FooterNav({ title, links = []}) {
    return (
        <div className='footer-nav'>
            <p>{title}</p>
            {links.map(link => <a key={crypto.randomUUID()} href={`#${link.toLowerCase()}`}>{link}</a>)}
        </div>
    )
}