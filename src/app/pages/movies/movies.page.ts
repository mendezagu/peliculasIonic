import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies = <any>[] ;
  currentPage = 1;
  imageBaseUrl = environment.images;
  authenticated = false;


  constructor(
    private movieService: MovieService,
    private loadingCtrl: LoadingController,
    private router: Router) { }

    ionViewWillEnter() {
      if (!this.isAuthenticated()) {
        //this.router.navigateByUrl('/login');
      }
    }

    isAuthenticated(): boolean {
      const user = localStorage.getItem('usuario');
      return user !== null;
    }

  ngOnInit() {
    this.loadMovies();
    
  }

  async loadMovies(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    })
    await loading.present();

    this.movieService.getTopRatedMovies(this.currentPage).subscribe((res) => {
      loading.dismiss();
      this.movies = [...this.movies, ...res.results];
      console.log(res);

      event?.target.complete()
    })

  }

}
