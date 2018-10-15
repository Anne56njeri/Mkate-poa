import React, { Component} from "react";

class Home extends Component {
  render(){
    return(

      <div className ="container">

      <div className="row">
      <div className="col-md-6">
      <img className="first" src={require('./images/image1.jpg')} />
      </div>
      <div className="col-md-6">
      <h2 className="head">Pastries</h2>
      <p className="text">Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
        </div>
      </div>
      <div className="row">
      <div className="col-md-6">
      <h2 className="head">CupCakes</h2>
      <p className="text">Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <div className="col-md-6">
      <img className="first" src={require('./images/image2.jpg')} />

        </div>
      </div>
      <div className="row">
      <div className="col-md-6">
      <img className="first" src={require('./images/cake.jpg')} />
      </div>
      <div className="col-md-6">
      <h2 className="head">Birthday Cakes</h2>
      <p className="text">ed ut perspiciatis unde omnis iste natus
      error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</p>
        </div>
      </div>
      <div className="row">
      <div className="col-md-6">
      <h2 className="head">Bread</h2>
      <p className="text">Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <div className="col-md-6">
      <img className="first" src={require('./images/bread2.jpg')} />

        </div>
      </div>
      <h2 className="head"><center>Our Happy Customers</center></h2>

      <div className="card-deck">
      <div className="card">
        <img className="card-img-top" src={require('./images/person2.jpg')} />
        <div className="card-body">
          <h5 className="card-title">Samantha Woods</h5>
          <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
          <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={require('./images/person3.jpg')} />
        <div className="card-body">
          <h5 className="card-title">Yvonne Orji</h5>
          <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis </p>
          <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top"  src={require('./images/person1.jpg')} />
        <div className="card-body">
          <h5 className="card-title">Ole Dume</h5>
          <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
          <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>




      </div>
    );
  }
}
export default Home;
