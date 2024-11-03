import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { TableElement } from '../../models';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


const ELEMENT_DATA: TableElement[] = [
  {tipo:'dhduia' , status: 'Hydrogen', nome: 'dds', conta: 'H',valor:0,chave:'',data:''},
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule,MatTableModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  displayedColumns: string[] = ['tipo', 'status', 'nome', 'conta','valor','chave','data'];
  avancar1 = true
  dataSource = ELEMENT_DATA;


}
