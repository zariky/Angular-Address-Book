import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Coordinates } from 'src/app/model/location.model';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Input() coordinates: Coordinates | null = null;

  constructor(private domSanitizer: DomSanitizer) {}

  get mapUrl() {
    if (!this.coordinates) return '';

    const { latitude, longitude } = this.coordinates;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(env.buildGMapUrl(latitude, longitude));
  }
}
