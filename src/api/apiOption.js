import apiBase from './apiBase';

const getAll = async (idCategory) => {
    return await apiBase.get(`/${idCategory}/cards-suppliers`);
};

const get = async (idCategory, idChild) => {
    return await apiBase.get(`/${idCategory}/cards-suppliers/${idChild}`);
};

const create = async (username) => {
    return apiBase.post(`/quiz/${username}/create`);
};
const update = async (idCategory, idChild, data) => {
    return apiBase.put(`/${idCategory}/cards-suppliers/${idChild}`, data);
};

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
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByCompany
};