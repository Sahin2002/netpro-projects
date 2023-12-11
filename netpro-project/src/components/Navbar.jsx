import React from 'react';
import '../style/Navbar.scss';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Navbar() {
    return (
        <div className='con'>
            <div className="top-navbar">
                <ul>
                    <li><LocationOnIcon /><Link>Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025</Link></li>
                    <li><WhatsAppIcon /><Link>+99450 5754080  </Link> <Link>+99450 5754070</Link></li>
                    <li><EmailIcon /><Link>info@netprogroup.az</Link></li>
                </ul>
                <div className="sosyla-media">
                    <div><FacebookIcon /></div>
                    <div><LinkedInIcon /></div>
                    <div><InstagramIcon /></div>
                    <div><WhatsAppIcon /></div>
                </div>
                <div>
                    <span>12.11.2023:</span>
                    <select >
                        <option selected>1USD - 1.7000 AZN</option>
                        <option value="1">1TL - 0.0059 AZN</option>
                        <option value="2">1RUB - 0.0019 AZN </option>
                        <option value="3">1EUR - 1.8300 AZN</option>
                    </select>
                    <select >
                        <option selected>AZN</option>
                        <option value="1">AZN</option>
                        <option value="2"> AZN </option>
                        <option value="3"> AZN</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Navbar