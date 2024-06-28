import axios from 'axios';
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config'

const API_URL = 'https://simple-blog-app-backend.onrender.com';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return processResponse(response);
    },
    (error) => {
        return Promise.reject(processError(error));
    }
)

const processResponse = (response) => {
    if (response?.status === 200) {
        return {
            isSuccess: true,
            data: response.data
        }
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}

const processError = (error) => {
    if (error.response) {
        console.log('Error in response', error.toJSON())
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status,
            data: error.response
        }
    } else if (error.request) {
        console.log('Error in request', error.toJSON())
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }
    } else {
        console.log('Error in network', error.toJSON())
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        }
    }
}

const API = {

}

for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        //here i am getting an error the response in the frontend where i call the api that the api call is getting undefined in response so i put a {} brace here like a closure function but after remove this brace it work perfectky fine 
        axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            onUploadProgress: (ProgressEvent) => {
                if (showUploadProgress) {
                    let percentageCompleted = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress: (ProgressEvent) => {
                if (showDownloadProgress) {
                    let percentageCompleted = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
                    showDownloadProgress(percentageCompleted);
                }
            }
        })
}

export { API };

