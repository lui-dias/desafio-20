import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeSwitcherProvider } from '../contexts/ThemeSwitcher'

export default function _({ Component, pageProps }: AppProps) {
    return (
        <ThemeSwitcherProvider>
            <Component {...pageProps} />
        </ThemeSwitcherProvider>
    )
}
