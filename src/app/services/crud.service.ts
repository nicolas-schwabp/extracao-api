import { IExtracao } from 'src/app/models/iextracao.model';
import { API_PATH } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

// injeta modulo httpclient em variavel http
constructor(private http: HttpClient){}

  postExtracoes(extracao: IExtracao){
    return this.http.post(`${API_PATH}extracao`, extracao);
  }

  // api_path setada em enviroment
  // o metodo() retorna observable
  getExtracoes():Observable<IExtracao[]> {
    return this.http.get<IExtracao[]>(`${API_PATH}extracao`);
  }

  getExtracoesPorId():Observable<IExtracao[]>{
    return this.http.get<IExtracao[]>(`${API_PATH}extracao/1`);
  }
}

