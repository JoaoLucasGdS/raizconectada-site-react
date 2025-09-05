import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import "./css/RaizFooter.css"

function RaizFooter(){
    return (
            <footer className="mt-auto d-flex flex-column">
                <ul class="ul-footer">
                    
                    <li><a href="#">Quem somos</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                </ul>
                <p className="text-white-50 text-center mt-4">&copy; 2025 Raiz Conectada. All rights reserved.</p>
            </footer>
            
    )
}

export default RaizFooter;