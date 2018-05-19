import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnmishaPage } from '../anmisha/anmisha';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ANMISHA(){
    this.navCtrl.push(AnmishaPage);
  }
  register()
  {
    this.navCtrl.push(RegisterPage);
  }

}
