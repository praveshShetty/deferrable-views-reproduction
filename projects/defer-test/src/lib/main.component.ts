import { Component } from '@angular/core';
import { DeferredComponent } from './deferred/deferred.component';

@Component({
  selector: 'lib-main',
  standalone: true,
  imports: [DeferredComponent],
  templateUrl: './main.component.html',
  styles: ``,
})
export class MainComponent {}
