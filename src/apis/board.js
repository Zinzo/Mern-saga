import api from './api';

export function fetchBoardList() {
    const endPoint = 'http://localhost:4200/serverport';
    const boardListUrl = '';

    return api.boardGet(
        endPoint,
        boardListUrl, 
        null, 
    );
}

// export function fetchBoardLoading() {
//     console.log("Loading Success");
// }

export function fetchBoardView(id) {
    const endPoint = 'http://localhost:4200/serverport';
    const boardViewUrl = id || '';

    return api.boardGet(
        endPoint,
        boardViewUrl,
        null,
    )
}

export function fetchBoardCreate(datas) {
    const endPoint = "http://localhost:4200/serverport/add";
    const boardCreateUrl = '';

    return api.boardPost(
        endPoint,
        boardCreateUrl,
        datas,
    )
    
    // const serverport = {
    //     name: this.state.name,
    //     port: this.state.port
    // }
    // axios.post('http://localhost:4200/serverport/add', serverport)
    // .then(res => console.log(res.data));
    // this.setState({
    //     name: '',
    //     port: ''
    // })"
}
