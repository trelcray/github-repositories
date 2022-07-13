import { Dropdown } from './Dropdown'

export function Filters() {

    return (
        <div className="flex flex-row px-2 mt-1">
            <div className=' w-full mx-1'>
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
            />
        </div>
        <Dropdown placeholder="Type" title='Select type' attribute='teste'/>
        <Dropdown placeholder="Sort" title='Select order' attribute='none'/>
        </div>
       
    )
}