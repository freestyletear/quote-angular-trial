import { Component, OnInit } from '@angular/core';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-quotify',
  templateUrl: './quotify.component.html',
  styleUrls: ['./quotify.component.css']
})
export class QuotifyComponent implements OnInit {

  quotes: Quote[] = [ /* quote array */
    new Quote('I am my better half not yours.', 'krithi', 'Lizbeth Wangu', new Date(2020, 1, 5), 5, 0),
    new Quote('The lizards were extreamly phylosophical by nature, and often sat together thinking for hours and hours.', 'Oscar Wilde', 'Lyn Adelaide', new Date(2020, 4, 8), 2, 1),
    new Quote('I have no notion of loving people by halves, it is not my nature.', 'Jane Austen', 'Edrea Leslie', new Date(2020, 3, 30), 1, 5),
    new Quote('Hung overs are funn, said no one ever.', 'Laureen Blakery', 'Charlene Rose', new Date(2019, 9, 11), 1, 1),
    new Quote('The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.', ' Bob Marley', 'Albert Austen', new Date(2019, 5, 15), 3, 2),
  ];

  toggleDetails(index: string | number) {
    /* function for toggling quote details */
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  toggleText(index: string | number) {
    /* function for toggling quote small text */
    this.quotes[index].showMore = !this.quotes[index].showMore;
    if (this.quotes[index].showMore)
      this.quotes[index].smallText = 'see less';
    else
      this.quotes[index].smallText = 'see more';
  }
  quoteDeleted(deleteQuote: any, index: number) {
    /* function for deleting quote */
    if (deleteQuote) {
      let deleteQuote = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)  /* let deleteQuote = confirm(`Are you sure you want to delete this quote?`) */
      if (deleteQuote) {
        this.quotes.splice(index, 1);
      }
    }
  }
  highlightHighest() {
    /* function for getting quote with highest vote*/
    let quotesUpvote = []
    let highestUpVote: number
    for (let j = 0; j < this.quotes.length; j++) {
      // quotesUpvote.push(this.quotes[j].upVote)
    }

    quotesUpvote.sort(function (a, b) {
      return b - a
    })
    highestUpVote = quotesUpvote[0]
    return highestUpVote;
  }

  get sortQuotes() {
    /*  sorts quotes according to submission date */
    return this.quotes.sort((a, b) => {
      return <any > new Date(b.submissionDate) - < any > new Date(a.submissionDate);
    });
  }

  addNewQuote(quote: Quote) {
    /* function for adding a new quote */
    this.quotes.unshift(quote)
  }
  constructor() {}

  ngOnInit(): void {}

}
