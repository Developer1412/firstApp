import {Injectable} from '@angular/core';
import {of as ObservableOf, Observable} from 'rxjs';

@Injectable()
export class CardService {
    public readonly cardDecks: string[] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman', 'Priest', 'Warlock', 'Hunter', 'Paladin'];

    public getAllCards(): Observable<string[]> {
        return ObservableOf(this.cardDecks);
    }
}
