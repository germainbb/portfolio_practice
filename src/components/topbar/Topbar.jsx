import './topbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserTie } from "@fortawesome/free-solid-svg-icons";

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
           <div className="wrapper">
                <div className="left">
                    <a href="#portfolio" className="logo">GThink.</a>
                    <div className="itemContainer">
                        <FontAwesomeIcon icon={faUserTie} className="icon" color="#15023a"/>
                        <span className="text">+260776778798</span>
                        <FontAwesomeIcon icon={faEnvelope} className="icon" color="#15023a"/>
                        <span className="text">germainbb3@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>  
           </div> 
        </div>
    )
}
