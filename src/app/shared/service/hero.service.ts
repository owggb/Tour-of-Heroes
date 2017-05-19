import {Injectable} from '@angular/core';
import {Hero} from '../model/hero.model';
import {ActivatedRoute, Params} from '@angular/router';



const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }

  getHero(id: number): Hero {
    console.log('hero.service id : ' + id);
    return HEROES.find((hero) => hero.id === id);
  }
}
