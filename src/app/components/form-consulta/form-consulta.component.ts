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
  FIPEMOCK = {
    marcas: [
      {
        nome: "Marca Mock 1",
        codigo: "1",
      },
      {
        nome: "Marca Mock 2",
        codigo: "2",
      },
    ],
    modelos: [
      {
        nome: "Modelo Mock 1",
        codigo: "1111",
      },
      {
        nome: "Modelo Mock 2",
        codigo: "2222",
      },
    ],
    anos: [
      {
        nome: "Ano Mock 1",
        codigo: "2023-1",
      },
      {
        nome: "Ano Mock 2",
        codigo: "2023-2",
      }
    ],
    fipeAutomovel: {
        Valor: "R$ 100.000,00",
        Marca: "Marca Mock 1",
        Modelo: "Modelo Mock 2",
        AnoModelo: 2023,
        Combustivel: "Diesel",
        CodigoFipe: "005340-6",
        MesReferencia: "janeiro de 2023 ",
        TipoVeiculo: 1,
        SiglaCombustivel: "Z"
    },
  };
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

  getMocks(): void {
    this.marcas = this.FIPEMOCK.marcas;
    this.modelos = this.FIPEMOCK.modelos;
    this.anos = this.FIPEMOCK.anos;
    this.fipeAutomovel = this.FIPEMOCK.fipeAutomovel;
  }

  getFipeMarcas(tipoAutomovel: string): void {
    this.selectedAutomovel = tipoAutomovel;
    this.fipeService.getMarcas(this.selectedAutomovel).subscribe({
      next: (marcas) => (this.marcas = marcas),
      error: (error: Error) => {
        console.log(error.name)
        alert('API fora do ar. Os selects serão preenchidos com valores mockados');
        this.getMocks();
      }
    });
  }

  getFipeModelos(codigoMarca: string): void {
    this.selectedMarca = codigoMarca;
    this.fipeService.getModelos(this.selectedAutomovel, this.selectedMarca).subscribe({
      next: (modelosAnos) =>  (this.modelos = modelosAnos.modelos),
      error: () => {}
    });
  }

  getFipeAnos(codigoModelo: string): void {
    this.selectedModelo = codigoModelo;
    this.fipeService.getAnos(this.selectedAutomovel, this.selectedMarca, this.selectedModelo).subscribe({
      next: (anos) => ( this.anos = anos ),
      error: () => {}
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
    ).subscribe({
      next: (tabelaFipe) => {
        this.fipeAutomovel = tabelaFipe;
        console.log(this.fipeAutomovel)
      },
      error: () => console.log(this.fipeAutomovel)
  })
  }
}
