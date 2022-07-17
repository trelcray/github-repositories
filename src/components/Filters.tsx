import { useContext } from 'react';
import { SearchContext } from '../contexts';
import { Dropdown } from './Dropdown'

interface Itype {
    types: [{
        id: string;
        all: string;
        public: string;
        private: string;
    }
]
}

interface Iorder {
    orders:[ {
        id: string;
        name: string;
        updated: string;
    }
]
}

export function Filters() {
    const { searchData, setSearchData } = useContext(SearchContext)

    const type: Itype = {
        types: [{
            id: "1",
            all: "ALL",
            public: "PUBLIC",
            private: "PRIVATE"
        }
        ]
    }
    const { types } = type
    const getTypes = types

    const order: Iorder = {
        orders: [{
            id: "2",
            name: "NAME",
            updated: "UPDATED"
        }
        ]
    }
    const { orders } = order
    const getOrders = orders

    return (
        <div className="flex flex-row mt-1 pb-8 border-b-[1px] mx-3">
            <div className=' w-full'>
                <input
                    type="search"
                    id='Search'
                    value={searchData}
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
                    onChange={e => setSearchData(e.target.value)}
                />
            </div>
            {getTypes.map((item) => (
             <Dropdown placeholder="Type" key={item.id} title='Select type' types={[item]} /> 
             ))}
            {getOrders.map((item) => (
            <Dropdown placeholder="Sort" key={item.id} title='Select order' orders={[item]}/>
            ))}
        </div>

    )
}