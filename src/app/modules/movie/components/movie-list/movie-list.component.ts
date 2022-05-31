import {Component, OnInit} from '@angular/core';

import {IMovie} from '../../interfaces/movie.interface';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: IMovie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
  this.movieService.getAll().subscribe(value => this.movieList = value);
  }

}
