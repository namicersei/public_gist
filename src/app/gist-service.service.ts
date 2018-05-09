import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Gist} from '../gist';

@Injectable({providedIn: 'root'})

export class GistServiceService {

  constructor(private http: HttpClient) {
  }
  // this function takes the page number and per page value and fetches the observable data.
  getGists(page_number, per_page): Observable<Gist[]> {
    const url = 'https://api.github.com/gists/public?page=' + page_number + '&per_page=' + per_page;
    return this.http.get<Gist[]>(url);
  }
}
