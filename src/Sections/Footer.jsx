import logo from '../../images/logo.svg'
import { FooterNav } from '../Components/FooterNav'

export function Footer() {
    return (
        <div className="footer ubuntu" id="contact">
            <div className="container">
                <img src={logo} alt="logo" />
                <FooterNav title='Product' links={['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']}></FooterNav>
                <FooterNav title='Company' links={['About', 'Team', 'Blog', 'Careers']}></FooterNav>
                <FooterNav title='Connect' links={['Contact', 'Newsletter', 'LinkedIn']}></FooterNav>
            </div>
        </div>
    )
}