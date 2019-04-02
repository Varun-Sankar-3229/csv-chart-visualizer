//initialize redux state
const initState = {
    csvData: null,
    keys: null,
    csvParsedData: null
}

function setState(state = initState, action){
    switch (action.type) {
        case 'SET_DATA':
            let data = action.data;
            return {
                keys: data.keys,
                csvData: data.raw,
                csvParsedData: data.parsed
            };

        default:
            return state;
    }
}

export default setState;