import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import "./css/RaizFooter.css"

function RaizFooter(){
    return (
    
        <div>
            <footer id="footer-hero">
                <ul class="ul-footer">
                    <li>
                        <p class="h1-footer"><a href="#">Quem somos</a></p>
                    </li>
                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                </ul>
            </footer>
        </div>
    
    )
}

export default RaizFooter;