import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-units-selector',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="units-selector">
    <div (click)="onSelectOption(unit.id)" class="unit-option" *ngFor="let unit of units()">
      <p>{{ unit.unit }} ({{ unit.symbol }})</p>
    </div>
  </div>`,
  styleUrls: ['./units-selector.component.scss'],
})
export class UnitsSelectorComponent {
  weatherService = inject(WeatherService);

  units = this.weatherService.units;

  onSelectOption(id: number): void {
    this.weatherService.selectUnit(id);
  }
}
