import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from './Wave';

function Donate() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeColor('rgba(23, 25, 35,'));
  })
  return (
    <div style={{backgroundColor: 'rgba(23, 25, 35)'}} className="pb-4" >
        <div className="container2 text-center mb-4" id="donate">
            <div className="row">
                <div id="proj">
                    <p className="h1" style={{textAlign: 'center'}}>
                        Donate
                    </p>
                </div>
            </div>
            <p class="text-light" style={{fontSize: "1.5em"}} >If you are someone who is a fan of my work, perhaps I've created or contributed to something you use daily, and you would like to donate in order to give me more opportunities to work on projects. Then, please click the button below to get started.</p>
            <a href="https://www.paypal.com/donate/?business=DEGHJK7EWBX6J&no_recurring=0&currency_code=USD" target="_blank"><button className="btn"><span className="greet">Thank you!</span><i className="fa-solid fa-hand-holding-dollar"></i></button></a>
        </div>
    </div>
  );
}

export default Donate;