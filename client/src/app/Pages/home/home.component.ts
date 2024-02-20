import { Component } from '@angular/core';
import { UserComponent } from '../../Components/user/user.component';
import { VideoPlayerComponent } from "../../Components/video-player/video-player.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [UserComponent]
})
export class HomeComponent {

}
