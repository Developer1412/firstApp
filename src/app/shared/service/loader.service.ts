import { Injectable } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable()
export class LoaderService {
    private loader: HTMLIonLoadingElement;
    constructor(private loadingCtrl: LoadingController) {
    }

    public async presentLoading(): Promise<HTMLIonLoadingElement> {
        this.loader = await this.loadingCtrl.create({
            message: 'Please wait...'
        });
        await this.loader.present();
        // setTimeout(() => {
        //     loader.dismiss();
        // }, 7000);
        return this.loader;

    }

    public dismissLoading() {
        if (this.loader) {
            setTimeout(() => {
                this.loader.dismiss();
            }, 100);
        }
    }
}
