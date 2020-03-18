import {Injectable} from '@angular/core';
import {of as ObservableOf, Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {CardDeck} from './card.model';

@Injectable()
export class CardService {
    public readonly cardDecks: string[] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman', 'Priest', 'Warlock', 'Hunter', 'Paladin'];

    private readonly HS_API_URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com';
    private readonly API_KEY = '8b275b4addmshb79c27c8440c22cp189a6bjsn0a28721f03e3';

    constructor(private http: HttpClient) {}
    public getAllCards(): Observable<CardDeck[]> {
        const headers = new HttpHeaders({'x-rapidapi-key': this.API_KEY});
        return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`,{headers});
    }
}
