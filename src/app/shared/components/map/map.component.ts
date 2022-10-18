import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ICoords } from 'src/app/constants/customers.interface';
import { MapApiService } from '../../services/map-api.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MapApiService]
})
export class MapComponent implements OnInit {

  @Input() coords: ICoords[];

  public isApiLoaded$: Observable<boolean>;
  public center: google.maps.LatLngLiteral;
  public markerOptions: google.maps.MarkerOptions = {draggable: false, icon: '../../../../assets/icons/marker.svg'};
  public markerPositions: google.maps.LatLngLiteral[] = [];
  public zoom = 16;

  constructor(private mapApiService: MapApiService) {
    this.isApiLoaded$ = this.mapApiService.loadApi();
  }

  ngOnInit(): void {
    this.center = this.coords[0];
  }

  public getMarkers(): google.maps.LatLngLiteral[] {
    this.markerPositions = this.coords;
    return this.markerPositions;
  }

}
