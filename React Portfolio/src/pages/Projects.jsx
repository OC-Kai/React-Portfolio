import social from '../assets/images/socialNetwork.jpg'
import jobs from '../assets/images/jobs.jpg'
import commerce from '../assets/images/commerce.jpg'
import recipes from '../assets/images/recipes.jpg'
import weather from '../assets/images/weather.jpg'
import readme from '../assets/images/readme.png'

export default function Projects() {
    const items = [
        {
            title: "Social Network API",
            image: social,
            link: "https://github.com/OC-Kai/Social-Network-API"
        },
        {
            title: "Jobs R Us",
            image: jobs,
            link: "https://github.com/Scrysis/jobs-r-us"
        },
        {
            title: "E-Commerce Back-End",
            image: commerce,
            link: "https://github.com/OC-Kai/E-Commerce-Back-End"
        },
        {
            title: "README.md Generator",
            image: readme,
            link: "https://github.com/OC-Kai/README.md-Generator"
        },
        {
            title: "Recipe & Drink Finder",
            image: recipes,
            link: "https://github.com/torfirst/recipe-drink-api-proj"
        },
        {
            title: "WeatherAPI Website",
            image: weather,
            link: "https://github.com/OC-Kai/Weather-API-Website"
        }

    ]
    return (
    <div className = 'projects'>
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