import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardService} from '../shared/card.service';
import {Card} from '../shared/card.model';

@Component({
    selector: 'app-card-detail',
    templateUrl: './card-detail.page.html'
})

export class CardDetailPage {
    cardId: string;
    card: Card;
    constructor(private route: ActivatedRoute,
                private cardService: CardService) {}
    ionViewWillEnter(){
        this.cardId = this.route.snapshot.paramMap.get('cardId');
        this.cardService.getCardById(this.cardId).subscribe(
            (cards: Card[]) => {
                this.card = cards[0];
            });
    }
    // updateImage() {
    //     this.card.img = 'assets/image/DefaultCard.png';
    // }

}
