import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Bar} from 'react-chartjs-2';
import Axis from './axis';
import Toggle from './toggle';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            xAxis: null,
            yAxis: null,
            data: {
                labels: null,
                datasets: [],
            },
            toggle: true
        };

        
    }

    alterState = (xData,yData) => {
        this.setState(prevState => ({
            ...prevState,
            toggle: true
            
        }));
    }

    getData = async(xAxis, yAxis) => {
        let xVal = [], yVal = [];
        await this.props.storeData.csvParsedData.forEach((data,index) => {
            if(index>0 && index<this.props.storeData.csvParsedData.length-1){
                data.forEach((arrData,arrIndex) => {
                    if(arrIndex == xAxis){
                        xVal.push(arrData);
                    }
                });
            }
        });

        await this.props.storeData.csvParsedData.forEach((data,index) => {
            if(index>0 && index<this.props.storeData.csvParsedData.length-1){
                data.forEach((arrData,arrIndex) => {
                    if(arrIndex == yAxis){
                        yVal.push(arrData);
                    }
                });
            }
        });

        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.data,
                labels: xVal,
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: yVal
                    }
                ]
            },
            toggle: false
        }));
    }
  

    render(){
        let display = null;

        let chartDisplay = (!this.state.toggle) ? (
            <div>
            <Toggle alterState={this.alterState}/>
            <Bar
                    data={this.state.data}
                    width={100}
                    height={100}
                    options={{
                        maintainAspectRatio: true
                    }}
            />
            </div>
        ) : (
            null
        );

        if(this.state.toggle){
            display = true ? (<Axis keys={this.props.storeData.keys} alterState={this.getData}/>) : null;
        }
        else{
            display = true ? chartDisplay : null;
        }

        return (
            <div>
                {display}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        storeData: state
    }
};

export default connect(mapStateToProps)(Chart);