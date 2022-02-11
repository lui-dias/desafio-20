import { useContext, useEffect, useRef, useState } from 'react'
import { GoGear } from 'react-icons/go'
import styled from 'styled-components'
import { LooperContext } from '../../contexts/Looper'
import { useOutside } from '../../hooks/useOutside'
import { useUpdateOnChange } from '../../hooks/useUpdateOnChange'
import { Neumorph } from '../Neumorph'
import nookies from 'nookies'
import { ThemeContext } from '../../contexts/ThemeSwitcher'

type InputProps = {
    theme: 'light' | 'dark'
}

const LightTheme = `
    padding: 10px;
    background: #e0e0e0;
    border-radius: 10px;
    box-shadow: -2px -2px 8px white, 2px 2px 8px rgba(0, 0, 0, 0.35);

    &[type='range'] {
        appearance: none;

        &::-webkit-slider-runnable-track {
            height: 10px;
            border-radius: 10px;
            box-shadow: inset -2px -2px 8px white, inset 2px 2px 8px rgba(0, 0, 0, 0.35);
        }

        &::-webkit-slider-thumb {
            position: relative;
            top: -50%;
            width: 20px;
            height: 20px;
            appearance: none;
            background: #fc7a00;
            filter: drop-shadow(0 0 2px #f17602);
            background-image: linear-gradient(-45deg, #d68e4b, transparent);
            border-radius: 50%;
            box-shadow: -1px -1px 2px white, 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
    }
`

const DarkTheme = `
padding: 10px;
background: #1f1d1d;
border-radius: 10px;
box-shadow: -2px -2px 8px #423d3d, 2px 2px 8px rgba(0, 0, 0, 0.35);

&[type='range'] {
    appearance: none;

    &::-webkit-slider-runnable-track {
        height: 10px;
        border-radius: 10px;
        box-shadow: inset -2px -2px 8px #474343, inset 2px 2px 8px rgba(0, 0, 0, 0.35);
    }

    &::-webkit-slider-thumb {
        position: relative;
        top: -50%;
        width: 20px;
        height: 20px;
        appearance: none;
        background: var(--blue);
        border-radius: 50%;
        box-shadow: 0 0 4px var(--blue);
    }
}
`

const Input = styled.input<InputProps>`
    ${({ theme }) => (theme === 'light' ? LightTheme : DarkTheme)}
`

