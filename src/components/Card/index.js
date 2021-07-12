import React from 'react';

//style
import * as styles from './style.module.css';

// Gatsby
import { navigate } from "gatsby"

export function Card({title, src, alt, url}) {
    return (
        <div className={styles.container} onClick={ () => navigate(url || '/')}>
            {title && <h3 className={styles.title}>{title}</h3>}
            {src && (
                <div className={styles.imageContainer}>
                    <img
                        className={styles.image} 
                        src={src}
                        alt={alt || 'no description'}
                    />
                </div>
            )}
        </div>
    )
}