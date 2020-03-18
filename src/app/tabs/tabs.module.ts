import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {CardListingPage} from '../card/card-listing/card-listing.page';
import {CardService} from '../card/shared/card.service';
import {HttpClient} from '@angular/common/http';

// @ts-ignore
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  providers : [
    CardService,
    HttpClient
  ],
  declarations: [TabsPage, CardListingPage]
})
export class TabsPageModule {}
