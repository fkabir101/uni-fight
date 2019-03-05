import axios from "axios";

export default {
  createEvent: function (eventData) {
    return axios.post('/api/events/create', eventData);
  },
  getEvents: function () {
    return axios.get("/api/events");
  },
  getById: function (id) {
    return axios.get('/api/events/' + id);
  },
  deleteEvent: function (id) {
    return axios.delete("/api/events/" + id);
  }
}