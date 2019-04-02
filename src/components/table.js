import React,{Component} from 'react';
import { CsvToHtmlTable } from 'react-csv-to-table';
import { connect } from 'react-redux';

class Table extends Component{
    render() {
        return (
            <CsvToHtmlTable
                data={this.props.storeData.csvData}
                csvDelimiter=","
                tableClassName="table table-striped table-hover"
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storeData: state
    }
};

export default connect(mapStateToProps)(Table);