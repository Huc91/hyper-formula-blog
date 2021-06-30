import * as React from 'react';

import { container } from './menu.module.css';

const navigationLink = [
  {
    label: 'home',
    url: '/',
  },
  {
    label: 'projects',
    url: '/projects',
  },
  {
    label: 'events',
    url: '/events',
  },
  {
    label: 'about',
    url: '/about',
  },
  {
    label: 'contact',
    url: '/contact',
  },

]

export function Menu(){
  return (
    <div className={ container }>
      <ul>
        { navigationLink.map( (link => {
          return <li>{ link.label }</li>
        }))}
      </ul>
    </div>
  )
}
