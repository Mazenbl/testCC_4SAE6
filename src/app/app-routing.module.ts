import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './Component/Album/albumDetails/album.component';
import { AddAlbumComponent } from './Component/Album/add-album/add-album.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { ListPhotoComponent } from './Component/list-photo/list-photo.component';

const routes: Routes = [
  { path: 'albums', component: AlbumComponent },
  { path: 'add-album', component: AddAlbumComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'album/:id/photos', component: ListPhotoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
