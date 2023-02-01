import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  stars: number[] = [1,2,3,4,5];

  selectedValue: number = 0;
  isMouseover = true;

  public data: any;

  movies = {
    rating: 0
  }
  movie = <any> null;
  imageBaseUrl = environment.images

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }


  ngOnInit() {
    console.log(this.selectedValue);
    
    console.log(this.stars)
    const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.movieService.getMovieDetails(id).subscribe(res =>{
      console.log(res)
      this.movie= res
    });
  }
}

  counStar(star: number){
      this.isMouseover = false;
      this.selectedValue = star;
      this.data = this.selectedValue;
      console.log(this.data)
  }

  addClass(star: number){
    if (this.isMouseover){
      this.selectedValue = star
      console.log(this.selectedValue);
      
    }
  }

  removeClass(){
    if(this.isMouseover){
      this.selectedValue = 0;
      console.log(this.selectedValue);
      
    }
  }

  submit() {
    console.log('Movie Title: ', this.movie.title);
    console.log('Rating: ', this.movie.rating);
  }

  openHomePage(){
    window.open(this.movie.homepage);
  }

}
