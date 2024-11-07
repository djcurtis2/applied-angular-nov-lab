import { Routes } from '@angular/router';
import { BooksComponent } from './books.component';

export const BOOK_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponent,
    // providers: [CounterStore],
    // children: [
    //   {
    //     path: 'books',
    //     component: BooksComponent,
    //   },
    // ],
  },
];
