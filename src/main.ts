import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, WeatherComponent],
  template: `
    <app-weather></app-weather>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
