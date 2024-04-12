import NextImage from 'next/image';
import styles from './image.module.css'

export default function Image({containerClassName = "", src="/", alt, ...props}) {
    return (
        <div className={`${containerClassName} ${styles['img-container']}`}>
            <NextImage src={src} fill alt={alt} {...props}/>
        </div>
    );
}