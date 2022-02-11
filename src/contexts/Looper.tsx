import Color from 'color'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

type Context = {
    primary: Color
    secondary: Color
    speed: number
    delta: number
    delay: number
    colorSpeed: number
    tick: number
    setPrimary: Dispatch<SetStateAction<Color>>
    setSecondary: Dispatch<SetStateAction<Color>>
    setSpeed: Dispatch<SetStateAction<number>>
    setDelta: Dispatch<SetStateAction<number>>
    setDelay: Dispatch<SetStateAction<number>>
    setColorSpeed: Dispatch<SetStateAction<number>>
    setTick: Dispatch<SetStateAction<number>>
}

type Props = {
    children: React.ReactNode
    data: {
        primary: string
        secondary: string
        speed: number
        delta: number
        delay: number
        colorSpeed: number
        tick: number
    }
}

export const LooperContext = createContext({} as Context)

export function LooperProvider({ children, data }: Props) {
    const [primary, setPrimary] = useState(Color(data.primary))
    const [secondary, setSecondary] = useState(Color(data.secondary))
    const [speed, setSpeed] = useState(data.speed)
    const [delta, setDelta] = useState(data.delta)
    const [delay, setDelay] = useState(data.delay)
    const [colorSpeed, setColorSpeed] = useState(data.colorSpeed)
    const [tick, setTick] = useState(data.tick)

    return (
        <LooperContext.Provider
            value={{
                primary,
                secondary,
                speed,
                delta,
                delay,
                colorSpeed,
                tick,
                setPrimary,
                setSecondary,
                setSpeed,
                setDelta,
                setDelay,
                setColorSpeed,
                setTick,
            }}
        >
            {children}
        </LooperContext.Provider>
    )
}
