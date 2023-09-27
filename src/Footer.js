import { Link } from 'react-router-dom';
import './App.css';

const d = new Date();
const year = d.getFullYear();

function Footer() {
  return (
    <div className="fluid-container" style={{width: '100%'}}>
        <div className="row" style={{backgroundColor: 'black'}}>
            <footer id="footer" style={{paddingTop: '1%', paddingBottom: '3%', textAlign: 'center', transform: 'translateY(25%)'}}>
                Created <Link to="" style={{color: 'crimson'}}>Dante Bradshaw</Link> |  ©{year} <br/>All rights reserved.
            </footer>
        </div>
    </div>
  );
}

export default Footer;
