import Axios, { AxiosError, AxiosRequestConfig } from "axios";

const initializers = {
  baseURL: "http://192.168.101.3:4444",
  headers: {
    'content-type': 'application/json'
  }
}

function getAxiosInstance() {
  return Axios.create(initializers);
}

interface PostDataProps {
  url: string;
  requestBody?: Record<string, unknown>;
  queryParams?: Record<string, unknown>;
  customHeader?: AxiosRequestConfig;
}

interface GetDataProps {
  url: string;
  queryParams?: Record<string, unknown>;
  customHeader?: AxiosRequestConfig;
}
const defaultGetDataProps = {
  queryParams: {},
};

const defaultPostDataProps = {
  requestBody: {},
  queryParams: {},
};
export const postData = (props: PostDataProps): Promise<string | any> => {
  const { url, queryParams, requestBody, customHeader } = props;
  const axios = getAxiosInstance();
  if (customHeader) {
    axios.defaults.headers = { ...axios.defaults.headers, ...customHeader.headers };
  }
  return axios.post(url, requestBody, { params: queryParams }).then((res) => { return res }).catch((err: AxiosError): Error => {
    const errResponse = err.response && err.response.data && err.response.data.errorMessage;
    if (errResponse) {
      throw errResponse;
    }
    if (err.message) {
      throw new Error(`ENDPOINT: "url", ${JSON.stringify(err.message)}`);
    }
    throw new Error('ENDPOINT: "url", something went wrong');
  })
};
postData.defaultProps = defaultPostDataProps;

export const getData = (props: GetDataProps): Promise<string | any> => {
  const { url, queryParams, customHeader } = props;
  const axios = getAxiosInstance();
  if (customHeader) {
    axios.defaults.headers = { ...axios.defaults.headers, ...customHeader.headers };
  }
  return axios.get(url, { params: queryParams }).then((res) => { return res }).catch((err: AxiosError): Error => {
    const errResponse = err.response && err.response.data && err.response.data.errorMessage;
    if (errResponse) {
      throw errResponse;
    }
    if (err.message) {
      throw new Error(`ENDPOINT: "url", ${JSON.stringify(err.message)}`);
    }
    throw new Error('ENDPOINT: "url", something went wrong');
  })
};
