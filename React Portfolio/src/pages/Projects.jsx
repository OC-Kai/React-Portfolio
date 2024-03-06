import reactSvg from '../assets/react.svg'

export default function Projects() {
    const items = [
        {
            title: "Project 1",
            image: reactSvg,
            link: "link"
        },
        {
            title: "Project 2",
            image: reactSvg,
            link: "link"
        },
        {
            title: "Project 3",
            image: reactSvg,
            link: "link"
        }
    ]
    return (
    <div>
        <h1>Projects</h1>
        {items.map(item => (
                <div key={item.title}>
                    <a href={item.link}><h3>{item.title}</h3></a>
                    <img src={item.image}></img>
                </div>
        ))}

    </div>
    )
}