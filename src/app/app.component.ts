import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vt';
  mode: string = 'easy';
  maxSpacer = 290;
  minSpacer = 100;
  spacer = this.minSpacer;
  jump = 15;

  ngOnInit(): void {
    
  }

  moveSpacer(event: KeyboardEvent) {
   const key = event.code;
   if (key === 'ArrowUp') {
    if (this.spacer < this.maxSpacer - this.jump) {
      this.spacer += this.jump
    } else {
      this.spacer = this.maxSpacer;
    }
   } else if (key === 'ArrowDown') {
    if (this.spacer > this.minSpacer + this.jump) {
      this.spacer -= this.jump
    } else {
      this.spacer = this.minSpacer
    }
   } else if (key === 'Space') {
    const diff = this.maxSpacer - this.minSpacer;
    const randomJump = Math.random() * diff;
    this.spacer = randomJump + this.minSpacer;
   }
  }

  setMaxSpacer(data: string) {
    if (this.mode === 'easy') this.maxSpacer = 190
    if (this.mode === 'intermediate') this.maxSpacer = 290
    if (this.mode === 'difficult') this.maxSpacer = 390
    this.reset()
  }

  reset() {
    this.spacer = this.minSpacer;
  }
}
