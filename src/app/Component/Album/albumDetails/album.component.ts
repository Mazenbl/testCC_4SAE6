import { Component } from '@angular/core';
import { Album } from 'src/app/models/album';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  albums: Album[] = [];

  constructor(private albumService: AlbumService) { }
  // src/app/Component/Album/albumDetails/album.component.ts
  viewPhotos(albumId: number): void {
    console.log('Naviguer vers les photos de l’album avec ID :', albumId);
  }


  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id);
    this.albums = this.albumService.getAlbums();
  }

}
