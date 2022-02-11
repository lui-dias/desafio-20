import { createContext, Dispatch, SetStateAction, useState } from 'react'

export type Theme = 'light' | 'dark'

type Context = {
    theme: Theme
    setTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext({} as Context)

export function ThemeSwitcherProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light')

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
