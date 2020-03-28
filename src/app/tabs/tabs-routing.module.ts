import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {CardListComponent} from '../card/components/card-list.component';
import {CardListingPage} from '../card/card-listing/card-listing.page';
import {CardDetailPage} from '../card/card-detail/card-detail.page';
import {CardFavoritePage} from '../card/card-favorite/card-favorite.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'card',
        children: [
          {
            path: '',
            // loadChildren: '../card/card.module#CardPageModule'
            loadChildren: () =>
                import('../card/card.module').then(m => m.CardPageModule)
          }
        ]
      },
      {
        path: 'card/:cardDeckGroup/:cardDeck',
        children: [
          {
            path: '',
            component: CardListingPage
          }
        ]
      },
      {
        path: 'card/:cardId',
        children: [
          {
            path: '',
            component: CardDetailPage
          }
        ]
      },
      {
        path: 'favorite',
        children: [
          {
            path: '',
            component: CardFavoritePage
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/card',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/card',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
