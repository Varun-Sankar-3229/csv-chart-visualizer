import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import '../styles/fileUpload.css';
import { connect } from 'react-redux';
import CreateSubmit from './submitBtn';

class FileUpload extends Component{
    constructor(props){
        super(props);
        this.state = {
            csvData: {
                keys: null,
                raw: null,
                parsed: null
            },
            dataValid: false
        };
    }

    handleFiles = file => {
        if(file[0].type === 'application/vnd.ms-excel'){
            let reader = new FileReader();

            reader.onload = () => {
                this.setState(prevState => ({
                    csvData: {
                        ...prevState.csvData,
                        raw: reader.result
                    },
                    dataValid: true
                }));
            }
            reader.readAsText(file[0]);
        }
        else{
            this.setState({
                csvData: {
                    keys: null,
                    raw: null,
                    parsed: null
                },
                dataValid: false
            });
        }
    }

    parseData = async() => {
        let rowData = this.state.csvData.raw.split('\n');
        
        let colData = await rowData.map(data => {
            return data.split(',');
        });

        await this.setState(prevState => ({
            ...prevState,
            csvData: {
                ...prevState.csvData,
                keys: colData[0],
                parsed: colData
            }
        }));
    }

    handleSubmit = async () => {
        await this.parseData();

        await this.props.setData(this.state.csvData);

        this.props.history.push('/data-visualize');        
    }

    render(){
        //console.log(this.state.csvData);
        return (
            <div className="container-fluid">
                <div className="justify-content-center upload-container">
                    <h4>Upload File</h4>
                    <div className="browse-wrapper border">
                        <div className="browser-wrapper-pad">
                            <h5>Drag & Drop</h5>
                            <h5>(OR)</h5>
                        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'} multipleFiles={false}>
                            <button className='btn custom-btn'>Browse File here</button>
                        </ReactFileReader>
                        </div>
                    </div>
                </div>

                <div id="submit-wrapper" className="submit-container">
                    <CreateSubmit valid={this.state.dataValid} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setData: (result) => {
            return dispatch(
            {
                type: 'SET_DATA',
                data: result
            });
        }
    }
};

export default connect(null ,mapDispatchToProps)(FileUpload);