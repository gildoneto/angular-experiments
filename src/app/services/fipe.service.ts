import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '../interfaces/Marca';
import { Modelo } from '../interfaces/Modelo';
import { Ano } from '../interfaces/Ano';
import { Fipe } from '../interfaces/Fipe';
import { ModelosAnos } from '../interfaces/ModelosAnos';

@Injectable({
  providedIn: 'root'
})
export class FipeService {
  private baseUrl = 'https://parallelum.com.br/fipe/api/v1/';

  constructor(private http: HttpClient) { }

  getMarcas(tipoAutomovel: string): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.baseUrl}${tipoAutomovel}/marcas`);
  }

  getModelosEAnos(tipoAutomovel: string, codigoMarca: string): Observable<ModelosAnos> {
    console.log(tipoAutomovel, codigoMarca);
    const modelosAnos = this.http.get<ModelosAnos>(`${this.baseUrl}${tipoAutomovel}/marcas/${codigoMarca}/modelos`);
    // modelos.subscribe((modelos) => console.log(modelos));
    return modelosAnos;
  }

  // getAnos(tipoAutomovel: string, codigoMarca: string, codigoModelo: string): Observable<Ano[]> {
  //   return this.http.get<Ano[]>(`${this.baseUrl}${tipoAutomovel}/marcas/${codigoMarca}/modelos/${codigoModelo}/anos`);
  // }

  getFipe(tipoAutomovel: string, codigoMarca: string, codigoModelo: string, codigoAno: string): Observable<Fipe> {
    return this.http.get<Fipe>(`${this.baseUrl}${tipoAutomovel}/marcas/${codigoMarca}/modelos/${codigoModelo}/anos/${codigoAno}`);
  }
}
