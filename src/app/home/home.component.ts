import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(location: LocationStrategy) {
    location.onPopState(() => {
      window.location.reload();
    });
  }

  ngOnInit() {
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    console.log('Back button pressed');
  }
}
