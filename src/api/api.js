import axios from "axios";

const instance = axios.create({
  baseURL: 'https://backend-flaskrestx.herokuapp.com/api/v1',
  headers: {
    "content-type": "application/json"
  },
  responseType: "json"
});

function createAxiosRequestInterceptor(axiosInstance) {
  axiosInstance.interceptors.request.use(
    config => {
      //console.log(config);
      return config;
    }
  )
}

function createAxiosResponseInterceptor(axiosInstance) {
  /*const interceptor = */axiosInstance.interceptors.response.use(
      response => {
        //console.log(response);
        return response;
      },
      error => {
        //console.log(error);
        return error;
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