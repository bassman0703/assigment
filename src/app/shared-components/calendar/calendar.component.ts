import { Component } from '@angular/core';

import { NzCalendarMode } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'app-components',
  templateUrl: './sahred-components.component.html'
})
export class SahredComponentsComponent {
  date = new Date(2012, 11, 21);
  mode: NzCalendarMode = 'month';

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }
}
