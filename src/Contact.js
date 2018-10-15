import React , {Component } from "react";

class Contact extends Component{
  render() {
    return(


<div  className="container">
      <div clasName="car1">
      <h2 className="head">Sales Inquiry</h2>
      <img className="contact" src={require('./images/query.jpg')} />
      <p className="text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the  century </p>
      </div>
      <div clasName="car1">
      <h2 className="head">Location</h2>
      <img className="contact" src={require('./images/loct1.jpg')} />
      <p className="text">So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Ciceros De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.</p>
      <ul>
      <li className="text">Nairobi</li>
        <li className="text">Kisumu</li>
          <li className="text">Mombasa</li>

      </ul>
      </div>
      <div clasName="car1">
      <h2 className="head">Contact Us</h2>
        <img className="contact" src={require('./images/contact.jpg')} />
        <p className="text">And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the ” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.</p>
        <ul>
        <li className="text">Phone Number: +25478905683</li>
        <li className="text">Email us:mkatepoa@gmail.com</li>
        </ul>
      </div>
</div>


    );
  }
}

export default Contact;
