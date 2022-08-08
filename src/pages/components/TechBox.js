import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function TechBox({ link, image, title }) {
    return <span className="tech-rect">
        <CustomLink to={`${link}`}>
            <img src={image} alt=""/>
            <p>{title}</p>
        </CustomLink>
    </span>
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
