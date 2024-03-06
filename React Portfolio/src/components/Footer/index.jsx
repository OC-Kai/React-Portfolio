import github from '../../assets/images/github.png'
import linkedIn from '../../assets/images/linkedin.png'
import facebook from '../../assets/images/facebook.png'

export default function Footer() {
    return (
        <div className='footer'>
            <img src={ github }></img>
            <a href='https://github.com/OC-Kai'>Github</a>
            <img src={ linkedIn }></img>
            <a href='https://www.linkedin.com/in/arthur-stone-102382133/'>LinkedIn</a>
            <img src={ facebook }></img>
            <a href='https://www.facebook.com/ArthurJStone96/'>Facebook</a>
        </div>
    )
}