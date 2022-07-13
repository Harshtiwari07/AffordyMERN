// import React, { useState } from "react";
import signpic from "../images/signup.png";
// import { NavLink, useHistory } from "react-router-dom";
// import "../App.css";

// const Signup = () => {
//     // const history = useHistory();
//     // const [user, setUser] = useState({
//     //     name: "",
//     //     email: "",
//     //     phone: "",
//     //     work: "",
//     //     password: "",
//     //     cpassword: "",
//     // });
//     // let name, value;
//     // const handleInputs = (e) => {
//     //     console.log(e);
//     //     name = e.target.name;
//     //     value = e.target.value;

//     //     setUser({ ...user, [name]: value })
//     // }

//     // const PostData = async (e) => {
//     //     e.preventDefault();
//     //     const { name,
//     //         email,
//     //         phone,
//     //         work,
//     //         password,
//     //         cpassword } = user;

//     //     const res = await fetch("/register", {
//     //         method: "POST",
//     //         headers: {
//     //             "Content-Type": "application/json"
//     //         },
//     //         body: JSON.stringify({
//     //             name,
//     //             email,
//     //             phone,
//     //             work,
//     //             password,
//     //             cpassword
//     //         })
//     //     });

//     //     const data = await res.json();
//     //     if (
//     //         res.status === 422 ||
//     //         res.status === 400 ||
//     //         res.status === 401 ||
//     //         !data
//     //       ) {
//     //         alert("Registration Failed");
//     //         console.log("registration failed");
//     //       } else {
//     //         alert("Registration Successful");
//     //         console.log("registration successful");

//     //         history.push("/login");
//     //       }

//     // }

//     return (
//         <>
//             <section className="signup">
//                 <div className="container mt-5">
//                     <div className="signup-content">
//                         <div className="signup-form">
//                             <h2 className="form-title">Sign Up</h2>
//                             <form method="POST" className="register-form" id="register-form">
//                                 <div className="form-group">
//                                     <label htmlFor="name">
//                                         <i className="zmdi zmdi-account material-icons-name"></i>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         id="name"
//                                         autoComplete="off"
//                                         // value={user.name}
//                                         // onChange={handleInputs}
//                                         placeholder="Your Name"
//                                     ></input>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="email">
//                                         <i className="zmdi zmdi-email material-icons-name"></i>
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         id="email"
//                                         autoComplete="off"
//                                         // value={user.email}
//                                         // onChange={handleInputs}
//                                         placeholder="Your Email"
//                                     ></input>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="phone">
//                                         <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
//                                     </label>
//                                     <input
//                                         type="number"
//                                         name="phone"
//                                         id="phone"
//                                         autoComplete="off"
//                                         // value={user.phone}
//                                         // onChange={handleInputs}
//                                         placeholder="Your Phone"
//                                     ></input>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="work">
//                                         <i className="zmdi zmdi-slideshow material-icons-name"></i>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="work"
//                                         id="work"
//                                         autoComplete="off"
//                                         // value={user.work}
//                                         // onChange={handleInputs}
//                                         placeholder="Your Profession"
//                                     ></input>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="password">
//                                         <i className="zmdi zmdi-lock material-icons-name"></i>
//                                     </label>
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         id="password"
//                                         autoComplete="off"
//                                         // value={user.password}
//                                         // onChange={handleInputs}
//                                         placeholder="Your Password"
//                                     ></input>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="cpassword">
//                                         <i className="zmdi zmdi-lock material-icons-name"></i>
//                                     </label>
//                                     <input
//                                         type="password"
//                                         name="cpassword"
//                                         id="cpassword"
//                                         autoComplete="off"
//                                         // value={user.cpassword}
//                                         // onChange={handleInputs}
//                                         placeholder="Confirm Your Password"
//                                     ></input>
//                                 </div>
//                                 <div className="form-group form-button">
//                                     <input
//                                         type="submit"
//                                         name="signup"
//                                         id="signup"
//                                         className="form-submit"
//                                         value="register"
//                                         // onClick={PostData}
//                                     />
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="signup-image">
//                             <figure>
//                                 <img src={signpic} alt="Signup " />
//                             </figure>
//                             <NavLink to="/login" className="signup-image-ink">
//                                 I am Already Registered
//                             </NavLink>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Signup;

//===============================OLD WEBSITE SIGNUP=====================

import React, { Component } from "react";

import "../App.css";
import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      vPassword: "",
    };
    this.subMit = this.subMit.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }
  handleForm(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  subMit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    data.append("name", this.state.name);
    // data.append("phone", this.state.phone);
    data.append("verifiedPassword", this.state.vPassword);

    axios
      .post("https://affordy.herokuapp.com/api/user-register", data)
      .then((response) => {
        alert(response.data.msg);
      })
      .catch((error) => {
        alert(error.response.data.msg);
      });
  }

  render() {
    return (
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">SignUp</h2>
              <form className="register-form">
                <div className="form-group">
                <label htmlFor="name">
                                         <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    id="name"
                    onChange={this.handleForm}
                  />
</div>

                  <div className="form-group">
                 <label htmlFor="email">
                   <i className="zmdi zmdi-email material-icons-name"></i>
                   </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    id="email"
                    onChange={this.handleForm}
                  /></div>

{/* <div className="form-group">
<label htmlFor="Phone">
                      <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                    </label>
                  <input
                    type="number"
                    placeholder="Your Phone Number"
                    id="number"
                    onChange={this.handleForm}
                  />
                  </div> */}

                  <div className="form-group">
                  <label htmlFor="password">
                                         <i className="zmdi zmdi-lock material-icons-name"></i>
                                     </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    id="password"
                    onChange={this.handleForm}
                  />
                  </div>

                  <div className="form-group">
                  <label htmlFor="vpassword">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                     </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    id="vPassword"
                    onChange={this.handleForm}
                  /></div>

                  <button onClick={this.subMit}>SIGN UP</button>
                
              </form>
            </div>
            <div className="signup-image">
            
              <figure>
                 <img src={signpic} alt="Signup " />
              </figure>
              </div>
          </div>
        </div>
      </section>
    );
  }
}
