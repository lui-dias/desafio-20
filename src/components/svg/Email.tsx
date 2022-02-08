export function Email(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={24} height={24} fill='none' {...props}>
            <path
                d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
                strokeWidth={1.4}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path d='M22 6l-10 7L2 6' strokeWidth={1.4} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    )
}
