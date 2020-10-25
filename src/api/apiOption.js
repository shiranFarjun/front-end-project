import ApiBase from './ApiBase';

const getAllQuiz = async () => {   
    return await ApiBase.get('/quiz');
};

//////////  Requests for user    ///////////////

const create = async (username) => {       
    return await ApiBase.post(`/quiz/${username}/create`);
};

const updateUser = async (username, data) => {
    return await ApiBase.put(`quiz/${username}/update`,data);
};

const getUser = async (username) => {   
    return await  ApiBase.get(`quiz/${username}`);
};

const getAllResults = async (username) => {   
    return await  ApiBase.get(`/quiz/results/${username}`);
};

//////////////   Requests for friends /////////////

const createFriend = async (username,friendName) => {       
    return await ApiBase.post(`/quiz/${username}/answer/${friendName}/create`);
};

const updateFriend = async (username,friendName, data) => {
    return await ApiBase.put(`/quiz/${username}/answer/${friendName}/update`,data);
};

const getFriend = async (username) => {   
    return await  ApiBase.get(`/quiz/results/${username}`);
};

const getScore = async (username,friendName) => {   
    return await  ApiBase.get(`/quiz/${username}/answer/${friendName}/getScore`);
};



export default {
    getAllQuiz,
    create,
    updateUser,
    getUser,
    createFriend,
    updateFriend,
    getFriend,
    getScore,
    getAllResults
};