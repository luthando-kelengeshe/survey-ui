import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../service/response.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit{

  totalSurveyers: number = 0;
  averageAge: number = 0;
  oldest: number = 0;
  youngest: number = 0;
  pizzaLikers: number = 0;
  pastaLikers: number = 0;
  padAndWorsLikers: number = 0;
  eatOutAverage: number = 0;
  watchMovieAverage: number = 0;
  watchTvAverage: number = 0;
  listenToRadioAverage: number = 0;

  constructor(private responseService: ResponseService) {}

  ngOnInit() {
    //total surveyers
    this.responseService.getTotalSurveyers().subscribe(
      count => this.totalSurveyers = count,
      error => console.log(error)
    )

    //average age
    this.responseService.getAverageAge().subscribe(
      age => this.averageAge = age,
      error => console.log(error)
    )

    //oldest
    this.responseService.getOldest().subscribe(
      age => this.oldest = age,
      error => console.log(error)
    )

    //youngest
    this.responseService.getYoungest().subscribe(
      age => this.youngest = age,
      error => console.log(error)
    )

    //percentage pizza likers
    this.responseService.getPizzaLikers().subscribe(
      pizza => this.pizzaLikers = pizza,
      error => console.log(error)
    )

    //percentage pasta likers
    this.responseService.getPastaLikers().subscribe(
      pasta => this.pastaLikers = pasta,
      error => console.log(error)
    )

    //percentage padandwors likers
    this.responseService.getPapAndWorsLikers().subscribe(
      padandwors => this.padAndWorsLikers = padandwors,
      error => console.log(error)
    )

    //eat out average
    this.responseService.getEatOutAverage().subscribe(
      eatOut => this.eatOutAverage = eatOut,
      error => console.log(error)
    )

    //watch movie average
    this.responseService.getWatchMovieAverage().subscribe(
      watchMovie => this.watchMovieAverage = watchMovie,
      error => console.log(error)
    )

    //watch tv average
    this.responseService.getWatchTvAverage().subscribe(
      watchTv => this.watchTvAverage = watchTv,
      error => console.log(error)
    )

    //radio listening
    this.responseService.getRadioListeningAverage().subscribe(
      listenToRadio => this.listenToRadioAverage = listenToRadio,
      error => console.log(error)
    )

  }

}
