import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import Search from './search';
import Table from './Table';

class Box extends Component {
    state = {
        notes: [
            { id: 0, title: "first", content: "this note will be the first one !", type: "text", date: "1/1/2019" },
            { id: 1, title: "second", content: "this note will be the second one !", type: "text", date: "1/1/2019" },
            { id: 2, title: "third", content: "this note will be the third one !", type: "text", date: "1/1/2019" },
            { id: 3, title: "forth", content: "this note will be the forth one !", type: "text", date: "1/1/2019" },
            { id: 4, title: "fifth", content: "this note will be the fifth one !", type: "text", date: "1/1/2019" },
        ],
        srchdata: [],
        hasValue: false,
        key: "a",
        srchkey: 0
    }

    delete = (index) => {
        var result;
        var temp = this.state.notes;
        result = temp.filter(el => el.id !== index)
        this.setState({ key: this.state.key + 1, srchkey: this.state.srchkey + 1, notes: result, hasValue: false, srchdata: [] })

    }
    update = (data) => {
        console.log(data)
        var temp = this.state.notes;
        for (var j = 0; j < temp.length; j++) {
            if (temp[j].id === data.id) {
                temp[j] = data
            }
        }
        this.setState({ key: this.state.key + 1, srchkey: this.state.srchkey + 1, notes: temp, hasValue: false, srchdata: [] })
    }

    viewsrch = (data) => {
        if (data !== "")
            this.setState({ srchdata: data, hasValue: true, key: this.state.key + 1 })
    }

    add = (data) => {
        var temp = this.state.notes;
        temp.push(data)
        this.setState({ key: this.state.key + 1, srchkey: this.state.srchkey + 1, notes: temp, hasValue: false, srchdata: [] })
    }

    render() {
        let formData = this.state.notes;
        let type = "notes"
        if (this.state.hasValue) {
            formData = this.state.srchdata;
            type = "search"
        }
        return (
            <div >
                <div className="cont">
                    <nav className="navbar  bg-dark ">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-11">
                            <img src="/imgs/icon.svg" width="45" height="45" alt="#" className="d-inline-block" />
                            <h1 className=" navbar-brand  text-right">
                                Note App
                            </h1>
                        </div>
                    </nav>
                </div>
                <Search key={this.state.srchkey} data={this.state.notes} add={this.add} srch={this.viewsrch} />
                <Table key={this.state.key} src={type} data={formData} update={this.update} delete={this.delete} />
            </div>
        );
    }
}
export default Box;
