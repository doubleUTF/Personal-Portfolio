import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeIn=trigger('fadeIn',[
  transition(':enter',[
    style({
      opacity:0
    }),
    animate('700ms ease-out', style({
      opacity:1
    }))
  ])
])
