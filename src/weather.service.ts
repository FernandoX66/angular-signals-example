import { computed, effect, Injectable, Signal, signal } from '@angular/core';

export type units = 'Fahrenheit' | 'Celsius' | 'Kelvin';
export type symbols = '°F' | '°C' | 'K';

export interface Unit {
  id: number;
  unit: units;
  symbol: symbols;
}

@Injectable({ providedIn: 'root' })
export class WeatherService {
  readonly #units: Unit[] = [
    {
      id: 1,
      unit: 'Fahrenheit',
      symbol: '°F',
    },
    {
      id: 2,
      unit: 'Celsius',
      symbol: '°C',
    },
    {
      id: 3,
      unit: 'Kelvin',
      symbol: 'K',
    },
  ];
  // 👇 Creating a WritableSignal using the "signal" function
  readonly #unitsSignal = signal<Unit[]>(this.#units);
  readonly #selectedUnitSignal = signal(1);
  // 👇 Using the "computed" function to create a derived signal
  // based on the value of the signals inside the body of the
  // function
  selectedUnit = computed(() => {
    return this.#unitsSignal().find(
      (unit) => unit.id === this.#selectedUnitSignal()
    );
  });

  constructor() {
    // 👇 Using the "effect" function to trigger some side effects
    // (like logging the value) everytime the signals inside
    // the body of the function change
    effect(() => console.log(this.selectedUnit()));
  }

  get units(): Signal<Unit[]> {
    // 👇 Exposing the WritableSignal in a readonly version
    // using "asReadonly()" similar to using "asObservable()" in
    // BehaviorSubjects. Improves encapsulation.
    return this.#unitsSignal.asReadonly();
  }

  selectUnit(id: number): void {
    this.#selectedUnitSignal.set(id);
  }
}
