import { createContext, Dispatch, SetStateAction, useState } from 'react'

export type Theme = 'dark' | 'light'

type Context = {
    theme: Theme
    setTheme: Dispatch<SetStateAction<Theme>>
}

type Props = {
    children: React.ReactNode
}

export const ThemeContext = createContext({} as Context)

export function ThemeContextProvider({ children }: Props) {
    const [theme, setTheme] = useState<Theme>('light')

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
