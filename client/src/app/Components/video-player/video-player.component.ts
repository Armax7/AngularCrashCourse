import { Component } from '@angular/core';
import * as Core from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import HLS, { ErrorData } from 'hls.js';

@Component({
  selector: 'app-video-player',
  // standalone: true,
  // imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css',
})
export class VideoPlayerComponent implements Core.OnInit {
  @Core.ViewChild('video', { static: true })
  private readonly video!: Core.ElementRef<HTMLVideoElement>;

  private hls = new HLS({
    liveDurationInfinity: true,
  });

  public user: string | null = 'HOME';

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.user = this.route.snapshot.paramMap.get('user') || 'HOME';
    this.load(`http://localhost:8000/live/${this.user}/index.m3u8`);
  }

  public load(videoUrl: string) {
    if (HLS.isSupported()) {
      this.loadWithHls(videoUrl);
      console.log('HLS supported');
    } else {
      console.log('Error: HLS not supported on your browser');
    }
  }
  private loadWithHls(videoUrl: string) {
    /*     this.hls.on(Hls.Events.MEDIA_ATTACHED, (event, data) => {
      console.log('Media attached: ');
    });
    this.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
      console.log(
        'manifest loaded, found ' + data.levels.length + ' quality level'
      );
    });
    this.hls.on(Hls.Events.BUFFER_APPENDING, (event, data) => {
      console.log('Apending: ', data);
    });
    this.hls.on(Hls.Events.BUFFER_APPENDED, (event, data) => {
      console.log('Appended: ', data);
    }); 
    this.hls.on(Hls.Events.ERROR, (event: any, data: ErrorData) => {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.log('fatal media error encountered, try to recover', data);
            this.hls.recoverMediaError();
            break;
          case Hls.ErrorTypes.NETWORK_ERROR:
          case Hls.ErrorTypes.KEY_SYSTEM_ERROR:
          case Hls.ErrorTypes.MUX_ERROR:
          case Hls.ErrorTypes.OTHER_ERROR:
            // console.error('fatal network error encountered', data);
            break;
          default:
            // cannot recover
            this.hls.destroy();
            break;
        }
      } else {
        console.log(data);
      }
    });*/
    this.hls.loadSource(videoUrl);
    this.hls.attachMedia(this.video.nativeElement);
  }
}
