import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.css']
})
export class BasicsPagesComponent {

  public nameLower: string = 'giancarlo';
  public nameUpper: string = 'GIANCARLO';
  public fullName: string = 'GiAnCaRlO YaRlEqUé';

  public customDate: Date = new Date();

}
