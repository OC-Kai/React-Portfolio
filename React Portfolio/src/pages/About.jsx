import penguin from "../assets/images/KDA Peng.png"

export default function About() {
    return (
    <div className="about">
        <h1>About Me</h1>
        <img src={penguin} ></img>
        <p>Hello! My name is Arthur and I am a programmer just starting out my journey. Here is my portfolio where I plan to display all of my completed and upcoming projects. You can navigate above to contact me, view my projects, and download my resume. Linked below are my Github, LinkedIn, and socials. I hope you enjoy your visit!</p>
    </div>
    )
}