import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function StoryBox({ image, title, description, link }) {
    return <div class="stories-box">
                <img src={image} alt=""/>
                <div class="story-content">
                    <div class="content">
                        <p>{description}</p>
                        <CustomLink class="stories-link-read" to={`${link}`}>
                            Read more &gt;
                        </CustomLink>
                    </div>
                    <div class="story-title">
                        {title}
                    </div>
                </div>
            </div>
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