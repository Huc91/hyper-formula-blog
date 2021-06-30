import * as React from 'react';
//components
import { Link } from 'gatsby'
//style
import { container, list, menuItem } from './menu.module.css';

const navigationLink = [
  {
    label: 'home',
    url: '/',
  },
  // {
  //   label: 'projects',
  //   url: '/projects',
  // },
  // {
  //   label: 'events',
  //   url: '/events',
  // },
  {
    label: 'about',
    url: '/about',
  },
  // {
  //   label: 'contact',
  //   url: '/contact',
  // },

]

export function Menu(){
  return (
    <nav className={ container }>
      <ul className={ list }>
        { navigationLink.map( (link, i) => {
          return <Link key={i} className={menuItem} to={link.url}>{ link.label }</Link>
        })}
      </ul>
    </nav>
  )
}
