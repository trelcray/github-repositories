import { ArrowDown, XCircle, CheckCircle } from 'phosphor-react'
import { useState } from 'react'

interface Select {
    placeholder: string;
    title: string;
    attribute: string;
}

export function Dropdown(select: Select) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex items-end flex-col'>
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="
            flex
            flex-row
            items-center
            mx-1
            rounded-lg
            bg-gray-600
            px-3
            py-1
            hover:bg-gray-400"
            >
                <p>{select.placeholder}</p>
                <ArrowDown size={20} className='pl-1' />
            </button>

            {isOpen &&
                <div className='absolute w-60'>
                    <div className='
                    absolute 
                    border 
                    border-solid 
                    z-10 
                    top-10 
                    w-60 
                    rounded-md 
                    bg-gray-500'
                    >
                        <section className='
                        flex 
                        flex-row 
                        items-center 
                        justify-between 
                        border-b 
                        pl-3'
                        >
                            <h1 >{select.title}</h1>
                            <XCircle
                                size={16}
                                color="#81d8f7"
                                className='mr-3'
                                onClick={() => setIsOpen(!isOpen)}
                            />
                        </section>

                        <section className='
                        flex 
                        flex-row 
                        items-center 
                        border-b pl-3'
                        >
                            <CheckCircle size={16} color="#81d8f7" />
                            <p className='ml-2' >{select.attribute}</p>
                        </section>
                    </div>

                    <div className='
                    fixed 
                    top-0 
                    bottom-0 
                    left-0 
                    right-0'
                    onClick={() => setIsOpen(!isOpen)}
                    />

                </div>

            }
        </div>
    )
}