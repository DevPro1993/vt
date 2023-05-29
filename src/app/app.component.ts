import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vt';
  maxDiopter: number = 10;
  mode: 'convergence' | 'divergence' = 'convergence';
  maxSpacer: number;
  minSpacer = 100;
  spacer = this.minSpacer;
  jump: number;
  diopter42 = 850; // pixel value for 42D prism

  ngOnInit(): void {
    this.jump = this.diopter42 / 42
    this.setMaxSpacer(this.maxDiopter)
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

  setMaxSpacer(data: any) {
    this.maxSpacer = (parseInt(data) / 42) * this.diopter42;
    this.reset()
  }

  setMode(data: string) {
    this.mode = data === 'convergence' ? 'convergence' : 'divergence';
    this.reset()
  }

  reset() {
    this.spacer = this.minSpacer;
  }
}
