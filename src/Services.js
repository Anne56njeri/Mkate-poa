import React, {Component} from "react";

class Services extends Component {
  render() {
    return (
      <div className="container">
      <h2 className="head"><center>Services</center></h2>
      <div className="card-deck">
      <div className="card">
        <img className="card-img-top" src={require('./images/event1.jpg')} />
        <div className="card-body">
          <h5 className="card-title">Wedding Cakes</h5>
          <p className="card-text"> a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.</p>
          <p className="card-text"><small class="text-muted">What they had to say</small></p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={require('./images/event2.jpg')} />
        <div className="card-body">
          <h5 className="card-title">Party Events</h5>
          <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis </p>
          <p className="card-text"><small class="text-muted">What they had to say</small></p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top"  src={require('./images/event3.jpg')} />
        <div className="card-body">
          <h5 className="card-title">Graduation Events</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, sit donec nec, pede dictum fusce porta quis, consectetuer sed tincidunt vel, amet scelerisque aliquam, faucibus consequat. Dolor nibh libero</p>
          <p className="card-text"><small class="text-muted">What they had to say</small></p>
        </div>
      </div>
      </div>

      <div className="card-deck">
      <div className="card">
        <img className="card-img-top" src={require('./images/people1.jpg')} />
        <div className="card-body">
          <h5 className="card-title">Birthday Cakes</h5>
          <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
          <p className="card-text"><small class="text-muted">What they had to say</small></p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={require('./images/event4.jpg')} />
        <div className="card-body">
          <h5 className="card-title">Yummy cakes</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, sit donec nec, pede dictum fusce porta quis, consectetuer sed tincidunt ve</p>
          <p className="card-text"><small class="text-muted">What they had to say</small></p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top"  src={require('./images/event5.jpg')} />
        <div className="card-body">
          <h5 className="card-title">Dinner Parties</h5>
          <p className="card-text">Aliquet vivamus, placerat elit officiis, orci quam consectetuer erat tincidunt. Alias quis felis massa, sociis pellentesque ligula facilisis consectetuer arcu officia, mollis lectus at, congue tincidunt </p>
          <p className="card-text"><small class="text-muted">What they had to say</small></p>
        </div>
      </div>
      </div>


        </div>
    );
  }
}
export default Services;
