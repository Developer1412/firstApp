import { Component } from '@angular/core';
import {CardService} from '../shared/card.service';
import {CardDeck} from '../shared/card.model';


@Component({
    selector : 'app-card-deck',
    templateUrl : './card-deck.page.html',
    styleUrls : ['./card-deck.page.scss']
})

export class CardDeckPage {

    private readonly ALLOWED_DECKS = ['classes', 'factions', 'qualities', 'types', 'races'];
    constructor(private cardService: CardService) {
        this.getAllDecks();
    }
    public cardDecks: CardDeck[] = [];

    private getAllDecks() {
        this.cardService.getAllCards().subscribe(
            (cardDecks: CardDeck[]) => {
                this.exractAllowedDecks(cardDecks);
            });
    }
    exractAllowedDecks(cardDecks: CardDeck[]) {
        this.ALLOWED_DECKS.forEach((deckName: string) => {
            this.cardDecks.push({name: deckName, types: cardDecks[deckName]})})
    }
    generateUrl(cardDeckGroup: string, cardDeck: string): string {
        return `/tabs/card/${cardDeckGroup}/${cardDeck}`
    }
}


