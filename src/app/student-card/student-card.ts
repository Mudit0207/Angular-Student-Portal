import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-student-card',
  styleUrl: './student-card.css',
  templateUrl: './student-card.html',
})
export class StudentCard {
  name = 'Mudit';
  major = 'Computer Science';
  age = 20;
}
