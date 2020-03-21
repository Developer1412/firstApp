import {Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {CardService} from '../shared/card.service';
import {Card} from '../shared/card.model';
import {LoaderService} from '../../shared/service/loader.service';
import {ToastService} from '../../shared/service/toast.service';

@Component({
    selector: 'app-card-listing',
    templateUrl: './card-listing.page.html',
    styleUrls: ['./card-listing.page.scss']
})

export class CardListingPage {

    cardDeckGroup: string;
    cardDeck: string;
    cards: Card[] = [];
    copyOfCards: Card[] =[];

    isLoading: boolean = false;
    constructor(private route: ActivatedRoute,
                private cardService: CardService,
                private loaderService: LoaderService,
                private toaster: ToastService) {}


    ionViewWillEnter() {
        this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
        this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');
        this.loaderService.presentLoading();
        this.cardService.getCardsByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
            (cards: Card[]) => {
                this.cards = cards;
                this.copyOfCards = Array.from(this.cards);
                this.loaderService.dismissLoading();
            }, () => {
                this.loaderService.dismissLoading();
                this.toaster.presentErrorToastWithMessage('Error: Card List Not Loaded');
            });

    }
    handleSearch(event: any) {
        this.isLoading = true;
    }
    hydrateCards(cards: Card[]) {
        this.cards = cards;
        this.isLoading = false;
    }
}
