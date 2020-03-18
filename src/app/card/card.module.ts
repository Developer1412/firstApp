import { IonicModule} from '@ionic/angular';
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { CardDeckPage} from './card-deck/card-deck.page';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CardService} from './shared/card.service';
import {HttpClientModule} from '@angular/common/http';
import {CardListComponent} from './components/card-list.component';
import {CardListingPage} from './card-listing/card-listing.page';

@NgModule({
    imports : [
        IonicModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild([{path: '', component: CardDeckPage}])
    ],
    providers : [
      CardService
    ],
    declarations : [
        CardDeckPage,
        CardListComponent
    ]
})
export class CardPageModule {}
