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

export function fetchBoardView(id) {
    const endPoint = 'http://localhost:4200/serverport';
    const boardViewUrl = id || '';

    return api.boardGet(
        endPoint,
        boardViewUrl,
        null,
    )
}
