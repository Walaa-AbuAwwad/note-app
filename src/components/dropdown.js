import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../style.css'


class Dropdown extends Component {
  

  render() {
    
        return (
            <div className="dropdown show">
            <div className="btn btn-light dropdown-toggle" data-toggle="tooltip"  title={this.props.ttmain}  data-toggle="dropdown" >
            <img src={this.props.main} width="20" height="20" />
            </div>
            <div className="dropdown-menu">
        {this.props.data.map((d, idx)=>
          <div key={idx} id={d.id} className=" btn btn-light dropdown-item  " data-toggle="tooltip"  title={d.id} onClick={this.props.fontstyle}>
          <img src={d.src} width="20" height="20" style={{pointerEvents: "none"}}/>
          </div>
       )}

            </div>
          </div>
        );

    }
}

export default Dropdown;
