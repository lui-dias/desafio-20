import { DetailedHTMLProps, forwardRef, InputHTMLAttributes, useContext, useState } from 'react'
import { ThemeContext } from '../../../contexts/ThemeSwitcher'
import { StyledInput } from './styled'

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    placeholder: string
}

export const Input = forwardRef(function Input(
    { placeholder, className, onBlur, required, ...rest }: Props,
    ref: any
) {
    const { theme } = useContext(ThemeContext)
    const [firstClick, setFirstClick] = useState(true)
    const [isEmpty, setIsEmpty] = useState(true)

    return (
        <div className={`relative ${className || ''}`}>
            <StyledInput
                onFocus={() => setFirstClick(false)}
                firstClick={firstClick}
                theme={theme}
                ref={ref}
                type='text'
                className='px-3 pb-2 pt-3 outline-none w-full rounded bg-transparent'
                autoComplete='off'
                isEmpty={isEmpty}
                onChange={e => setIsEmpty(e.target.value.length === 0)}
                required={required}
                {...rest}
            />
            <label className='absolute left-3 top-3 transition-all text-[#646464]'>{placeholder}</label>
        </div>
    )
})
