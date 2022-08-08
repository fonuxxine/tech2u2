import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from './assets/other/image4.svg';

export default function Navbar() {
  return (
    <nav className="nav landing-banner nav-banner">
      <img class="logo" src={logo} alt=""/>
      <div className="nav-banner-about">
        <Link to="/" className="site_links">
        Home
        </Link>
        <ul class="nav_links">
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/technology">Technology</CustomLink>
          <CustomLink to="/accessibility">Accessibility</CustomLink>
          <CustomLink to="/stories">Stories</CustomLink>
          <CustomLink to="/contact">Contact Us</CustomLink>
        </ul>
        <a class="cta" href="https://lsm.utoronto.ca/lsm_portal" target="_blank" rel="noreferrer"><button>Get Tech Support</button></a>
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}