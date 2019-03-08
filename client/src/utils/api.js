import axios from "axios";

export default {
  createEvent: function (eventData) {
    return axios.post('/api/events/create', eventData);
  },
  getEvents: function () {
    return axios.get("/api/events");
  },
  getEventById: function (id) {
    return axios.get('/api/events/' + id);
  },
  deleteEvent: function (id) {
    return axios.delete("/api/events/" + id);
  },
  login: function(loginCreds) {
    return axios.post('/api/users/login', loginCreds);
  },
  loginCheck: function() {
    return axios.get('/api/users/login');
  },
  logout: function() {
    return axios.get('/api/users/logout');
  },
  register: function(userInfo) {
    return axios.post("/api/users/register", userInfo);
  },
  attend: function(attendInfo){
    return axios.put('/api/events/attend', attendInfo);
  }
}