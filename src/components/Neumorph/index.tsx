import styled from 'styled-components'

type CustomStyle = {
    fillSvg?: boolean
    disableClickEffect?: boolean
    disablePressEffect?: boolean
}

const clickEffect = (fillSvg: boolean) => `
:active {
    background: #f0f4f6;
    box-shadow: inset 4px 4px 6px #c7cbcc, inset -4px -4px 10px #ffffff;

    svg {
        ${fillSvg && 'fill: #acb2c8;'}
    }
}
`

const pressEffect = () => `
:active {
    > * {
        transform: translateY(2px);
    }
}
`

export const Neumorph = styled.div<CustomStyle>`
    user-select: none;
    border-radius: 8px;
    background: #f0f4f6;
    box-shadow: 4px 4px 5px #c7cacc, -4px -4px 5px #ffffff;
    color: #acb2c8;

    svg {
        stroke: #acb2c8;
    }

    ${props => !props.disableClickEffect && clickEffect(!!props.fillSvg)}
    ${props => !props.disablePressEffect && pressEffect()}
`
