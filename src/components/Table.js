import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import Notes from './notes';
import NewNote from './new-note';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      index: 0,
      key: 0,
    }
  }

  update = (x) => {
    var temp = this.state.data
    var ind;
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].id === x)
        ind = i
    }
    this.setState({ index: ind, key: this.state.key + 1 })
  }

  del = (index) => {
    this.setState({ key: this.state.key + 1 })
    this.props.delete(index, this.props.src)
  }

  change = (data) => {
    var d = new Date();
    var temp = this.state.data;
    if (data.title !== "")
      temp[this.state.index].title = data.title;
    if (data.cont !== "")
      temp[this.state.index].content = data.cont;
      temp[this.state.index].date= d.getDate()+"/"+d.getMonth()+1+"/"+d.getFullYear()
    this.props.update(temp[this.state.index], this.props.src)
  }

  render() {
    return (
      <div className="mytable">
        <div className="table-responsive-sm ">
          <table className="table  table-hover ">
            <thead>
              <tr >
                <th scope="col"></th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Updated Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((d, idx) =>
                <  Notes key={idx} title={d.title} content={d.content} date={d.date} id={d.id}
                  del={this.del} update={this.update} />
              )}
            </tbody>
          </table>
        </div>
        {this.state.data.length !== 0 ?
          <div key={this.state.key} className="modal fade" id="modalEditForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <NewNote title={this.state.data[this.state.index].title} content={this.state.data[this.state.index].content} change={this.change} />
          </div>
          : null}
      </div>
    );

  }
}
export default Table;
