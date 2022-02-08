export function SvgLink(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={24} height={24} fill='none' {...props}>
            <path
                d='M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71'
                strokeWidth={1.4}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M14 11a5.001 5.001 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71'
                strokeWidth={1.4}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}
