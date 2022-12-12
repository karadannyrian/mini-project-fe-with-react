import { Component } from "react";
import FieldFeedback from "./FieldFeedback";

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dirtyForm: false,
            payloadRegister: {
                email: "",
                password: ""
            },
            loading: false
        }
    }

    validateField = (type, text) => {
        let regex = ''
        const regexIdentity = /^([0-9]).{16,}$/gm
        const regexFullName = /[^a-zA-Z\x20]/g
        const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm;
        switch (type) {
            case 'identityNumber': regex = regexIdentity; break
            case 'fullName': regex = regexFullName; break
            case 'email': regex = regexEmail; break
            case 'password': regex = regexPassword; break
            default: break
        }
        if (this.state.dirtyForm && !text) return 'empty'
        if (!text) return null
        if (text.match(regex)) return 'valid'
        else return 'invalid'
    }

    register = () => {
        const { payloadRegister } = this.state
        const { email, password } = payloadRegister
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
        const { payloadRegister, loading } = this.state
        return (
            <div className="mb-3">
                <div className="mb-3 row">
                    <label className="col-sm-4 col-form-label">Identity Number</label>
                    <div className="col-sm-12">
                        <input id="identityNumber" type="text" className="form-control"
                            required
                            value={payloadRegister.identityNumber}
                            onChange={(e) => this.setState({ payloadRegister: { ...payloadRegister, identityNumber: e.target.value } })} />
                        {this.validateField('identityNumber', payloadRegister.identityNumber) === 'valid' &&
                            <FieldFeedback message="Valid Identity Number" type="valid" />}
                        {this.validateField('identityNumber', payloadRegister.identityNumber) === 'invalid' &&
                            <FieldFeedback message="Invalid Identity Number" type="invalid" />}
                        {this.validateField('identityNumber', payloadRegister.identityNumber) === 'empty' &&
                            <FieldFeedback message="Identity Number is required" type="invalid" />}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-4 col-form-label">Full Name</label>
                    <div className="col-sm-12">
                        <input id="fullName" type="text" className="form-control"
                            required
                            value={payloadRegister.fullName}
                            onChange={(e) => this.setState({ payloadRegister: { ...payloadRegister, fullName: e.target.value } })} />
                        {this.validateField('fullName', payloadRegister.fullName) === 'valid' &&
                            <FieldFeedback message="Valid Full Name" type="valid" />}
                        {this.validateField('fullName', payloadRegister.fullName) === 'invalid' &&
                            <FieldFeedback message="Invalid Full Name" type="invalid" />}
                        {this.validateField('fullName', payloadRegister.fullName) === 'empty' &&
                            <FieldFeedback message="Full Name is required" type="invalid" />}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-4 col-form-label">Email</label>
                    <div className="col-sm-12">
                        <input id="email" type="email" className="form-control"
                            required
                            value={payloadRegister.email}
                            onChange={(e) => this.setState({ payloadRegister: { ...payloadRegister, email: e.target.value } })} />
                        {this.validateField('email', payloadRegister.email) === 'valid' &&
                            <FieldFeedback message="Valid Email" type="valid" />}
                        {this.validateField('email', payloadRegister.email) === 'invalid' &&
                            <FieldFeedback message="Invalid Email" type="invalid" />}
                        {this.validateField('email', payloadRegister.email) === 'empty' &&
                            <FieldFeedback message="Email is required" type="invalid" />}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-4 col-form-label">Password</label>
                    <div className="col-sm-12">
                        <input id="password" type="password" className="form-control"
                            required
                            value={payloadRegister.password}
                            onChange={(e) => this.setState({ payloadRegister: { ...payloadRegister, password: e.target.value } })} />
                        {this.validateField('password', payloadRegister.password) === 'valid' &&
                            <FieldFeedback message="Valid Password" type="valid" />}
                        {this.validateField('password', payloadRegister.password) === 'invalid' &&
                            <FieldFeedback message="Invalid Password (Min 8 char, must include one special char)" type="invalid" />}
                        {this.validateField('password', payloadRegister.password) === 'empty' &&
                            <FieldFeedback message="Password is required (Min 8 char, must include one special char)" type="invalid" />}
                    </div>
                </div>
                <div className="mb-3 center row">
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
                            <label className="form-check-label" >
                                I agree with terms and conditions
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-12">
                        {!loading ?
                            <button type="button" className="w-100 btn btn-success" onClick={() => this.register()}>Sign me in!</button> :
                            <button type="button" disabled className="w-100 btn btn-success">
                                <i className="fa fa-spin fa-spinner"></i>
                            </button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Register