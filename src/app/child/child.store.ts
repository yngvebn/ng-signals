import { ComponentStore } from '@ngrx/component-store';

interface ChildState {
  title: string | null | undefined;
}

export class ChildStore extends ComponentStore<ChildState> {
  constructor() {
    super({ title: '' });
  }

  readonly title = this.selectSignal((state) => state.title);

  readonly setTitle = this.updater(
    (state, title: string | null | undefined) => ({
      ...state,
      title,
    })
  );
}
