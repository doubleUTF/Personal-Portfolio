import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AnonForumComponent} from './anon-forum.component';
import {BoardListComponent} from './board-list/board-list.component';
import {ThreadListComponent} from './thread-list/thread-list.component';
import {ThreadListResolverService} from './thread-list/thread-list-resolver.service';
import {ThreadComponent} from './thread-list/thread/thread.component';

const anonForumRoutes:Routes=[
  {path:'',component:AnonForumComponent,children:[
    {path:'',component:BoardListComponent},
    {path:':board',component:ThreadListComponent,
     resolve:{threads:ThreadListResolverService}},
     {path:':board/:id,component:',component:ThreadComponent,
   resolve:{replies:}}
  ]},
]

@NgModule({
  imports:[RouterModule.forChild(anonForumRoutes)],
  exports:[RouterModule]
})

export class AnonForumRoutes{}
