import styled from 'styled-components'

type StyledProps = {
    firstClick: boolean
    theme: 'light' | 'dark'
    isEmpty: boolean | undefined
}

export const StyledInput = styled.input<StyledProps>`
    ${({ theme }) => (theme === 'light' ? 'border: 2px solid #e0e0e0' : 'border: 2px solid #424242')};

    :focus {
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

    ${({ isEmpty, theme, firstClick, required }) => {
        if (!required) return

        if (!isEmpty) {
            return `
            border: 2px solid #00b900;
                + label {
                    color: #00b900;
                    ${theme === 'light' ? 'background: #fff;' : 'background: #151515'};
                }
            `
        } else {
            if (!firstClick) {
                return `
                border: 2px solid ${theme === 'light' ? '#db0000' : '#9c0000'};
                    
                + label {
                    ${!firstClick && 'color: #d10000;'}
                }
                `
            }
        }
    }}

    ${({ isEmpty }) => {
        if (!isEmpty) {
            return `
            + label {
                top: -11px;
                font-size: 0.8rem;
                font-weight: bold;
                padding: 2px 10px;
            }
            `
        }
    }}
`
