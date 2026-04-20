import { Component } from '@angular/core';
import { Faq } from './faq/faq'; 

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [Faq],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {}
