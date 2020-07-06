import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'

})
export class HomeComponent {

  releases: any[] = [];

  constructor(private spotify: SpotifyService) {

    spotify.getNewReleases()
      .subscribe( (data:any) => {

          this.releases = data.albums.items;

      });


   }



}
