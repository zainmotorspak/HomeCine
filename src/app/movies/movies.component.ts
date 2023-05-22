import { Component, OnInit } from '@angular/core';
import { MovieAppDataService } from '../services/movie-app-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movieAppDataNowPlaying: any = null;
  public movieAppDataMovieList: any = null;
  public movieAppDataTheatres: any = null;
  public date: any;
  public movieAppDataShowtimes: any = null;
  public movieAppDataTheatresNearYou: any = null;

  constructor(
    private movieAppDataService: MovieAppDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.movieAppDataService.getNowPlaying().subscribe(data => this.movieAppDataNowPlaying = data);
    this.movieAppDataService.getMovieList().subscribe(data => this.movieAppDataMovieList = data);
    this.movieAppDataService.getTheatres().subscribe(data => this.movieAppDataTheatres = data);
    this.movieAppDataService.getShowtimes().subscribe(data => this.movieAppDataShowtimes = data);
    this.movieAppDataService.getTheatresNearYou().subscribe(data => this.movieAppDataTheatresNearYou = data);
  }
}
