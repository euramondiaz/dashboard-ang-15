import { Component, OnInit, Input,  } from '@angular/core';
import { InavbarData } from './helper';


@Component({
  selector: 'app-sublevel-menu',
  template: `
  <ul *ngIf="collapsed && data.items && data.items.length> 0"
  ngClass="sublevel-nav"
  >
    <li *ngFor="let item of data.items" class="sublevel-nav-item">
      <a class="sublevel-nav-link"
        *ngIf="item.items && item.items.length > 0"
      >
      <i class="sublevel-link-icon fa fa-circle"></i>
      <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span>
      <i *ngIf="item.items && collapsed" class="menu-collapse-icon"
        [ngClass]="!item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'"
      ></i>
      </a>
      <a class="sublevel-nav-level">

      </a>

    </li>

  </ul>
  `,
  styleUrls: ['./sidenav.component.scss'],
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
