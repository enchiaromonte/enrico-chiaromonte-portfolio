import { useEffect, useRef } from 'react';

export default function VideoPlayer( { src } ) {

    return (
        <video autoPlay loop muted >
            <source src={ src } type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}
