import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async multipleButtons() {
    const alert = await this.alertController.create({
      header: 'Multiples buttons',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('click in okay');
          },
        },
        {
          text: 'Cancelar',
          role: 'destructive',
          handler: () => {
            console.log('click in cancelar');
          },
        },
      ],
    });

    await alert.present();
  }
  async inputsButtons() {
    const alert = await this.alertController.create({
      header: 'Multiples buttons',
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }
}
