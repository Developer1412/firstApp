import { IonicModule} from '@ionic/angular';
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { CardDeckPage} from './card-deck/card-deck.page';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CardService} from './shared/card.service';

@NgModule({
    imports : [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: CardDeckPage}])
    ],
    providers : [
      CardService
    ],
    declarations : [
        CardDeckPage
    ]
})
export class CardPageModule {}
