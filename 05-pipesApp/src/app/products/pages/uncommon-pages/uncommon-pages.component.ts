import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.css']
})
export class UncommonPagesComponent {

  // i18n Select
  public name: string = 'Giancarlo';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male' : 'invitarlo',
    'female': 'invitarla'
  };

  public clientsMap = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];

  //KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 3,
    address: 'Perú'
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('Tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
    }, 3500)
  });

  changeClient(): void {
    this.name = 'Ana';
    this.gender = 'female';
  }

  deleteClient(): void {
    this.clients.shift();
  }

}
