import { Component, OnInit } from '@angular/core';
import { FipeService } from 'src/app/services/fipe.service';
import { Marca } from 'src/app/Marca';

@Component({
  selector: 'app-form-consulta',
  templateUrl: './form-consulta.component.html',
  styleUrls: ['./form-consulta.component.css']
})
export class FormConsultaComponent implements OnInit{
  marcas: Marca[] = [];

  constructor(private fipeService: FipeService) {}

  ngOnInit(): void {}

  getAllMarcas(tipoVeiculo: string): void {
    this.fipeService.getMarcas(tipoVeiculo).subscribe((marcas) => (this.marcas = marcas));
  }
}
