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
    name: 'ZIZ',
    tagline: 'Producer / Beatmaker / Sound Designer',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop',
    bio: `ZIZ is a music producer crafting genre-blending beats that move between
          hip-hop, electronic, and ambient textures. Over the past five years he
          has produced for emerging artists across the region and built a
          signature sound rooted in heavy low-end, cinematic samples, and
          off-kilter drum work.`
  });

  readonly topTracks = signal<Track[]>([
    { title: 'Midnight Run', youtubeId: 'dQw4w9WgXcQ' },
    { title: 'Velvet Static', youtubeId: 'kJQP7kiw5Fk' },
    { title: 'Paper Lanterns', youtubeId: '9bZkp7q19f0' }
  ]);

  readonly favTrack = signal<Track>({
    title: 'Sunset Over Riyadh (favorite)',
    youtubeId: 'JGwWNGJdvx8'
  });

  readonly contact = signal({
    email: 'booking@ziz.music',
    instagram: '@ziz.beats',
    soundcloud: 'soundcloud.com/ziz'
  });

  embed(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}`
    );
  }
}
