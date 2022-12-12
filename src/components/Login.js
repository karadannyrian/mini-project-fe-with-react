import { Component } from "react";
import FieldFeedback from "./FieldFeedback";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dirtyForm: false,
            payloadLogin: {
                email: null,
                password: null
            },
            loading: false
        }
    }

    validatePassword = (text) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        if (this.state.dirtyForm && !text) return 'empty'
        if (!text) return null
        if (text.match(regex)) return 'valid'
        else return 'invalid'
    }

    validateEmail = (text) => {
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm;
        if (this.state.dirtyForm && !text) return 'empty'
        if (!text) return null
        if (text.match(regex)) return 'valid'
        else return 'invalid'
    }

    login = () => {
        const { payloadLogin } = this.state
        const { email, password } = payloadLogin
        this.setState({ loading: true, dirtyForm: true })
        if (!email || !password) {
            this.setState({ loading: false })
            return null
        }
        setTimeout(() => {
            this.setState({ loading: false })
        }, 1000);
    }

    render() {
        const { payloadLogin, loading } = this.state
        return (
            <div className="mb-3">
                <div className="mb-3 row">
                    <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input id="inputEmail" type="email" className="form-control"
                            required
                            value={payloadLogin.email}
                            onChange={(e) => this.setState({ payloadLogin: { ...payloadLogin, email: e.target.value } })} />
                        {this.validateEmail(payloadLogin.email) === 'valid' &&
                            <FieldFeedback message="Valid email" type="valid" />}
                        {this.validateEmail(payloadLogin.email) === 'invalid' &&
                            <FieldFeedback message="Invalid email" type="invalid" />}
                        {this.validateEmail(payloadLogin.email) === 'empty' &&
                            <FieldFeedback message="Email is required" type="invalid" />}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input id="inputPassword" type="password" className="form-control"
                            required
                            value={payloadLogin.password}
                            onChange={(e) => this.setState({ payloadLogin: { ...payloadLogin, password: e.target.value } })} />
                        {this.validatePassword(payloadLogin.password) === 'valid' &&
                            <FieldFeedback message="Valid password" type="valid" />}
                        {this.validatePassword(payloadLogin.password) === 'invalid' &&
                            <FieldFeedback message="Invalid password" type="invalid" />}
                        {this.validatePassword(payloadLogin.password) === 'empty' &&
                            <FieldFeedback message="Password is required" type="invalid" />}
                    </div>
                </div>
                <div className="mb-3 center row">
                    <div className="col-12 col-md-6">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" />
                            <label class="form-check-label" for="invalidCheck">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 text-md-end">
                        <a href="/forgot-password">Forgot Password</a>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-12">
                        {!loading ?
                            <button type="button" className="w-100 btn btn-success" onClick={() => this.login()}>Get me in!</button> :
                            <button type="button" disabled className="w-100 btn btn-success">
                                <i className="fa fa-spin fa-spinner"></i>
                            </button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Login