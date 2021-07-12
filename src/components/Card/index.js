import React from 'react';

export function Card({title, src, alt}) {
    return (
        <div>
            {title && <h3>{title}</h3>}
            {src && (<img src={src} alt={alt || 'no description'} />)}
        </div>
    )
}