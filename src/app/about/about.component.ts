import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //this.loadScript("../../assets/js/progressbar.min.js");
    //this.loadScript("../../assets/js/jquery.fluidbox.min.js");
    this.loadScript("../../assets/js/scripts.js");
    this.loadStyle("../../assets/css/cv-portfolio/css/styles.css");
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  public loadStyle(styl: string) {
    const head = <HTMLHeadElement>document.head;
    const style = document.createElement('link');
    style.innerHTML = "";
    style.rel = styl;
    //style.async = false;
    //style.defer = true;
    head.appendChild(style);
  }

}
