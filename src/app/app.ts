import { Component, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Track {
  title: string;
  youtubeId: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private sanitizer: DomSanitizer) {}

  readonly producer = signal({
    name: 'SHRPR',
    tagline: 'Music producer / Beatmaker',
    image: 'logo.jpg',
    bio: `Trap producer from Saudi Arabia. Heavy 808s, cinematic samples, and drums that hit different..`
  });

  readonly topTracks = signal<Track[]>([
    { title: 'WUNNA NIGHTS', youtubeId: '6oESeUgrI1U' },
    // { title: 'BLESSED GRIND', youtubeId: 'nkhL64np9c4' },
    { title: 'LAST CALL', youtubeId: '7NlyPyyfILM' }
  ]);

  readonly favTrack = signal<Track>({
    title: 'BLESSED GRIND',
    youtubeId: 'nkhL64np9c4'
  });

  readonly contact = signal({
    email: 'booking@ziz.music',
    instagram: '@shrpr1',
    beatstar: 'beatstars.com/Sharpr',
  });

  embed(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}`
    );
  }
}
