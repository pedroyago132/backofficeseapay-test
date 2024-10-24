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
import { MatTabsModule } from '@angular/material/tabs';
import { AuthService } from '../../service/auth.service'
import { MatDividerModule } from '@angular/material/divider';
import { User } from '../../models';
import { RouterOutlet, Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';


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

  errorStatus: number = 0

  userLogin = {
    login: '123.000.000-00',
    password: 'senha123'
  }


  constructor(private authService: AuthService, private router: Router) { }
  readonly dialog = inject(MatDialog);

  errorAlert(errorStatus: number) {
    this.errorStatus = errorStatus
    if (this.errorStatus == 400) {
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

  sucessFunction(sucess: any) {
    console.log(sucess, 'sucesso')
  }

  signin() {
    console.log(this.valueLogin, this.valueSenha)
    this.authService.SingIn(this.userLogin).then(sucess => this.sucessFunction(sucess)).catch(error => console.log(error))
  }

}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
  styleUrl: 'login.component.css',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDividerModule, MatDialogClose, MatButtonModule, MatTabsModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExampleDialog {

  private _snackBar = inject(MatSnackBar);

  durationInSeconds = 5;

  register: boolean = true

  errorStatus: number = 0

  valueNome: string = ''
  valueSenha: string = ''
  valueConfirmarSenha: string = ''
  valueEmailRegister: string = ''
  valueCpf: string = ''
  valueCnpj: string = ''
  contaLojista: string = ''


  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
  valueRegisterEmail = 'Seu Email...';

  constructor(private authService: AuthService) { }



  errorAlert(errorStatus: number) {
    this.errorStatus = errorStatus
    if (this.errorStatus == 400) {
      window.alert('Usuário já cadastrado')
    }
  }


  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  sendForm() {
    const body = {
      email: this.valueEmailRegister,
      password: this.valueSenha,
      account_type: "standard",
      name: this.valueNome,
      registration: this.valueCpf
    }
  
    console.log(this.valueConfirmarSenha,this.valueCpf,this.valueEmailRegister,this.valueNome,this.valueSenha)
    if (this.valueConfirmarSenha != this.valueSenha) {
      window.alert('Senhas divergentes')
    } else if (!this.valueEmailRegister || !this.valueSenha) {
      window.alert('Complete os campos')
    } else {
      console.log(body)
      this.authService.SingUp(body).then(sucess => this.openSnackBar()).catch(error => console.log(error))
    }

  }

}

export class TabGroupBasicExample { }
export class DialogElementsExampleDialog {

}

@Component({
  selector: 'snack-bar-annotated-component-example-snack',
  templateUrl: 'snack-bar.html',
  styles: `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: green;
    }
  `,
  standalone: true,
  imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
})
export class PizzaPartyAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}


