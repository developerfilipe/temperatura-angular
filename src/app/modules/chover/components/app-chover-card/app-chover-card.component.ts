import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { tempoInterface } from 'src/app/models/interfaces/tempoInterface';

@Component({
  selector: 'app-app-chover-card',
  templateUrl: './app-chover-card.component.html',
  //'./app-chover-card.component.scss' removido para usar o css padrao
  styleUrls: []
})
export class AppChoverCardComponent {

  @Input() dadosTemperatura! : tempoInterface

  iconeTemperaturaMinima  =  faTemperatureLow
  iconeTemperaturaMaxima =  faTemperatureHigh
  iconeUmidade  =  faDroplet
  iconeVento =  faWind




}
