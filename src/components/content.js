import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'

class Content extends Component {
    change = (e) => {
        this.props.change(e.target.value)
    }
    render() {
        return (
            <div className="content">
                <textarea id="text" type="text" className="md-textarea form-control" rows="5"
                    defaultValue={this.props.cont} onChange={this.change}></textarea>
            </div>
        );
    }
}

export default Content;
