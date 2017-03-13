import {Component} from "@angular/core";
import {Heroe, HeroesService} from "../../servicios/heroes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroe(params['txt']);
      console.log(this.heroes);
    });
  }


}
