import { Component } from "react";


class PageNotFound extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "PAGE NOT FOUND",
            currentComponentVisible: null,
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigate('/')
        }, 3000);
    }

    render() {
        const { title } = this.state
        return (
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="p-2 text-capitalize">{title}</h1>
            </div>
        )
    }
}

export default PageNotFound