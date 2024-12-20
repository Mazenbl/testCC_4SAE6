import { Injectable } from '@angular/core';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private albums: Album[] = [];
  private currentId = 1;

  addAlbum(albumData: Partial<Album>): void {
    const newAlbum: Album = {
      id: this.currentId++,
      title: albumData.title!,
      creationDate: new Date(),
      archived: 0,
      coverPicture: albumData.coverPicture || '',
      photos: [],
    };
    this.albums.push(newAlbum);
  }

  getAlbums(): Album[] {
    return this.albums.filter((album) => album.archived === 0);
  }

  deleteAlbum(id: number): void {
    this.albums = this.albums.filter((album) => album.id !== id);
  }
}
