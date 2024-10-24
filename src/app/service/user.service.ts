import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   user: User | undefined
  constructor() { }

  setUser(user:User){
    localStorage.setItem('user',JSON.stringify(user))
    this.user = user
  }

  getUser(user:User){
    return this.user;
  }
}
