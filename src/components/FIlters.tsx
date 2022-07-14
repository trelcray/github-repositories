import { useState } from 'react';
import { Dropdown } from './Dropdown'

export function Filters() {
    const [search, setSearch] = useState('');

    return (
        <div className="flex flex-row mt-1 pb-8 border-b-[1px] mx-3">
            <div className=' w-full'>
                <input 
                type="search"
                id='Search'
                className="
                bg-inherit
                border
                border-gray-400
                rounded-md
                w-full
                py-1
                px-2
                focus:outline
                focus:ring-1
                focus:border-blue-500
                focus:ring-blue-500"
                placeholder="Find a repository..." 
                onChange={e => setSearch(e.target.value)}
            />
        </div>
        <Dropdown placeholder="Type" title='Select type' attribute='teste'/>
        <Dropdown placeholder="Sort" title='Select order' attribute='none'/>
        </div>
       
    )
}