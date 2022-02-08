import { createContext, Dispatch, SetStateAction, useState } from 'react'

export type Theme = 'dark' | 'light'

type Context = {
    theme: Theme
    setTheme: Dispatch<SetStateAction<Theme>>
}

export const value: Context = {
    theme: 'light',
    setTheme: () => {},
}

type Props = {
    children: React.ReactNode
}

export const ThemeContext = createContext(value)

export function ThemeContextProvider({ children }: Props) {
    const [theme, setTheme] = useState<Theme>(value.theme)

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
