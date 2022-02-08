export function Codepen(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox='0 0 21.4 21.4' {...props}>
            <path
                d='M10.7.7l10 6.5v7l-10 6.5-10-6.5v-7zM10.7 20.7v-6.5'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.1}
            />
            <path
                d='M20.7 7.2l-10 7-10-7'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.1}
            />
            <path
                d='M.7 14.2l10-7 10 7M10.7.7v6.5'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.1}
            />
        </svg>
    )
}
