import { Component } from "react";
import Login from "../components/Login";

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Welcome to Mini Project",
            currentComponentVisible: null,
        }
    }


    handleComponents = (renderType) => {
        const { currentComponentVisible } = this.state
        if (currentComponentVisible === renderType) this.setState({ currentComponentVisible: null, title: "Welcome to Mini Project" })
        else this.setState({ currentComponentVisible: renderType, title: renderType })
    }

    render() {
        const { title, currentComponentVisible } = this.state
        return (
            <div style={{ maxWidth: 500, maxHeight: 500 }} className="bg-light container position-absolute top-50 start-50 translate-middle rounded shadow-lg">
                <div className="mb-3">
                    {currentComponentVisible === null ?
                        <h4 className="p-2">{title}</h4> :
                        <div className="row p-2">
                            <div className="col-10">
                                <h4 className="p-2 text-capitalize">{title}</h4>
                            </div>
                            <div className="col-2 text-end">
                                <button type="button" className="p-2 btn btn-circle btn-small btn-light" onClick={() => this.handleComponents(currentComponentVisible)}>
                                    <i className="fa fa-arrow-left"></i>
                                </button>
                            </div>
                        </div>}
                </div>
                {currentComponentVisible === null &&
                    <div className="mx-3">
                        <div className="row">
                            <div className="col-12 col-md-6 p-2 ">
                                <button type="button" className="w-100 btn btn-large btn-primary" onClick={() => this.handleComponents('register')}>Register</button>
                            </div>
                            <div className="col-12 col-md-6 p-2 ">
                                <button type="button" className="w-100 btn btn-large btn-secondary" onClick={() => this.handleComponents('login')}>Login</button>
                            </div>
                        </div>
                    </div>}
                {currentComponentVisible === 'login' && <Login />}
            </div>
        )
    }
}

export default LandingPage