import { Component, OnInit } from '@angular/core';
import { TitlesService } from 'src/app/shared/services/titles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.scss']
})
export class TitleListComponent implements OnInit {
  titles$: Observable<string[]>;

  constructor(private titlesService: TitlesService) { }

  ngOnInit() {
    this.titles$ = this.titlesService.titles$;
  }

}
