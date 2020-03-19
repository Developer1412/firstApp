import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardService} from '../shared/card.service';
import {Card} from '../shared/card.model';
import {LoaderService} from '../../shared/service/loader.service';
import {ToastService} from '../../shared/service/toast.service';

@Component({
    selector: 'app-card-detail',
    templateUrl: './card-detail.page.html'
})

export class CardDetailPage {
    cardId: string;
    // cardDeckGroup: string;
    // cardDeck: string;
    card: Card;
    constructor(private route: ActivatedRoute,
                private cardService: CardService,
                private loaderService: LoaderService,
                private toaster: ToastService) {}
    ionViewWillEnter(){
        this.cardId = this.route.snapshot.paramMap.get('cardId');
        // this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
        // this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');
        this.loaderService.presentLoading();
        this.cardService.getCardById(this.cardId).subscribe(
            (cards: Card[]) => {
                this.card = cards[0];
                this.loaderService.dismissLoading();
            }, () => {
                this.loaderService.dismissLoading();
                this.toaster.presentErrorToastWithMessage('Error:Card Details Not Loaded');
            });
    }

    updateImage($event: any) {
        this.card.img = '../../../assets/images/DefaultCard.png';
    }

}
