import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'https://backend-flaskrestx.herokuapp.com/api/v1',
  headers: {
    "content-type": "application/json"
  },
  responseType: "json"
});

function createAxiosRequestInterceptor(axiosInstance) {
  axiosInstance.interceptors.request.use(
    config => {
      const accessToken = localStorage.getItem('REACT_FE_ACCESS_TOKEN')
      if (accessToken) {
          config.headers.common.Authorization = `Bearer ${accessToken}`
      }
      return config;
    }
  )
}

function createAxiosResponseInterceptor(axiosInstance) {
  /*const interceptor = */axiosInstance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        return Promise.reject(error);
          // Reject promise if usual error
          /*if (error.status !== 401) {
              return Promise.reject(error);
          }*/

          /*
           * When response code is 401, try to refresh the token.
           * Eject the interceptor so it doesn't loop in case
           * token refresh causes the 401 response
           */
          /*axiosInstance.interceptors.response.eject(interceptor);

          return axiosInstance.post('/api/refresh_token', {
              'refresh_token': this._getToken('refresh_token')
          }).then(response => {
              //saveToken();
              //error.response.config.headers['Authorization'] = 'Bearer ' + response.data.access_token;
              return axiosInstance(error.response.config);
          }).catch(error => {
              //destroyToken();
              //this.router.push('/login');
              return Promise.reject(error);
          }).finally(createAxiosResponseInterceptor);*/
      }
  );
}

createAxiosRequestInterceptor(instance);
createAxiosResponseInterceptor(instance);

export default instance;