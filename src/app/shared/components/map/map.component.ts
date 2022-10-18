import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ICoords } from 'src/app/constants/customers.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() coords: ICoords[];

  public apiLoaded: Observable<boolean>;
  public center: google.maps.LatLngLiteral;
  public markerOptions: google.maps.MarkerOptions = {draggable: false, icon: '../../../../assets/icons/marker.svg'};
  public markerPositions: google.maps.LatLngLiteral[] = [];
  public zoom = 16;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAauNOssUm5MfP0c-XEtZQNKdKBmadJK60', 
      'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
    this.center = this.coords[0];
  }

  public getMarkers(): google.maps.LatLngLiteral[] {
    this.markerPositions = this.coords;
    return this.markerPositions;
  }

}
