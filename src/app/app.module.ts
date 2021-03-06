import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomePageComponent } from './homepage/homepage.component'
import { DocumentsComponent } from './documents/documents.component'
import { ProposalListComponent } from './proposal/proposal-list.component'
import { ProposalNewComponent } from './proposal/proposal-new.component'
import { ProposalShowComponent } from './proposal/proposal-show.component'

import { AppRoutingModule } from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
