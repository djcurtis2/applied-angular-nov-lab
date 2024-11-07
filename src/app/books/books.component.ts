import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div data-testid="books-feature">
      <div class="flex gap-4 p-4">
        <!-- <a class="link" routerLink="ui">UI</a>
        <a class="link" routerLink="prefs">Prefs</a> -->
        <p>Book Content</p>
      </div>
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class BooksComponent {}
