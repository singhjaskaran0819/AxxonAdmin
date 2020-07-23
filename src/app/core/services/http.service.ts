import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private API_SERVER = environment.apiUrl;

  headers = new HttpHeaders({
    'Accept': "application/vnd.softswiss.v1+json",
    'Content-Type': 'application/json',
    'Accept-Language': 'en'
  });

  constructor(private httpClient: HttpClient) { }
  public getData(apiPath: string, data?: any) {
    return this.httpClient.get<any>(`${this.API_SERVER}${apiPath}`, { params: data, headers: this.headers })
  }

  public postData(apiPath: string, data?: any) {
    return this.httpClient.post<any>(`${this.API_SERVER}${apiPath}`, data, { headers: this.headers })
  }

  public putData(apiPath: string, data: any) {
    return this.httpClient.put<any>(`${this.API_SERVER}${apiPath}`, data, { headers: this.headers })
  }

  public deleteData(apiPath: string) {
    return this.httpClient.delete<any>(`${this.API_SERVER}${apiPath}`, { headers: this.headers, withCredentials: true })
  }

  public postFormData(apiPath: string, data?: any) {
    return this.httpClient.post<any>(`${this.API_SERVER}${apiPath}`, data,
      {
        headers: new HttpHeaders({
          'Accept': 'multipart/form-data'
        })
      });
  }
}
