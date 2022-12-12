import { Component } from "react";

class FieldFeedback extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'valid',
            message: null
        }
    }
    render() {
        const { message, type } = this.props
        return (
            <div className={`d-block ${type || 'valid'}-feedback`}>
                {message}
            </div>
        )
    }
}

export default FieldFeedback