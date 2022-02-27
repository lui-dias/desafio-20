type Props = {
    children: React.ReactNode
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export function Form({ children, onSubmit }: Props) {
    return (
        <div className='container mx-auto px-8 py-24 md:px-24'>
            <h2 className='uppercase mb-8 text-[#878995] dark:text-_light'>Contato</h2>

            <form className='flex flex-col items-start gap-y-6' onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    )
}
