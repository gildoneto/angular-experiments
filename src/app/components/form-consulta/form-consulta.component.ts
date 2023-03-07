import { Component, OnInit } from '@angular/core';
import { FipeService } from 'src/app/services/fipe.service';
import { Marca } from 'src/app/interfaces/Marca';
import { Modelo } from 'src/app/interfaces/Modelo';
import { Ano } from 'src/app/interfaces/Ano';
import { ModelosAnos } from 'src/app/interfaces/ModelosAnos';

@Component({
  selector: 'app-form-consulta',
  templateUrl: './form-consulta.component.html',
  styleUrls: ['./form-consulta.component.css']
})
export class FormConsultaComponent implements OnInit{
  marcas: Marca[] = [];
  modelos: Modelo[] = [];
  anos: Ano[] = [];
  selectedAutomovel: string = '';
  selectedMarca: string = '';
  selectedModelo: string = '';

  constructor(private fipeService: FipeService) {}

  ngOnInit(): void {}

  getAllMarcas(tipoAutomovel: string): void {
    this.selectedAutomovel = tipoAutomovel;
    this.fipeService.getMarcas(this.selectedAutomovel).subscribe((marcas) => (this.marcas = marcas));
  }

  getModelosEAnos(marca: string): void {
    this.selectedMarca = marca;
    this.fipeService.getModelosEAnos(this.selectedAutomovel, this.selectedMarca).subscribe((modelosAnos) => {
      this.modelos = modelosAnos.modelos
      this.anos = modelosAnos.anos
    });
  }
}
