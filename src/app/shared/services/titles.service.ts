import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TitlesService {
  private _titles$: Observable<string[]>;
  get titles$(): Observable<string[]> {
    return this._titles$;
  }

  constructor(private httpClient: HttpClient, private configService: ConfigService) {
    this._titles$ = this.httpClient.get<string[]>(`${this.configService.apiUrl}/titles`);
  }
}
