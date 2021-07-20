import { DataService } from './../../services/data/data.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {
  productId: number;
  constructor(
    private navCtrl: NavController,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getProductId();
  }
  goBack(){
    this.navCtrl.navigateForward('/first-page');
  }
  getProductId(){
    this.productId=this.dataService.getParams().id;
  }

}
