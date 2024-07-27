import { useEffect } from 'react';
import { changeColor } from '../Reducers/Wave';
import { changeText } from '../Reducers/HeroText';

function Contact(props) {
  const heroOptions = {
    text: "Contact",
    typedText: 'Me!',
    subText: "I'd love to hear more."
  };

  useEffect(() => {
    props.dispatch(changeColor('rgba(23, 25, 35,'));
    props.dispatch(changeText(heroOptions));
  })
  return (
    <div style={{backgroundColor: 'rgba(23, 25, 35)'}} className="pb-4" >
        <div className="container2" id="formcont">
            <form method="POST" action="https://getform.io/f/bf00913b-6ac4-4206-afbe-873948ce80a0">

                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" required placeholder="Your name.." />

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
