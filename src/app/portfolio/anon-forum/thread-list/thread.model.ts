import {Reply} from './thread/reply.model';
export interface Thread{
  text:string,
  created_on:string,
  bumped_on:string,
  reported:boolean,
  board:string,
  replies:Array<Reply>,
}
