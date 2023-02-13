import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/users").subscribe({
      next: response => this.users = response,
      error: error=>console.log(error),
      complete:()=>{console.log("Request has completed")}
    });
  }

  users:any;
  title = 'my app';
}
