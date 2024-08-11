import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChoverService } from '../../services/chover.service';
import { tempoInterface } from 'src/app/models/interfaces/tempoInterface';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //./home.component.scss' - foi substituido pelo valor do css global
  styleUrls: []
})
export class HomeComponent implements OnInit, OnDestroy {



  cidadeInicial : string  = "Brasilia";
  tempoInterface! : tempoInterface

  //detroi o ciclo de verificacao
  private readonly destroy :  Subject<void> =  new Subject();
  //biblioteca de icones
  iconeBuscar  =  faMagnifyingGlass



  constructor( private choverService:ChoverService){

  }


  ngOnInit(): void {
    this.getMyTempo(this.cidadeInicial);
  }

  public getMyTempo( local : string) : void {
    this.choverService.getTempo(local).
    pipe(takeUntil(this.destroy)).
    subscribe(
      {next : this.respostaNext.bind(this), error : (error) => this.respostaError.bind(this) }
    );
  }

  // Função para lidar com a resposta de sucesso
  private respostaNext(response: any): void {
    if (response) {
      this.tempoInterface = response; // Atribui o valor se a resposta existir
      console.log('Dados do clima:', this.tempoInterface.main); // Exibe os dados no console
    }
  }

  // Função para lidar com o erro
  private respostaError(error: any): void {
    console.log(error);
  }

  //recebe valor do html pelo usaurio e chama a funcao para recarregar
  onSubmit() : void {
    this.getMyTempo(this.cidadeInicial);
    this.cidadeInicial = "";
  }

//detroi quando mudado de pagina para gerenciar a amemoria
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
