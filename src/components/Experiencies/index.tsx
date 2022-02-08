import { Dayjs } from 'dayjs'
import { useState } from 'react'
import styled from 'styled-components'
import { Neumorph } from '../Neumorph'

type Experiencie = {
    where: string
    how: string
    between: {
        start: Dayjs
        end: Dayjs | null
    }
    content: string
}

type Props = {
    experiencies: Experiencie[]
    theme: 'light' | 'dark'
}

type UlProps = {
    experiencies: Experiencie[]
    experiencieIndex: number
}

type NavProps = {
    experiencies: Experiencie[]
    experiencieIndex: number
    setExperiencieIndex: (index: number) => void
}

const Ul = styled.ul<UlProps>`
    position: relative;
    overflow-x: auto;

    &::after {
        content: '';
        position: absolute;
        transition: 0.2s ease-in-out;
    }

    @media (min-width: 1024px) {
        &::after {
            width: 4px;
            height: ${props => `calc(100% / ${props.experiencies.length})`};
            left: 0;
            top: ${props => `calc(100% / ${props.experiencies.length} * ${props.experiencieIndex})`};
        }
    }
`

function Nav({ experiencies, experiencieIndex, setExperiencieIndex }: NavProps) {
    return (
        <nav className='w-full lg:w-auto'>
            <Ul
                experiencies={experiencies}
                experiencieIndex={experiencieIndex}
                className='dark:border-r-[1px] dark:border-b-[1px] dark:border-[rgba(255,255,255,0.05)] flex lg:flex-col after:bg-[#f17602] dark:after:bg-_primary'
            >
                {experiencies.map(({ where }, index) => (
                    <li
                        key={index}
                        className={`dark:bg-_dark-200 px-9 py-4 select-none cursor-pointer whitespace-nowrap transition-all ${
                            experiencieIndex === index
                                ? 'text-[#f17602] dark:text-_light drop-shadow-[0_0_1px_#f19c4c] dark:drop-shadow-none'
                                : 'text-[#8C8C8C]'
                        }`}
                        onClick={() => setExperiencieIndex(index)}
                    >
                        {where}
                    </li>
                ))}
            </Ul>
        </nav>
    )
}

export function ExperienciesList({ experiencies, theme }: Props) {
    const [experiencieIndex, setExperiencieIndex] = useState(0)
    const actualExperiencie = experiencies[experiencieIndex]

    return (
        <div className='flex flex-col lg:flex-row gap-y-12'>
            {theme === 'light' ? (
                <Neumorph disableClickEffect>
                    <Nav
                        experiencies={experiencies}
                        experiencieIndex={experiencieIndex}
                        setExperiencieIndex={setExperiencieIndex}
                    />
                </Neumorph>
            ) : (
                <Nav
                    experiencies={experiencies}
                    experiencieIndex={experiencieIndex}
                    setExperiencieIndex={setExperiencieIndex}
                />
            )}

            <div className='px-4 md:px-20 max-w-[1000px]'>
                <div className='mb-7 flex flex-col xl:flex-row gap-y-2 justify-between'>
                    <span className='font-medium text-2xl'>{actualExperiencie.how}</span>
                    <span className='font-medium text-[#878995] dark:text-_light'>{`${actualExperiencie.between.start.format(
                        'MMM YYYY'
                    )} - ${
                        actualExperiencie.between.end
                            ? actualExperiencie.between.end.format('MMM YYYY')
                            : 'Atual'
                    }`}</span>
                </div>
                <div className='flex flex-col gap-y-6'>
                    <span className='text-[#f17602] dark:text-_primary'>{actualExperiencie.how}</span>
                    <p className='font-light text-[#a7aab7]'>{actualExperiencie.content}</p>
                </div>
            </div>
        </div>
    )
}
