import { Component, OnInit } from '@angular/core';
import { FipeService } from 'src/app/services/fipe.service';
import { Marca } from 'src/app/interfaces/Marca';
import { Modelo } from 'src/app/interfaces/Modelo';
import { Ano } from 'src/app/interfaces/Ano';
import { Fipe } from 'src/app/interfaces/Fipe';

@Component({
  selector: 'app-form-consulta',
  templateUrl: './form-consulta.component.html',
  styleUrls: ['./form-consulta.component.css']
})
export class FormConsultaComponent implements OnInit{
  marcas: Marca[] = [];
  modelos: Modelo[] = [];
  anos: Ano[] = [];
  fipeAutomovel: Fipe = {
    Valor: "",
    Marca: "",
    Modelo: "",
    AnoModelo: 0,
    Combustivel: "",
    CodigoFipe: "",
    MesReferencia: "",
    TipoVeiculo: 0,
    SiglaCombustivel: ""
  };
  selectedAutomovel: string = '';
  selectedMarca: string = '';
  selectedModelo: string = '';
  selectedAno: string = '';

  constructor(private fipeService: FipeService) {}

  ngOnInit(): void {}

  getFipeMarcas(tipoAutomovel: string): void {
    this.selectedAutomovel = tipoAutomovel;
    this.fipeService.getMarcas(this.selectedAutomovel).subscribe((marcas) => (this.marcas = marcas));
  }

  getFipeModelos(codigoMarca: string): void {
    this.selectedMarca = codigoMarca;
    this.fipeService.getModelos(this.selectedAutomovel, this.selectedMarca).subscribe((modelosAnos) => {
      this.modelos = modelosAnos.modelos
    });
  }

  getFipeAnos(codigoModelo: string): void {
    this.selectedModelo = codigoModelo;
    this.fipeService.getAnos(this.selectedAutomovel, this.selectedMarca, this.selectedModelo).subscribe((anos) => {
      this.anos = anos
    });
  }

  setAno(codigoAno: string): void {
    this.selectedAno = codigoAno;
  }

  getFipeAutomovel(): void {
    this.fipeService.getTabelaFipe(
      this.selectedAutomovel,
      this.selectedMarca,
      this.selectedModelo,
      this.selectedAno
    ).subscribe((tabelaFipe) => {
      this.fipeAutomovel = tabelaFipe;
      console.log(this.fipeAutomovel)
    })
  }
}
