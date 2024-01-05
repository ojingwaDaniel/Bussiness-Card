import ClientPics from './images/client-pic.jpg'
import EmailIcon from './images/Mail.png'
import LinkedinIcon from './images/linkedin.png'
export default function Info(){
    return (
      <div className="info">
        <img src={ClientPics} className="client-pic" alt="NOImage" />
        <h1 className="client-name">Ojingwa Daniel</h1>
        <h3 className="client-job">Frontend Developer</h3>
        <h4 className="client-website">OjingwaDaniel.com</h4>
        <div className="info-button">
          <button>
            <img src={EmailIcon} alt="NoImage" />
            <span>Email</span>
          </button>
          <button className="linkedin">
            <img src={LinkedinIcon} alt="NoImage" />
            <span>Linkedin</span>
          </button>
        </div>
      </div>
    );
}