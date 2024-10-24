import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../Global/global';
import { User,LoginEnum } from '../models';
import axios,{AxiosResponse, AxiosHeaders} from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
 
 
    async SingUp(body:User): Promise<any> {
      try {
        const response:User = await axios.post(`${baseUrl}/auth/signup`,body)
        console.log('body Requisition',body)
        console.log('Cadastrado com sucesso')
       return response
   
      } catch (error) {
        console.error('Erro na requisição POST:', error);
        throw error;
      }
    }

    async SingIn(body:LoginEnum): Promise<LoginEnum> {
      try {
   
        const response: AxiosResponse<any> = await axios.post(`${baseUrl}/auth/signin`,body);
        console.log('Login successful', response.headers)
        return response.data;
       
      } catch (error) {
        console.error('Erro na requisição POST:', error);
        throw error;
      }
    }

}
