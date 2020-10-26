import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

export default class HttpClient {
  protected readonly axiosInstance: AxiosInstance;

  public constructor() {
    this.axiosInstance = axios.create({ headers: {} });
  }

  public async request<T>(
    options: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const response = await this.axiosInstance(options);
    return response;
  }

  public async requestWithInterceptors<T>(
    options: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const token = await this.TokenRequest();
    options['headers'] = options?.headers
      ? Object.assign(options.headers, {
          Authorization: token,
        })
      : { Authorization: token };

    const response = await this.axiosInstance(options);
    return response;
  }

  public async TokenRequest(): Promise<string> {
    const response = await axios.post(
      `${process.env.BASE_API_URL}/api/v1/Auth/AuthenticateApp`,
      {
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
      },
    );
    return `Bearer ${response.data.access_token}`;
  }
}
