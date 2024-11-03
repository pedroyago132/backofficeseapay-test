import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from './service/user.service'
import { LoginComponent } from './views/login/login.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            LoginComponent,
            DashboardComponent,
            CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatFormFieldModule, MatInputModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
 
    
  }

  constructor(private userService: UserService ){}

  getUser(){
  
  }
  title = 'backoffice-seapay';
}
