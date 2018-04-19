import { trigger, state, query, style,group, animate, transition } from '@angular/animations';

export const fadeIn=trigger('fadeIn',[
  transition('*=>*',[
    style({
        opacity:0
      }),
      animate('700ms ease-out', style({
        opacity:1
      }))
  ])
])
