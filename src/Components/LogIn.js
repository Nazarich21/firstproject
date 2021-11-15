import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/LogIn.css"

class LogIn extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleEmailChange(event) {
        this.setState({value: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({value: event.target.value});
    }



    render(){
    return (
        <div className={"container mt-5 pt-5"}>
        <form>

        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3">Email address</label>
            <input type="email" id="form3Example3" className="form-control form-control-lg"
                   placeholder="Enter a valid email address" value={this.state.email}
                   onChange={this.handleEmailChange}/>
        </div>

        <div className="form-outline mb-3">
            <label className="form-label" htmlFor="form3Example4">Password</label>
            <input type="password" id="form3Example4" className="form-control form-control-lg"
                   placeholder="Enter password" value={this.state.password}
                   onChange={this.handlePasswordChange}/>
        </div>

        <div className="d-flex justify-content-between flex-row-reverse text-center text-lg-start mt-4 pt-2 me-auto">
            <button type="button" className="btn btn-primary btn-lg"
                    >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                <a href="#!" className="link-danger">Register</a></p>
        </div>

        </form>
        </div>
    );
    }
}
export default LogIn;


