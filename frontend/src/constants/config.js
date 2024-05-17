export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Please wait while we load the data.'
    },
    success: {
        title: 'Success!',
        message: 'Data successfully loaded'
    },
    responseFailure: {
        title: 'Response Error',
        message: 'An error occures while fetching response from the server. please try again'
    },
    requestFailure: {
        title: 'Request Error',
        message: 'An error occured while parsing data'
    },
    networkError: {
        title: 'Network Error',
        message: "Can't connect to the server, Please check your internet connection"
    }
}

//API service call

export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST' },
    userLogin: { url: '/', method: 'POST' },
    createPost: { url: '/create/post', method: 'POST'},
    getPosts: { url: '/posts' , method: 'POST'}
} 