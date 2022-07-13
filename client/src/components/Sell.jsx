import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import sell from "../images/sell.jpg";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      owner: "",
      email: "",
      phone:"",
    };
    this.subMit = this.subMit.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }
  handleForm(e) {
    this.setState({
      [e.target.id]: e.target.files ? e.target.files[0] : e.target.value,
    });
  }

  subMit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("email", this.state.email);
    data.append("owner", this.state.owner);
    data.append("name", this.state.name);
    data.append("image", this.state.image);
    data.append("phone", this.state.phone);

    axios
      .post("https://affordy.herokuapp.com/api/upload", data)
      .then((response) => {
        alert(response.data.msg);
      })
      .catch((error) => {
        alert(error.response.data.msg);
      });
  }

  render() {
    return (
      <>
        <section className="signup">
          <div className="container mt-5">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">SELL</h2>
                <form className="register-form">
                  <div className="form-group">
                    <label >
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      id="owner"
                      onChange={this.handleForm}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter your Phone"
                      id="email"
                      onChange={this.handleForm}
                    />
                  </div>
                  <div className="form-group">
                    <label >
                      <i className="zmdi zmdi-file material-icons-name"></i>
                    </label>
                    <input
                      type="file"
                      placeholder="Choose File"
                      id="image"
                      onChange={this.handleForm}
                    />
                  </div>
                  {/* <div className="form-group">
                    <label >
                      <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter valid Number"
                      id="phone"
                      onChange={this.handleForm}
                    />
                  </div> */}
                  <div className="form-group">
                    <label >
                      <i className="zmdi zmdi-slideshow material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      placeholder="Product name"
                      id="name"
                      onChange={this.handleForm}
                    />
                  </div>

                  <button onClick={this.subMit}>Submit</button>
                </form>
              </div>
              <div className="signup-image">
                            <figure>
                                <img src={sell} alt="SELL" />
                            </figure>
                           
                        </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
