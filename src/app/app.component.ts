import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app';

  video = {
    title: "Despacito",
    views: 2,
    liked: true
  }

  handleClick() {
    console.log("Someone clicked the 'like' button in the template :)")
  }
}
