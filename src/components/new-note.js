import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../style.css'
import Content from './content';

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", cont: "" }
  }

  parentchng = (e) => {
    this.props.change(this.state)
  }

  chngtitle = (e) => {
    this.setState({ title: e.target.value })
  }

  chngcont = (data) => {
    this.setState({ cont: data })
  }

  render() {
    let Nav = (
      <nav className="navbar">
        <div>
          <img src="/imgs/note.png" alt="#" width="35" height="35" />
          <h1 className=" navbar-brand">
            New Note
        </h1>
        </div>
        <button type="button" className="close" data-dismiss="modal" style={{ color: "red" }}>
          <span aria-hidden="true">&times;</span>
        </button>
      </nav>
    );
    return (
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {Nav}
            <div className="modal-body ">
              <form >
                <div className="form-group">
                  <label >Title</label>
                  <input type="text" id="title" className="form-control" defaultValue={this.props.title} onChange={this.chngtitle} required />
                </div>
                <div className="form-group">
                  <label>Content</label>
                  <Content cont={this.props.content} change={this.chngcont} />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success" onClick={this.parentchng} data-dismiss="modal"> Save </button>
                  <button id="close" type="button" className="btn btn-danger" data-dismiss="modal">Cancle</button>
                </div>
              </form>
            </div>
          </div>
        </div>
     
    );

  }
}
export default NewNote;
