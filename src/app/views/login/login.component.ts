import { Component, inject, ChangeDetectionStrategy, } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthService } from '../../service/auth.service'
import {MatDividerModule} from '@angular/material/divider';
import { User } from '../../models';
import { RouterOutlet, Router} from '@angular/router';


// Inputs importados de Angular - Material https://material.angular.io/components/input/examples

// Modal ( Dialog ) importados - Angular Material https://material.angular.io/components/dialog/examples


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgOptimizedImage,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet
  ],
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.css',
})



export class LoginComponent {
  width = '0px';

  valueLogin = 'Digite seu CPF ou CNPJ Cadastrado';

  valueSenha = 'Digite sua senha';

  errorStatus:number = 0

  userLogin = {
    login:'123.000.000-00',
    password:'senha123'
  }


  constructor(private authService:AuthService,private router: Router) { }
  readonly dialog = inject(MatDialog);

  errorAlert(errorStatus:number){
    this.errorStatus = errorStatus
    if(this.errorStatus == 400){
      window.alert('Usuário já cadastrado')
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  sucessFunction(){
    this.router.navigate(['/dashboard']);
  }

  signin(){
    console.log(this.valueLogin,this.valueSenha)
    this.authService.SingIn(this.userLogin).then(sucess => this.sucessFunction).catch(error =>console.log(error))
   }

}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
  styleUrl: 'login.component.css',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions,MatDividerModule, MatDialogClose, MatButtonModule,MatTabsModule,MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExampleDialog {

  register:boolean = true

  errorStatus:number = 0

  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
    valueRegisterEmail = 'Seu Email...';

    constructor(private authService:AuthService) { }

  
    body = {
      email:'pedro@gmail.com',
      password:'senha123',
      account_type:"standard",
      name:"John Doe",
      registration:"123.000.000-00"
    }


    errorAlert(errorStatus:number){
      this.errorStatus = errorStatus
      if(this.errorStatus == 400){
        window.alert('Usuário já cadastrado')
      }
    }
  
    sendForm(){
      this.authService.SingUp(this.body).then(sucess => console.log(sucess)).catch(error => this.errorAlert(error.status))
     }
   
}

export class TabGroupBasicExample {}
export class DialogElementsExampleDialog {

}


