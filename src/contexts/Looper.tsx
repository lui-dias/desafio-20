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

export const LooperContext = createContext({} as Context)

export function LooperProvider({ children }: { children: React.ReactNode }) {
    const [speed, setSpeed] = useState(0.025)
    const [delta, setDelta] = useState(20)
    const [delay, setDelay] = useState(85)
    const [colorSpeed, setColorSpeed] = useState(1)
    const [primary, setPrimary] = useState(Color('#FF1CF7'))
    const [secondary, setSecondary] = useState(Color('#00F0FF'))
    const [tick, setTick] = useState(1)

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
