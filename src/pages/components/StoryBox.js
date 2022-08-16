import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function StoryBox({ image, title, description, link, name }) {
    return <div class="stories-box">
                <img src={image} alt=""/>
                <div class="content">
                    <div class="story-title">
                        {title}
                    </div>
                    <p>{description}</p>
                    <button class="contact-btn">
                        <CustomLink className="story-btn" to={`${link}`}>
                            Read {name}'s Story
                        </CustomLink>
                    </button>
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