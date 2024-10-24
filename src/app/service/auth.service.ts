import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../Global/global';
import { User,LoginEnum } from '../models';
import axios,{AxiosResponse} from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

 
    async SingUp(body:User): Promise<any> {
      try {
        const response: AxiosResponse<any> = await axios.post(`${baseUrl}/auth/signup`,body);
        return response.data;
        console.log('Cadastrado com sucesso')
      } catch (error) {
        console.error('Erro na requisição POST:', error);
        throw error;
      }
    }

    async SingIn(body:LoginEnum): Promise<any> {
      try {
        const response: AxiosResponse<any> = await axios.post(`${baseUrl}/auth/signin`,body);
        console.log('Login successful', response)
        return response.data;
       
      } catch (error) {
        console.error('Erro na requisição POST:', error);
        throw error;
      }
    }

}
