import axios from 'axios';
import Config from '../config'

class apiClient {
  constructor() {
    const baseUrl = config().url.baseUrl;
    const api = axios.create({
      baseURL: baseUrl,
    });
  }

  register = user => {
    return api.post('/register', user)
    .then(response => {
      const { code } = response.data;
      return code;
    })
    .catch(error => console.log(error));
  };

  login = credentials => {
    return api.post('/login', credentials)
    .then(response => {
      const { code } = response.data;
      return code;
    })
    .catch(error => console.log(error))
  }
}