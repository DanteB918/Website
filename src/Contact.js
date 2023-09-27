import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from './Wave';

function Contact() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeColor('rgba(23, 25, 35,'));
  })
  return (
    <div style={{backgroundColor: 'rgba(23, 25, 35)'}} className="pb-4" >
        <div className="container" id="project" style={{paddingBottom: '5%'}}>
            <div className="row">
                <div id="proj">
                    <p className="h1" style={{textAlign: 'center'}}>
                    Contact Me!
                    </p>
                </div>
            </div>    
        </div>
    <div className="container2" id="formcont">
        <form method="POST" action="https://getform.io/f/bf00913b-6ac4-4206-afbe-873948ce80a0">
        
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" autoFocus required placeholder="Your name.." />
        
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" required placeholder="Your last name.." />

            <label for="email">Email</label>
            <input type="email" name="Email" required placeholder="Your email.." />
        
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}}></textarea>
        
            <input type="submit" value="Submit" />

        </form>
    </div>
    </div>
  );
}

export default Contact;
