import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'

class Notes extends Component {
    edit = () => {
        this.props.update(this.props.id)
    }

    delete = () => {
        this.props.del(this.props.id)
    }

    render() {
        return (
            <tr>
                <th className="iconcol" scope="row">
                    <div className="btn btn-light " data-toggle="modal" data-target="#modalEditForm" onMouseDown={this.edit}>
                        <img src="/imgs/edit.png" alt="#" width="20" height="20" />
                    </div>
                    <div className="btn btn-light" onClick={this.delete} >
                        <img src="/imgs/delete.png" alt="#" width="20" height="20" />
                    </div>
                </th>
                <td className="titlecol">{this.props.title}</td>
                <td className="contcol">{this.props.content}</td>
                <td className="datecol">{this.props.date}</td>
            </tr>
        );
    }
}
export default Notes;
