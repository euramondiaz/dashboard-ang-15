import { Component, OnInit, Input,  } from '@angular/core';
import { InavbarData } from './helper';


@Component({
  selector: 'app-sublevel-menu',
  template: `
    <p>
      sublevel-menu works!
    </p>
  `,
  styles: [
  ]
})
export class SublevelMenuComponent implements OnInit {

  @Input() data: InavbarData ={
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed = false
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;
  



  constructor () { }

  ngOnInit(): void {


  }

}
