import Link from 'next/link'
import styled from 'styled-components'

type CustomStyle = {
    gradient: string
    rotateNegative?: boolean
    duration?: number
}

type Props = {
    children: React.ReactNode
    href: string
    className?: string
    gradient: string
    rotateNegative?: boolean
    duration?: number
}

const DarkGradient = styled.a<CustomStyle>`
    @property --angle {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
    }

    @keyframes rotate {
        to {
            --angle: 360deg;
        }
    }

    @keyframes rotate-negative {
        to {
            --angle: -360deg;
        }
    }

    user-select: none;

    position: relative;

    border: 2px solid;
    border-image-slice: 1;
    border-image-source: ${props => props.gradient};
    --angle: 0deg;

    border-image: linear-gradient(var(--angle), var(--gradient-purple-from), var(--gradient-purple-to)) 1;
    animation: ${props => `${props.duration || 12}s`}
        ${props => (props.rotateNegative ? 'rotate-negative' : 'rotate')} ease-in infinite;
`

export function GradientButton({ href, children, className, gradient, rotateNegative, duration }: Props) {
    return (
        <Link href={href} passHref>
            <DarkGradient
                className={`flex items-center gap-x-4 px-8 py-2 ${className || ''}`}
                gradient={gradient}
                target='_blank'
                rel='noopener noreferrer'
                rotateNegative={rotateNegative}
                duration={duration}
            >
                {children}
            </DarkGradient>
        </Link>
    )
}
