import { sandboxOf } from 'angular-playground';
import { AppComponent } from './app.component';

export default sandboxOf(AppComponent)
  .add('test', {
    template: `<app-root></app-root>`
  });
