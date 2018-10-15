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
      <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
        </div>
      </div>
      </div>
    );
  }
}
export default Home;
