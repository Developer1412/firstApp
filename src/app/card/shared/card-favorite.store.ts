import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {Storage} from '@ionic/storage';
import {Card} from './card.model';

@Injectable()
export class FavoriteCardStore {
    private favoriteCardsSubject = new BehaviorSubject({});

    constructor(private storage: Storage) {
        this.loadInitialData();
    }
    get favoriteCards(): Observable<any> {
        return this.favoriteCardsSubject.asObservable();
    }
    private loadInitialData() {
        this.storage.get('favoriteCards').then(
            (favoriteCards) => {
                this.favoriteCardsSubject.next(favoriteCards || {});
                const a = this.favoriteCardsSubject.getValue();
        });
    }
    public toggleCard(card: Card) {
        const favoriteCards = this.favoriteCardsSubject.getValue();
        if (!card.favorite) {
            card.favorite = true;
            favoriteCards[card.cardId] = card;
        } else {
            card.favorite = false;
            delete favoriteCards[card.cardId];
        }
        this.storage.set('favoriteCards', this.favoriteCards).then(() => {
            this.favoriteCardsSubject.next(favoriteCards);
        });
    }
}