import FacebookICon from './images/Facebook Icon.png'
import InstagramIcon from './images/Instagram Icon.png'
import GithubICon from './images/GitHub Icon.png'
import TwitterIcon from './images/Twitter Icon.png'

export default function Footer() {
    return (
      <div className="footer">
        <img src={FacebookICon} alt="NoImage" />
        <img src={InstagramIcon} alt="NoImage" />
        <img src={GithubICon} alt="NoImage" />
        <img src={TwitterIcon} alt="NoImage" />
      </div>
    );
}