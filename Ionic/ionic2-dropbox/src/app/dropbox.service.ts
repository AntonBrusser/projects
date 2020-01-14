import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DropboxService {

  accessToken: any;
  folderHistory: any = [];

  constructor() { }
}
