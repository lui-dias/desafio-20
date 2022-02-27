import styled from 'styled-components'

type CustomStyle = {
    gradient: string
    rotateNegative?: boolean
    duration?: number
}

type Props = {
    children: React.ReactNode
    className?: string
    gradient: string
    rotateNegative?: boolean
    duration?: number
}

const DarkGradient = styled.button<CustomStyle>`
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

export function GradientButton({ children, className, gradient, rotateNegative, duration }: Props) {
    return (
        <DarkGradient
            className={className}
            gradient={gradient}
            rotateNegative={rotateNegative}
            duration={duration}
        >
            {children}
        </DarkGradient>
    )
}
