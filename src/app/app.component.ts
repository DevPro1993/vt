import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vt';
  difficulty: string = 'easy';
  mode: 'convergence' | 'divergence' = 'convergence';
  maxSpacer: number;
  minSpacer = 100;
  spacer = this.minSpacer;
  jump = 15;

  ngOnInit(): void {
    this.setDifficulty('easy')
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

  setDifficulty(data: string) {
    if (data === 'easy') this.maxSpacer = 190
    if (data === 'intermediate') this.maxSpacer = 290
    if (data === 'difficult') this.maxSpacer = 390
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
