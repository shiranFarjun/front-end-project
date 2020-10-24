import ApiBase from './ApiBase';
import axios from 'axios';

const getAllQuiz = async () => {   
    return await ApiBase.get('/quiz');
};

// const get = async (idCategory, idChild) => {
//     return awaitApiBase.get(`/${idCategory}/cards-suppliers/${idChild}`);
// };

const create = async (username) => {       
    return await ApiBase.post(`/quiz/${username}/create`);
};

const updateUser = async (username, data) => {
    return await ApiBase.put(`quiz/${username}/update`,data);
};

const getUser = async (username) => {   
    return await  axios.get(`http://localhost:3006/quiz/${username}`);
};

const remove = async (idCategory, idChild) => {
    return await ApiBase.delete(`/${idCategory}/cards-suppliers/${idChild}`);
};

const removeAll = async (idCategory) => {
    return await ApiBase.delete(`/${idCategory}/cards-suppliers`);
};

const findByCompany = async (idCategory, name) => {
    return await ApiBase.get(`/${idCategory}/cards-suppliers/`, {
        params: { 'nameCompany': name }
    });
};

export default {
    getAllQuiz,
    // get,
    create,
    updateUser,
    getUser,
    remove,
    removeAll,
    findByCompany
};