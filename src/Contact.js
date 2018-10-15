import React , {Component } from "react";

class Contact extends Component{
  render() {
    return(


<div  className="container">
    
      <div className="card-deck">
      <div className="card">
        <img className="card-img-top" src={require('./images/query.jpg')} />
        <div className="card-body">
          <h5 className="card-title">Sales Inquiry</h5>
          <p className="card-text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the  century </p>
          <p className="card-text"><small class="text-muted">What they had to say</small></p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={require('./images/loct1.jpg')} />
        <div className="card-body">
          <h5 className="card-title">Location</h5>
          <p className="card-text">So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Ciceros De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.</p>
          <ul>
          <li className="text">Nairobi</li>
            <li className="text">Kisumu</li>
              <li className="text">Mombasa</li>

          </ul>
          <p className="card-text"><small class="text-muted">What they had to say</small></p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={require('./images/contact.jpg')} />
        <div className="card-body">
          <h5 className="card-title">Contact Us </h5>
          <p className="card-text"> And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the ” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset</p>
          <ul>
          <li className="text">Phone Number: +25478905683</li>
          <li className="text">Email us:mkatepoa@gmail.com</li>
          </ul>
          <p className="card-text"><small class="text-muted">What they had to say</small></p>
        </div>
      </div>
      </div>
</div>


    );
  }
}

export default Contact;
