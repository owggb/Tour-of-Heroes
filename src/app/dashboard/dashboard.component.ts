import {Component, Injectable, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Hero} from '../shared/model/hero.model';
import {HeroService} from '../shared/service/hero.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

@Injectable()
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes().slice(1, 5);
  }

}
