import { Component } from '@angular/core';
import {CardService} from '../shared/card.service';

@Component({
    selector : 'app-card-deck',
    templateUrl : './card-deck.page.html',
    styleUrls : ['./card-deck.page.scss']
})

export class CardDeckPage {

    constructor(private cardService: CardService) {
        this.getAllDecks();
    }
    public cardDecks: string[] = [];

    private getAllDecks() {
        this.cardService.getAllCards().subscribe(
            (cardDecks: string[]) => this.cardDecks = cardDecks)
    }
}


