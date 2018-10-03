import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {AnonForumComponent} from './anon-forum.component';
import {AnonForumRoutes} from './anon-forum.routing';
import { HeaderComponent } from './header/header.component';
import { BoardListComponent } from './board-list/board-list.component';
import {AnonForumService} from './anon-forum.service';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ThreadComponent } from './thread-list/thread/thread.component';

@NgModule({
  imports: [
    SharedModule,
    AnonForumRoutes
  ],
  declarations: [
    AnonForumComponent,
    HeaderComponent,
    BoardListComponent,
    ThreadListComponent,
    ThreadComponent
  ],
  providers:[
    AnonForumService
  ]
})
export class AnonForumModule { }
