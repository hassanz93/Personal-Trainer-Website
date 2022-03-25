import axios from '../axios'

class Backend {

    getCategories() {
        return axios.get('categories');
    }

    getSubCategories(id){
        return axios.get(`subCategories/${id}`)
    }

    getTrainers() {
        return axios.get('trainers/')
    }

    getTutorial(id) {
        return axios.get(`tutorials/${id}`)
    }

    getTutorials() {
        return axios.get('/tutorials')
    }

    getLatestTutorials() {
        return axios.get('/tutorials/latest')
    }

    getTrainerTutorials() {
        return axios.get('/tutorials/trainer')
    }

    getLessons(id) {
        return axios.get(`lessons/${id}`)
    }

    registerUser(data) {
        return axios.post('users/register', data)
    }

    loginUser(data) {
        return axios.post('users/login/', data)
    }

    getTrainers(data){
        return axios.get('/trainers', data)
    }

    uploadProfilePic(formData) {
        return axios.post(`users/uploadProfilePic`, formData)
    }
    getComments() {
        return axios.get('/chats')
    }

    saveDateTime(data, id){
        console.log(data)
        return axios.post(`lessons/saveDate/${id}`, data)
    }

}

export default new Backend()