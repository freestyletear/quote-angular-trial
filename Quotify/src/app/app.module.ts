import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { HighlightQuoteDirective } from './directives/highlight-quote.directive';
import { HighlightVoteDirective } from './directives/highlight-vote.directive';
import { DateSubmittedPipe } from './pipes/date-submitted.pipe';
import { QuotifyComponent } from './components/quotify/quotify.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailsComponent,
    QuoteFormComponent,
    HighlightQuoteDirective,
    HighlightVoteDirective,
    DateSubmittedPipe,
    QuotifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule /* added */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
