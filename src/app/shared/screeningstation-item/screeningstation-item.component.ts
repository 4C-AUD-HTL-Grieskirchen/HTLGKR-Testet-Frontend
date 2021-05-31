import {Component, Input, OnInit} from '@angular/core';
import {Screeningstation} from '../../models/Screeningstation';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-screeningstation-item',
  templateUrl: './screeningstation-item.component.html',
  styleUrls: ['./screeningstation-item.component.css']
})
export class ScreeningstationItemComponent implements OnInit {

    faMarker = faMapMarkerAlt;

    @Input() screeningStation: Screeningstation | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
