import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faInstagram, faPinterestP, faStackOverflow, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function SocialBar() {
    return (
        <div className="flex absolute m-8 top-0 right-0 flex-row-reverse w-50 h-4 gap-5">
            <a className="w-4" href="https://github.com/sheerapi" aria-label="My GitHub"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            <a className="w-5" href="https://discord.com/users/870401133741486111" aria-label="My Discord"><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon></a>
            <a className="w-4" href="https://instagram.com/sheerapi" aria-label="My Instagram"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
            <a className="w-4" href="https://twitter.com/sheerapii" aria-label="My Twitter"><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon></a>
            <a className="w-3" href="https://pinterest.com/sheerapi" aria-label="My Pinterest"><FontAwesomeIcon icon={faPinterestP}></FontAwesomeIcon></a>
            <a className="w-3" href="https://stackoverflow.com/users/23363415/sheerapi" aria-label="My Stack Overflow"><FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon></a>
        </div>
    );
}