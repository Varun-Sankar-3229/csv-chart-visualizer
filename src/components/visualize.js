import React, { Component } from 'react';
import '../styles/visualize.css';
import Chart from './chart';
import Table from './table';

class Visualize extends Component{

    chooseFile = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <div className="choose-wrapper">
                <button className="btn custom-btn-choose" onClick={this.chooseFile}>Choose Another File</button>
                </div>
                <div className="row custom-row">
                    <div className="col col-table overflow-auto">
                    <Table />
                    </div>
                    <div className="col col-chart">
                    <Chart />
                    </div>
                </div>
            </div>
        );
    }
}

export default Visualize;