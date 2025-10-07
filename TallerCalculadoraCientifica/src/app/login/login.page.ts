import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],

})
export class LoginPage {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      this.errorMessage = '';
      this.navCtrl.navigateForward('/calculadora');
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
