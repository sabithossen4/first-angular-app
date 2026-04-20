import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About { 
  name = "About Us";
  imageUrl = "https://picsum.photos/200";
  sayHello() {
  alert("Hello Angular!");
}
}
