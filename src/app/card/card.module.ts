import { IonicModule} from '@ionic/angular';
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { CardDeckPage} from './card-deck/card-deck.page';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CardService} from './shared/card.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CardListComponent} from './components/card-list.component';

// @ts-ignore
@NgModule({
    imports : [
        IonicModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild([{path: '', component: CardDeckPage}])
    ],
    providers : [
      CardService,
      HttpClient
    ],
    declarations : [
        CardDeckPage,
        CardListComponent
    ]
})
export class CardPageModule {}
