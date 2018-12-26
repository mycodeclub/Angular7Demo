import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: object;
  count: number = 0;

  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.GetUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  firstClick() { this.count = this.count + 1; }

}
