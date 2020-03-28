import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {CardListingPage} from '../card/card-listing/card-listing.page';
import {CardService} from '../card/shared/card.service';
import {HttpClient} from '@angular/common/http';
import {CardDetailPage} from '../card/card-detail/card-detail.page';
import {SearchComponent} from '../shared/components/search/search.component';
import {FavoriteCardStore} from '../card/shared/card-favorite.store';
import {CardFavoritePage} from '../card/card-favorite/card-favorite.page';

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
    HttpClient,
    FavoriteCardStore
  ],
  declarations: [TabsPage, CardListingPage, CardDetailPage, SearchComponent, CardFavoritePage]
})
export class TabsPageModule {}
