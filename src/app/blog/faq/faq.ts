import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-faq',
  imports: [FormsModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  name = "";
  showName() {
    console.log(this.name);
  }
}