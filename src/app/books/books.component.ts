import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { Book } from './types';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterLink, RouterOutlet, JsonPipe],
  template: `
    <div class="container mx-auto">
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <!-- head -->
          <thead>
            <tr class="text-center">
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            @for (book of books(); track book.id) {
              <tr>
                <td class="text-center">{{ book.id }}</td>
                <td class="text-center">{{ book.title }}</td>
                <td class="text-center">{{ book.author }}</td>
                <td class="text-center">{{ book.year }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: ``,
})
@Injectable()
export class BooksComponent {
  #client = inject(HttpClient);
  books = toSignal(
    this.#client
      .get<{
        data: Book[];
      }>('/api/books')
      .pipe(map((res) => res.data)),
  );
}
