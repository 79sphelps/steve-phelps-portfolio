import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { HomeComponent } from './home/home.component';

import { EventPlanningNwComponent } from './portfolio/event-planning-nw/event-planning-nw.component';
import { EventPlanningNw2Component } from './portfolio/event-planning-nw-2/event-planning-nw-2.component';
import { AllAboutHairComponent } from './portfolio/all-about-hair/all-about-hair.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'event-planning-nw',
    component: EventPlanningNwComponent
  },
  {
    path: 'event-planning-nw-2',
    component: EventPlanningNw2Component
  },
  {
    path: 'all-about-hair',
    component: AllAboutHairComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
