import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import NewNote from './new-note';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      index: 0
    }
  }
  newNote = (data) => {
    var d = new Date();
    var index = this.state.data.length
    var temp = { id: this.state.data[index - 1].id + 1, title: data.title, content: data.cont, date: d.getDate()+"/"+d.getMonth()+1+"/"+d.getFullYear()}
    this.props.add(temp)
  }

  search = () => {
    var temp = this.state.data;
    var match = []
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].title === document.getElementById('search').value)
        match.push(temp[i])
    }
    this.props.srch(match)
  }

  isEnter = (e) => {
    if (e.key === 'Enter') {
      this.search()
    }
  }

  render() {
    return (
      <div>
        <div className=" row search">
          <div className="btn btn-info col-lg-1" data-toggle="modal" data-target="#modalLoginForm">
            <img src="/imgs/add.png" alt="#" width="20" height="20" />
          </div>
          <input type="text" className="srchinput col-lg-10 " id="search" onKeyPress={this.isEnter} placeholder="search by title..." />
          <div className=" col-lg-1 btn btn-info " onClick={this.search} >
            <img src="/imgs/search.png" width="20" alt="#"  height="20" />
          </div>
        </div>
        <div key={this.state.index} className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <NewNote change={this.newNote} />
        </div>
      </div>
    );

  }
}
export default Search;
