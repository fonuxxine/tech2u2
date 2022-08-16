import logo from '../../assets/other/image4.svg';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Footer() {
    return <section>
        <div class="footer">
            <img class="footer-logo" src={logo} alt="footer"></img>
            <div class="footer-col">
                <CustomLink to="/">
                    <h3 class="footer-h3">Home</h3>
                </CustomLink>
                <CustomLink to="/about">
                    <h3 class="footer-h3">About</h3>
                </CustomLink>
                <CustomLink to="/technology">
                    <h3 class="footer-h3">Technology</h3>
                </CustomLink>
            </div>
            <div class="footer-col">
                <CustomLink to="/accessibility">
                    <h3 class="footer-h3">Accessibility</h3>
                </CustomLink>
                <CustomLink to="/stories">
                    <h3 class="footer-h3">Stories</h3>
                </CustomLink>
                <CustomLink to="/contact">
                    <h3 class="footer-h3">Contact Us</h3>
                </CustomLink>
                
            </div>
            <Link href="/contact" target="_blank" rel="noreferrer">
                <button class="footer-cta">Get Tech Support</button>
            </Link>
        </div>
    </section>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <Link className={isActive ? "active" : ""} to={to} {...props}>
            {children}
        </Link>
    )
}