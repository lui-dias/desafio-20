import { forwardRef, TextareaHTMLAttributes, useContext, useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../../contexts/ThemeSwitcher'

type StyledProps = {
    firstClick: boolean
    theme: 'light' | 'dark'
}

const Textarea = styled.textarea<StyledProps>`
    ${({ theme }) => {
        return theme === 'light' ? 'border: 2px solid #e0e0e0;' : 'border: 2px solid #424242;'
    }};

    :focus,
    :valid {
        + label {
            top: -11px;
            font-size: 0.8rem;
            font-weight: bold;
            padding: 2px 10px;
            ${({ theme }) => {
                return theme === 'light' ? 'background: #fff;' : 'background: #151515'
            }}
        }
    }

    :valid {
        border: 2px solid #00b900;
        + label {
            color: #00b900;
        }
    }

    :invalid {
        ${({ theme, firstClick }) =>
            !firstClick && `border: 2px solid ${theme === 'light' ? '#db0000' : '#9c0000'};`}

        + label {
            ${({ firstClick }) => !firstClick && 'color: #d10000;'}
        }
    }
`

type Props = {
    placeholder: string
}

const TextAreaF = (props: Props, ref: any) => {
    const [firstClick, setFirstClick] = useState(true)
    const { theme } = useContext(ThemeContext)
    const { placeholder } = props

    function onFocus() {
        setFirstClick(false)
    }

    return (
        <div className='relative w-[min(100%,500px)]'>
            <Textarea
                className='outline-none rounded bg-transparent w-full h-64 p-2 border-[#e0e0e0] focus:border-[#adadad] transition-colors resize'
                onFocus={onFocus}
                required
                firstClick={firstClick}
                theme={theme}
                ref={ref}
            />
            <label className='absolute left-3 top-3 transition-all font-inter text-[#646464]'>
                {placeholder}
            </label>
        </div>
    )
}

export const TextArea = forwardRef(TextAreaF)