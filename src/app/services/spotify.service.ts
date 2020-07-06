import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor(private http: HttpClient) {

  }


  getNewReleases() {

    // HttpHeaders

    const headers = new HttpHeaders( {
      'Authorization':'Bearer BQACqMJklDmafwpxnqGtpbz4DpbIXmfThRlTQgkrRrfdwVx1t-A1f_VCWFOwH30ZeZRRmn1zsgUn3sXfAh4m6Enm7SCxnabJfvdi1uvlnv_3n7ikOzcIqdOnNVeKsHpiceQP12pL9AGSTEQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {  headers });



  }
}
