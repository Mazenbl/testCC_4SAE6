import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-list-photo',
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.css']
})
export class ListPhotoComponent {
  photos: string[] = [];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit() {
    const albumId = +this.route.snapshot.paramMap.get('id')!;
    const album = this.albumService.getAlbums().find((a) => a.id === albumId);
    if (album) {
      this.photos = album.photos;
    }
  }

}
