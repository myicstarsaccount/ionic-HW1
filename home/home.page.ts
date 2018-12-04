import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
    constructor(public alertController: AlertController) {}
  
    async presentAlertCat() {
      const alert = await this.alertController.create({
        header: 'Choose a Skat Cat to buy',
        inputs: [
          {
            name: 'cat1',
            type: 'radio',
            label: 'Cat 1',
            value: 'value1',
            checked: true
          },
          {
            name: 'cat2',
            type: 'radio',
            label: 'Cat 2',
            value: 'value2'
          },
          {
            name: 'cat3',
            type: 'radio',
            label: 'Cat 3',
            value: 'value3'
          },
          {
            name: 'cat4',
            type: 'radio',
            label: 'Cat 4',
            value: 'value4'
          },
          {
            name: 'cat5',
            type: 'radio',
            label: 'Cat 5',
            value: 'value5'
          },
          {
            name: 'cat6',
            type: 'radio',
            label: 'Cat 6 ',
            value: 'value6'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Purchase!',
            handler: () => {
              console.log('Confirm Ok');
            }
          }
        ]
      });
  
      await alert.present();
    }
  
}