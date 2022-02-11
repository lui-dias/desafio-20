import { useContext, useRef, useState } from 'react'
import { GoGear } from 'react-icons/go'
import styled from 'styled-components'
import { LooperContext } from '../../contexts/Looper'
import { useOutside } from '../../hooks/useOutside'
import { useUpdateOnChange } from '../../hooks/useUpdateOnChange'
import { Neumorph } from '../Neumorph'

const Input = styled.input`
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

export function ConfigPage() {
    const [isOpen, setIsOpen] = useState(false)

    const { setSpeed, setDelta, setDelay, setColorSpeed, setTick } = useContext(LooperContext)
    const [receiverSpeed, senderSpeedProps] = useUpdateOnChange()
    const [receiverDelta, senderDeltaProps] = useUpdateOnChange()
    const [receiverDelay, senderDelayProps] = useUpdateOnChange()
    const [receiverColorSpeed, senderColorSpeedProps] = useUpdateOnChange()
    const [receiverTick, senderTickProps] = useUpdateOnChange()

    const configPageRef = useRef<HTMLDivElement>(null)
    useOutside(configPageRef, () => setIsOpen(false))

    return (
        <div ref={configPageRef} className='relative'>
            <GoGear
                onClick={() => setIsOpen(!isOpen)}
                className='w-8 h-8 fill-[#878995] dark:fill-_primary cursor-pointer'
            />

            <Neumorph
                disableClickEffect
                disablePressEffect
                className={`${
                    isOpen ? 'absolute' : 'hidden'
                } absolute bg-slate-700 rounded p-6 z-50 top-[calc(100%+10px)]`}
            >
                <div className='flex flex-col text-_light gap-y-5'>
                    <span className='text-[#878995] relative after:absolute after:w-full after:h-px after:bg-[#c2c3ce] after:top-[calc(100%+8px)] after:left-0'>
                        Looper
                    </span>

                    <div className='flex flex-col gap-y-2'>
                        <div className='flex justify-between'>
                            <label className='text-[#979aa5] text-sm'>Speed</label>
                            <span ref={receiverSpeed} className='text-sm text-[#979aa5]'>
                                0.025
                            </span>
                        </div>

                        <Input
                            {...senderSpeedProps}
                            type='range'
                            max={0.2}
                            step={0.001}
                            defaultValue={0.025}
                            onMouseUp={(e: any) => setSpeed(parseFloat(e.target.value))}
                        />
                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <div className='flex justify-between'>
                            <label className='text-[#979aa5] text-sm'>Delta</label>
                            <span ref={receiverDelta} className='text-sm text-[#979aa5]'>
                                20
                            </span>
                        </div>
                        <Input
                            {...senderDeltaProps}
                            type='range'
                            max={20}
                            step={1}
                            defaultValue={20}
                            onMouseUp={(e: any) => setDelta(parseFloat(e.target.value))}
                        />
                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <div className='flex justify-between'>
                            <label className='text-[#979aa5] text-sm'>Delay</label>
                            <span ref={receiverDelay} className='text-sm text-[#979aa5]'>
                                85
                            </span>
                        </div>
                        <Input
                            {...senderDelayProps}
                            type='range'
                            max={200}
                            step={1}
                            defaultValue={85}
                            onMouseUp={(e: any) => setDelay(parseFloat(e.target.value))}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <div className='flex justify-between'>
                            <label className='text-[#979aa5] text-sm'>Color Speed</label>
                            <span ref={receiverColorSpeed} className='text-sm text-[#979aa5]'>
                                1
                            </span>
                        </div>
                        <Input
                            {...senderColorSpeedProps}
                            type='range'
                            max={10}
                            step={1}
                            defaultValue={1}
                            onMouseUp={(e: any) => setColorSpeed(parseFloat(e.target.value))}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <div className='flex justify-between'>
                            <label className='text-[#979aa5] text-sm'>Tick</label>
                            <span ref={receiverTick} className='text-sm text-[#979aa5]'>
                                1
                            </span>
                        </div>
                        <Input
                            {...senderTickProps}
                            type='range'
                            min={1}
                            max={20}
                            step={1}
                            defaultValue={1}
                            onMouseUp={(e: any) => setTick(parseFloat(e.target.value))}
                        />
                    </div>
                </div>
            </Neumorph>
        </div>
    )
}
