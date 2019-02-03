import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderIntroComponent } from './header-intro/header-intro.component';
import { EventPlanningNwComponent } from './portfolio/event-planning-nw/event-planning-nw.component';
import { EventPlanningNw2Component } from './portfolio/event-planning-nw-2/event-planning-nw-2.component';
import { AllAboutHairComponent } from './portfolio/all-about-hair/all-about-hair.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    PortfolioComponent,
    HeaderIntroComponent,
    EventPlanningNwComponent,
    EventPlanningNw2Component,
    AllAboutHairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
