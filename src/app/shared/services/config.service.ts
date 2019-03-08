import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  get apiUrl(): string {
    return 'https://dbs-employee-api.azurewebsites.net';
  }
}
