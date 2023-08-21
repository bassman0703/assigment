import { Component } from '@angular/core';

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrls: ['./comparator.component.css']
})
export class ComparatorComponent {
  text1: string = '';
  text2: string = '';
  differences: string = '';

  compareText() {
    // Split the text into lines and find differences
    const lines1 = this.text1.split('\n');
    const lines2 = this.text2.split('\n');

    let differences = '';

    for (let i = 0; i < lines1.length || i < lines2.length; i++) {
      if (lines1[i] !== lines2[i]) {
        differences += `Line ${i + 1}:\n`;
        differences += `- ${lines1[i]}\n`;
        differences += `+ ${lines2[i]}\n`;
      }
    }

    this.differences = differences;
  }
}
