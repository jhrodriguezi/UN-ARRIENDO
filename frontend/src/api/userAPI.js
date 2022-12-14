import axios from 'axios';
import { URL_BACKEND } from '../constantes';
axios.defaults.withCredentials = true;

const URL = URL_BACKEND;

/*
    Description
        -
    Parameters
        -
    What the function returns
        -
*/
export const logInAPI = (userData) => {
    return axios.post(URL+"/user/login", userData);
}

export const logOutAPI = () => {
    return axios.post(URL+"/user/logout");

}

export const registerUser = (userData) => {
    return axios.post(URL+"/user/register", userData);
};

export const updateUser = (userData) => {
    return axios.put(URL+"/user/update", userData);
}

export const getUserApi = (idUser) => {
    return axios.get(URL+"/user/get/"+idUser);
}

export const getProfileAPI = (idUser) => {
    return axios.get(URL+"/user/profile/"+idUser);
}

export const setReviewProfileAPI = (body) => {
    return axios.post(URL+"/user/review/", body);
}

export const deleteReviewProfileAPI = (body) => {
    return axios.post(URL+"/user/reviewDelete/", body);
}

export const updateReviewProfileAPI = (body) => {
    return axios.put(URL+"/user/reviewUpdate/", body);
}

export const searchAPI = (value) => {
    return  axios.get(URL+"/user/find/"+value);
}

export const filterAPI = (value) => {
    console.log(URL+"/listing/search", {value})
    return  axios.get(URL+"/listing/search", { params:  value  });
}