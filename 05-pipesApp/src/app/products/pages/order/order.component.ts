import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [

  ]
})
export class OrderComponent implements OnInit {

  items: MenuItem[] | undefined;
  public orderBy?: keyof Hero | undefined;

  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna',
      canFly: true,
      color: Color.green
    },
  ]

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }

    ngOnInit() {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            },
            {
                label: 'Angular',
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            },
            {
                label: 'Router',
                icon: 'pi pi-upload',
                routerLink: '/fileupload'
            }
        ];
    }

    toggleUpperCase():void {
      this.isUpperCase = !this.isUpperCase;
    }

}
