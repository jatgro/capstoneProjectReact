import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class Login extends React.Component {
    ac = new AbortController();
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            jwtToken: '',
            items: []
        }
        this.handleSignIn = this.handleSignIn.bind(this);
    }


    componentWillUnmount() {
        this.ac.abort();
    }

    handleSignIn(e) {
        this.setState({
            username: this.refs.username.value,
            password: this.refs.password.value
        });
        console.log("in handle signin", this.state.username, this.state.password);
        const credentials = { "username": "Student_1", "password": "pass_1" };

        e.preventDefault();


        axios.post("http://localhost:8080/authenticate", credentials)
            .then(res => {
                this.setState({
                    jwtToken: "Bearer " + JSON.stringify(res.data.jwt).substring(1, JSON.stringify(res.data.jwt).length - 1)
                })
                //debugger
                axios.get("http://localhost:8080/getAllUsers", {
                    headers: {
                        'Authorization': this.state.jwtToken
                    }
                }).then(response => {
                    this.setState({
                        items: response.data
                    })
                    this.props.history.push({
                        pathname: "/userlist",
                        state: { details: this.state.items }
                    })
                })
            })


    }


    render() {
        return (

            <form onSubmit={e => this.handleSignIn(e)}>
                <h2> Sign In </h2>
                <div className="form-group">
                    <input name="name" type="text" ref="username" placeholder="Username" />
                </div>
                <div >
                    <input name="pass" type="password" ref="password" placeholder="Password" />
                </div>
                <br />

                <input type="submit" value="Login" />
            </form>
        )
    }
}

export default withRouter(Login);