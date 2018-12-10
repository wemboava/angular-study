import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {  

	constructor(private heroService: HeroService) {}

	heroes;
	selectedHero: Hero;

	getHeroes(): void {
		this.heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	ngOnInit() {
		this.getHeroes();
	}
}
