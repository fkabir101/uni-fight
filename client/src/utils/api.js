import axios from "axios";

export default {
  createEvent: function(eventData){
    return axios.post('/api/events/create', eventData);
  },
  getEventById: function(id){
    return axios.get('/api/events/' + id);
  }
}