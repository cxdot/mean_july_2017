import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gituser: any = {};
  score: any;
  error_msg = '';
  onSubmit(gituser) {
    this.error_msg = '';
    this.score = '';
    return this._http.getUser(gituser.username)
    .then( output => { console.log(output);
    this.score = output.public_repos + output.followers;
  })
    .catch( err => { console.log(err);
      this.error_msg = 'Your username is invalid.';
    });
  }

  constructor(private _http: HttpService) {

  }
}
