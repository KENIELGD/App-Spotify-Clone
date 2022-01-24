import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { HeaderuserComponent } from './components/headeruser/headeruser.component';
import { CardplayerComponent } from './components/cardplayer/cardplayer.component';
import { SectiongenericComponent } from './components/sectiongeneric/sectiongeneric.component';
import { PlaylistheaderComponent } from './components/playlistheader/playlistheader.component';
import { PlaylistbodyComponent } from './components/playlistbody/playlistbody.component';
import { RouterModule } from '@angular/router';
import { OrderlistPipe } from './pipes/orderlist.pipe';
import { ImgbrokenDirective } from './directives/imgbroken.directive';



@NgModule({
  declarations: [
    SidebarComponent,
    MediaplayerComponent,
    HeaderuserComponent,
    CardplayerComponent,
    SectiongenericComponent,
    PlaylistheaderComponent,
    PlaylistbodyComponent,
    OrderlistPipe,
    ImgbrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    MediaplayerComponent,
    HeaderuserComponent,
    CardplayerComponent,
    SectiongenericComponent,
    PlaylistheaderComponent,
    PlaylistbodyComponent,
    OrderlistPipe
  ]
})
export class SharedModule { }
