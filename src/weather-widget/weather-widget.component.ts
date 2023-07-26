import { Component, Input } from '@angular/core';
import { Unit } from '../weather.service';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  template: `
    <div class="widget">
      <img src="/assets/weather-icon.png" alt="Weather icon" />

      <div>
        <h5>{{ unit?.unit }}</h5>
        <h2>23 {{ unit?.symbol }}</h2>
      </div>
      <h3>{{ day }}</h3>
    </div>
  `,
  styles: [
    `
    :host {
      display: inline-block;
      margin: 20px 10px;
    }

    .widget {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: center;
      padding: 15px;
      width: 160px;
    }

    img {
      width: 120px;
      max-width: 100%;
    }

    h4 {
      color: gray;
    }

    h5 {
      text-align: center;
    }
  `,
  ],
})
export class WeatherWidgetComponent {
  @Input({ required: true }) day = '';
  @Input({ required: true }) unit: Unit | undefined;
}
