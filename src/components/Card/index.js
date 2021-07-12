import React from 'react';

//style
import * as styles from './style.module.css';

export function Card({title, src, alt}) {
    return (
        <div className={styles.container}>
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