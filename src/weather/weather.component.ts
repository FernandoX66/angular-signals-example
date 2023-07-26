import { Component, inject } from '@angular/core';
import { WeatherService } from '../weather.service';
import { UnitsSelectorComponent } from '../units-selector/units-selector.component';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [WeatherWidgetComponent, UnitsSelectorComponent],
  template: `
    <app-units-selector></app-units-selector>
    <app-weather-widget day="Today" [unit]="selectedUnit()"></app-weather-widget>
    <app-weather-widget day="Tomorrow" [unit]="selectedUnit()"></app-weather-widget>

  `,
})
export class WeatherComponent {
  weatherService = inject(WeatherService);

  selectedUnit = this.weatherService.selectedUnit;
}
