import { CrudService } from '../../services/crud.service';
import { Component } from '@angular/core';
import { IExtracao } from 'src/app/models/iextracao.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent{
  allExtracoes: IExtracao[] = [];
  extracoes: IExtracao;

  constructor(private crudService: CrudService) {
    this.listarExtracoes();
    this.listarExtracoesPorId();
  }
  // life cyclo, componente inicializador na tela
  ngOnInit(): void {
    this.listarExtracoes();
  }


  listarExtracoesPorId():void{
    this.crudService.getExtracoesPorId().subscribe(
      (extractid => console.log(extractid)))
  }

    // metodo que consome o metodo em service
    // subscribe se inscreve para ser notificado de informacoes de getExtracoes()
  listarExtracoes():void{
     this.crudService.getExtracoes().subscribe(extracts =>
      this.allExtracoes = extracts);
  }
}
