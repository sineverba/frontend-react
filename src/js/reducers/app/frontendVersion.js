const initialState = {
    frontendVersion: process.env.REACT_APP_APP_VERSION || 'N.D.'
}

function frontendVersion(state = initialState) {
    return state;
};
  
export default frontendVersion;