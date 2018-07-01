import api from './api';

export function fetchBoardList() {
    const endPoint = 'http://localhost:4200/serverport';
    const boardListUrl = '';

    return api.boardGet(
        endPoint,
        fetchBoardList, 
        null, 
    );
}