import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import Box from './noteBox';

class Main extends Component {
  render() {
    return (
      <div className="main" >
        <Box />
      </div>
    );
  }
}
export default Main;
