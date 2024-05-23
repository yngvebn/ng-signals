import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges, effect, inject, input } from '@angular/core';
import { provideComponentStore } from '@ngrx/component-store';
import { ChildStore } from './child.store';

@Component({
  selector: 'app-child',
  standalone: true,
  providers: [provideComponentStore(ChildStore)],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges {

  constructor() {
    effect(() => {
      console.log('Title changed!:', this.title());
    });

    effect(() => {
      console.log('Counter changed!:', this.counter());
    });
  }
  store: ChildStore = inject(ChildStore);
  title = input<string | undefined | null>();
  counter = input<number | undefined | null>();

  public ngOnChanges(simpleChanges: SimpleChanges): void {
    this.store.setTitle(this.title());
  }

}
