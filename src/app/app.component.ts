import { Component } from '@angular/core';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    TemplateDrivenFormComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-alc';
}
