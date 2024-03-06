import { Link } from 'react-router-dom';
import './App.css';

const d = new Date();
const year = d.getFullYear();

function Footer() {
  return (
    <div className="fluid-container w-100">
        <div className="row bg-black">
            <footer id="footer" className='text-center pt-4 pb-4'>
                Created by <Link to="" style={{color: 'crimson'}}>Dante Bradshaw</Link> |  ©{year} <br/>All rights reserved.
            </footer>
        </div>
    </div>
  );
}

export default Footer;
