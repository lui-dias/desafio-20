import Image from 'next/image'

type Props = {
    src: string
    alt: string
    className?: string
}

export function CustomImage({ src, alt, className }: Props) {
    return (
        <div className={`relative object-cover select-none ${className || ''}`}>
            <Image src={src} alt={alt} layout='fill' />
        </div>
    )
}
