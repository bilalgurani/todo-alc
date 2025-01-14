import { Component } from '@angular/core';
import {CreateTaskComponent} from './create-task/create-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    CreateTaskComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-alc';
}
