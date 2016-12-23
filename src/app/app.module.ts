import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import {
  HttpModule
} from '@angular/http';

import {
  AppComponent
} from './app.component';
import {
  RouterModule
} from '@angular/router';
import {
  ConversationComponent
} from './conversation/conversation.component';
import { AppRoutingModule } from './app-routing.module';
import { ConversationService } from './conversation.service'
import { ServiceManagerApi, SDKModels, LoopBackAuth } from './sdk';
import { InternalStorage } from './sdk/storage/storage.swaps';
import { JSONSearchParams } from './sdk/services/core/search.params';
@NgModule({
  declarations: [
    AppComponent,

    ConversationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ServiceManagerApi, ConversationService, SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams],
  bootstrap: [AppComponent]
})
export class AppModule { }