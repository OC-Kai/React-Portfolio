import resume from '../assets/resume.pdf'

export default function Resume() {
    return (
    <div className = 'resume'>
        <h1>Resume</h1>
        <a href={resume}download>Click here to download a copy of my resume!</a>
    </div>
    )
}