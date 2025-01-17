import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {

  @ViewChild('contactForm') contactForm: NgForm | undefined

  ngFormSubmitted() {
    console.log(this.contactForm);
    console.log(this.contactForm?.control.controls?.['firstName'].value);
  }

}
