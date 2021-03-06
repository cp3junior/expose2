import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MessagesPage } from '../pages/messages/messages';
import { UserPage } from '../pages/user/user';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CartPage } from '../pages/cart/cart';
import { SearchPage } from '../pages/search/search';
import { WhishlistPage } from '../pages/whishlist/whishlist';
import { MessagePage } from '../pages/message/message';


@NgModule({
  declarations: [
    MyApp,
    MessagesPage,
    UserPage,
    HomePage,
    TabsPage,
    CartPage,
    SearchPage,
    WhishlistPage,
    MessagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
       tabsHideOnSubPages:true //hide tabs for sub pages 
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MessagesPage,
    UserPage,
    HomePage,
    TabsPage,
    CartPage,
    SearchPage,
    WhishlistPage,
    MessagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
