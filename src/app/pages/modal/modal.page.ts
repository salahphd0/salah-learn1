import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
@Input() text: string;
inputText: string='';
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  dismiss(){
    this.modalCtrl.dismiss({inputText: this.inputText});
  }

}
