import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, map, timer } from 'rxjs';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ChildComponent, AsyncPipe],
})
export class AppComponent {
  title$: Observable<string | null> = timer(0, 1000).pipe(
    map((i) => `Title ${i}`)
  );

  counter$: Observable<number | null> = timer(0, 5000).pipe(
    map((i) => i)
  );


}
