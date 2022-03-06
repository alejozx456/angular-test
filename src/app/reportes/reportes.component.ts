import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { tap } from 'rxjs';
import { ClientesServicioService } from '../clientes-servicio.service';
import { Cliente } from '../models/clientes';
import { Character } from '../models/personajes';
import { ServicesService } from '../services.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

characters:Character[];
clientes:Cliente[];
columnsToDisplay = ['id', 'nombre', 'apellido', 'createAt','email'];
dataSource: any = [];

@ViewChild(MatPaginator) paginator: MatPaginator;



  constructor(private servicio:ClientesServicioService) { }

  ngOnInit(): void {   
   this.servicio.getClientes().subscribe((response:any)=>{
     this.dataSource=new MatTableDataSource(response);
     this.dataSource.paginator = this.paginator;
     this.clientes=response;
     console.log(response);
     
   })
    
  }
  
  

}
