import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '../Marca';

@Injectable({
  providedIn: 'root'
})
export class FipeService {
  private baseUrl = 'https://parallelum.com.br/fipe/api/v1';

  constructor(private http: HttpClient) { }

  getMarcas(tipoVeiculo: string): Observable<Marca[]> {
     // return this.http.get<Marca[]>(`${this.baseUrl}/${tipoVeiculo}/marcas`); // API
    return this.http.get<Marca[]>(`../../assets/JSON/${tipoVeiculo}/marcas.json`); // JSON local
  }
}
