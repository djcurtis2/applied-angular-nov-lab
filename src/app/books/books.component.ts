import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterLink, RouterOutlet, JsonPipe],
  template: `
    <pre>
        <ul>
            @for(book of books(); track book.id) {
            <li>
                <pre>{{ book | json }}</pre>
            </li>
            }
         </ul>
    </pre>
  `,
  styles: ``,
})
@Injectable()
export class BooksComponent {
  #client = inject(HttpClient);
  books = toSignal(
    this.#client
      .get<{
        data: { id: string; title: string; author: string; year: number }[];
      }>('/api/books')
      .pipe(map((res) => res.data)),
  );
}
