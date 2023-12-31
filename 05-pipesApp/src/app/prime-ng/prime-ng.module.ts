import { NgModule } from '@angular/core';
// import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  exports: [
    // MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    SplitButtonModule,
    TableModule,
    ToolbarModule,
  ]
})
export class PrimeNgModule { }
