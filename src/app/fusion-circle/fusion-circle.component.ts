import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fusion-circle',
  templateUrl: './fusion-circle.component.html',
  styleUrls: ['./fusion-circle.component.scss']
})
export class FusionCircleComponent implements OnInit {

  @Input() type: 'red' | 'blue';
  @Input() letter: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
