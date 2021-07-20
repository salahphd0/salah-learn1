import { ModalPage } from './../modal/modal.page';
import { DataService } from './../../services/data/data.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private DataService: DataService,
    private modalCtrl: ModalController


  ) { }

  ngOnInit() {
  }
  login(){
    setTimeout(() =>{
      this.navCtrl.navigateForward('/second-page');

    }, 2000)
  }
  detail(id){
    this.DataService.setParams({id});
    this.navCtrl.navigateForward('/second-page');
  }
  async showModal(){
    let modal=await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        text: 'It\'s an awsome tutorial'
      }
    });
    await modal.present();
    let res=await modal.onDidDismiss();
    console.log(res.data);

  }

}
