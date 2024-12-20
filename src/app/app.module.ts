import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { AlbumComponent } from './Component/Album/albumDetails/album.component';
import { AddAlbumComponent } from './Component/Album/add-album/add-album.component';
import { ListPhotoComponent } from './Component/list-photo/list-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,
    AlbumComponent,
    AddAlbumComponent,
    ListPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
