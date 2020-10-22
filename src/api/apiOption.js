import apiBase from './apiBase';

const getAllQuiz = async () => {   //////////////
    return await apiBase.get(`/quiz`);
};

// const get = async (idCategory, idChild) => {
//     return await apiBase.get(`/${idCategory}/cards-suppliers/${idChild}`);
// };

const create = async (username) => {           /////////
    return apiBase.post(`/quiz/${username}/create`);
};
// const updateUser = async (idCategory, idChild, data) => {
//     return apiBase.put(`/quiz/${username}/update`, data);
// };

const remove = async (idCategory, idChild) => {
    return await apiBase.delete(`/${idCategory}/cards-suppliers/${idChild}`);
};

const removeAll = async (idCategory) => {
    return await apiBase.delete(`/${idCategory}/cards-suppliers`);
};

const findByCompany = async (idCategory, name) => {
    return await apiBase.get(`/${idCategory}/cards-suppliers/`, {
        params: { 'nameCompany': name }
    });
};

export default {
    getAllQuiz,
    // get,
    create,
    // update,
    remove,
    removeAll,
    findByCompany
};