export function ConfigPage() {
    const { theme } = useContext(ThemeContext)
    const [isOpen, setIsOpen] = useState(false)

    const { speed, delta, delay, colorSpeed, tick, setSpeed, setDelta, setDelay, setColorSpeed, setTick } =
        useContext(LooperContext)
    const [receiverSpeed, senderSpeedProps] = useUpdateOnChange()
    const [receiverDelta, senderDeltaProps] = useUpdateOnChange()
    const [receiverDelay, senderDelayProps] = useUpdateOnChange()
    const [receiverColorSpeed, senderColorSpeedProps] = useUpdateOnChange()
    const [receiverTick, senderTickProps] = useUpdateOnChange()

    const configPageRef = useRef<HTMLDivElement>(null)
    useOutside(configPageRef, () => setIsOpen(false))

    useEffect(() => {
        const cookies = nookies.get()

        if (!cookies.speed) {
            nookies.set(null, 'speed', speed.toString(), {
                maxAge: 31536000,
            })
        }

        if (!cookies.delta) {
            nookies.set(null, 'delta', delta.toString(), {
                maxAge: 31536000,
            })
        }

        if (!cookies.delay) {
            nookies.set(null, 'delay', delay.toString(), {
                maxAge: 31536000,
            })
        }

        if (!cookies.colorSpeed) {
            nookies.set(null, 'colorSpeed', colorSpeed.toString(), {
                maxAge: 31536000,
            })
        }

        if (!cookies.tick) {
            nookies.set(null, 'tick', tick.toString(), {
                maxAge: 31536000,
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        nookies.set(null, 'speed', speed.toString(), {
            maxAge: 31536000,
        })

        nookies.set(null, 'delta', delta.toString(), {
            maxAge: 31536000,
        })

        nookies.set(null, 'delay', delay.toString(), {
            maxAge: 31536000,
        })

        nookies.set(null, 'colorSpeed', colorSpeed.toString(), {
            maxAge: 31536000,
        })

        nookies.set(null, 'tick', tick.toString(), {
            maxAge: 31536000,
        })
    }, [colorSpeed, delay, delta, speed, tick])

    return (
        <div ref={configPageRef} className='relative'>
            <GoGear
                onClick={() => setIsOpen(!isOpen)}
                className='w-8 h-8 fill-[#878995] dark:fill-_primary cursor-pointer'
            />

            {theme === 'light' ? (
                <Neumorph
                    disableClickEffect
                    disablePressEffect
                    className={`${
                        isOpen ? 'absolute' : 'hidden'
                    } absolute bg-slate-700 rounded p-6 z-50 top-[calc(100%+10px)] w-48 left-[calc(-96px+16px)]`}
                >
                    <div className='flex flex-col text-_light gap-y-5'>
                        <span className='text-[#878995] relative after:absolute after:w-full after:h-px after:bg-[#c2c3ce] after:top-[calc(100%+8px)] after:left-0'>
                            Looper
                        </span>

                        <div className='flex flex-col gap-y-2'>
                            <div className='flex justify-between'>
                                <label className='text-[#979aa5] text-sm'>Speed</label>
                                <span ref={receiverSpeed} className='text-sm text-[#979aa5]'>
                                    {speed}
                                </span>
                            </div>

                            <Input
                                {...senderSpeedProps}
                                type='range'
                                max={0.2}
                                step={0.001}
                                defaultValue={speed}
                                onMouseUp={(e: any) => {
                                    setSpeed(parseFloat(e.target.value))
                                }}
                                theme={theme}
                            />
                        </div>

                        <div key={1} className='flex flex-col gap-y-2'>
                            <div className='flex justify-between'>
                                <label className='text-[#979aa5] text-sm'>Delta</label>
                                <span ref={receiverDelta} className='text-sm text-[#979aa5]'>
                                    {delta}
                                </span>
                            </div>
                            <Input
                                {...senderDeltaProps}
                                type='range'
                                max={20}
                                step={1}
                                defaultValue={delta}
                                onMouseUp={(e: any) => {
                                    setDelta(parseFloat(e.target.value))
                                }}
                                theme={theme}
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <div className='flex justify-between'>
                                <label className='text-[#979aa5] text-sm'>Delay</label>
                                <span ref={receiverDelay} className='text-sm text-[#979aa5]'>
                                    {delay}
                                </span>
                            </div>
                            <Input
                                {...senderDelayProps}
                                type='range'
                                max={200}
                                step={1}
                                defaultValue={delay}
                                onMouseUp={(e: any) => {
                                    setDelay(parseFloat(e.target.value))
                                }}
                                theme={theme}
                            />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <div className='flex justify-between'>
                                <label className='text-[#979aa5] text-sm'>Color Speed</label>
                                <span ref={receiverColorSpeed} className='text-sm text-[#979aa5]'>
                                    {colorSpeed}
                                </span>
                            </div>
                            <Input
                                {...senderColorSpeedProps}
                                type='range'
                                max={10}
                                step={1}
                                defaultValue={colorSpeed}
                                onMouseUp={(e: any) => {
                                    setColorSpeed(parseFloat(e.target.value))
                                }}
                                theme={theme}
                            />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <div className='flex justify-between'>
                                <label className='text-[#979aa5] text-sm'>Tick</label>
                                <span ref={receiverTick} className='text-sm text-[#979aa5]'>
                                    {tick}
                                </span>
                            </div>
                            <Input
                                {...senderTickProps}
                                type='range'
                                min={1}
                                max={20}
                                step={1}
                                defaultValue={tick}
                                onMouseUp={(e: any) => {
                                    setTick(parseFloat(e.target.value))
                                }}
                                theme={theme}
                            />
                        </div>
                    </div>
                </Neumorph>
            ) : (
                <div
                    className={`${
                        isOpen ? 'absolute' : 'hidden'
                    } absolute bg-[#272727] rounded p-6 z-50 top-[calc(100%+10px)]`}
                >
                    <div className='flex flex-col text-_light gap-y-5'>
                        <span className='text-_light relative after:absolute after:w-full after:h-px after:bg-[#5a5a5e] after:top-[calc(100%+8px)] after:left-0'>
                            Looper
                        </span>

                        <div className='flex flex-col gap-y-2'>
                            <div className='flex justify-between'>
                                <label className='text-[#979aa5] text-sm'>Speed</label>
                                <span ref={receiverSpeed} className='text-sm text-[#979aa5]'>
                                    {speed}
                                </span>
                            </div>

                            <Input
                                {...senderSpeedProps}
                                type='range'
                                max={0.2}
                                step={0.001}
                                defaultValue={speed}
                                onMouseUp={(e: any) => {
                                    setSpeed(parseFloat(e.target.value))
                                }}
                                theme={theme}
                            />
                        </div>

                        <div key={1} className='flex flex-col gap-y-2'>
                            <div className='flex justify-between'>
                                <label className='text-[#979aa5] text-sm'>Delta</label>
                                <span ref={receiverDelta} className='text-sm text-[#979aa5]'>
                                    {delta}
                                </span>
                            </div>
                            <Input
                                {...senderDeltaProps}
                                type='range'
                                max={20}
                                step={1}
                                defaultValue={delta}
                                onMouseUp={(e: any) => {
                                    setDelta(parseFloat(e.target.value))
                                }}
                                theme={theme}
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <div className='flex justify-between'>
                                <label className='text-[#979aa5] text-sm'>Delay</label>
                                <span ref={receiverDelay} className='text-sm text-[#979aa5]'>
                                    {delay}
                                </span>
                            </div>
                            <Input
                                {...senderDelayProps}
                                type='range'
                                max={200}
                                step={1}
                                defaultValue={delay}
                                onMouseUp={(e: any) => {
                                    setDelay(parseFloat(e.target.value))
                                }}
                                theme={theme}
                            />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <div className='flex justify-between'>
                                <label className='text-[#979aa5] text-sm'>Color Speed</label>
                                <span ref={receiverColorSpeed} className='text-sm text-[#979aa5]'>
                                    {colorSpeed}
                                </span>
                            </div>
                            <Input
                                {...senderColorSpeedProps}
                                type='range'
                                max={10}
                                step={1}
                                defaultValue={colorSpeed}
                                onMouseUp={(e: any) => {
                                    setColorSpeed(parseFloat(e.target.value))
                                }}
                                theme={theme}
                            />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <div className='flex justify-between'>
                                <label className='text-[#979aa5] text-sm'>Tick</label>
                                <span ref={receiverTick} className='text-sm text-[#979aa5]'>
                                    {tick}
                                </span>
                            </div>
                            <Input
                                {...senderTickProps}
                                type='range'
                                min={1}
                                max={20}
                                step={1}
                                defaultValue={tick}
                                onMouseUp={(e: any) => {
                                    setTick(parseFloat(e.target.value))
                                }}
                                theme={theme}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
