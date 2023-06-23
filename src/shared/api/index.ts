import axios from 'axios';
import { IRocket } from './types';

const httpClient = axios.create({
  baseURL: 'https://api.spacexdata.com',
  timeout: 1000,
});

httpClient.interceptors.response.use(
  (response) => {
    response.data.forEach((element) => {
      element.diameter.meters = `${element.diameter.meters}m`;
      element.height.meters = `${element.height.meters}m`;
      element.mass.kg = `${element.mass.kg}kg`;
    });
    return response.data;
  },
  (error) => Promise.reject(error)
);

export default httpClient;

class Api_instance {
  private rockets: string;

  constructor() {
    this.rockets = '/v3/rockets';
  }

  public async getRockets(): Promise<IRocket[]> {
    const rockets: IRocket[] = await httpClient.get(this.rockets);

    return rockets;
  }

  public async getRocket(id: string): Promise<IRocket> {
    const rocket: IRocket = await httpClient.get(this.rockets + '/' + id);

    return rocket;
  }

  public async addRocket(rocket: IRocket) {
    const response = await httpClient.post(this.rockets, rocket);

    return response;
  }
}

export const API = new Api_instance();
