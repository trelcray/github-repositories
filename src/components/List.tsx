import { CheckCircle } from 'phosphor-react'
import { useContext } from 'react';
import { IlistOrders, IlistTypes } from '../@types/list';
import { SearchContext } from '../contexts';

export function ListTypes(list: IlistTypes) {
    const {is, setIs} = useContext(SearchContext);

    return (
        <div>
            <li
            onClick={() => setIs("")}
            className='
            border-b pl-3
            cursor-pointer
            hover:bg-slate-600'
            >
                { is == "" ? (
                <span className='
                flex 
                flex-row 
                items-center '
                >
                    <CheckCircle size={16} color="#81d8f7" />
                    <p className='ml-2'>{list.all}</p>
                </span>
                 ) 
                : 
                    <p className='ml-6'>{list.all}</p>
                }
                
            </li>
            <li
            onClick={() => setIs("public")}
            className='
            border-b pl-3
            cursor-pointer
            hover:bg-slate-600'>
                { is == "public" ? (
                <span className='
                flex 
                flex-row 
                items-center '
                >
                    <CheckCircle size={16} color="#81d8f7" />
                    <p className='ml-2'>{list.public}</p>
                </span>
                 ) 
                : 
                    <p className='ml-6'>{list.public}</p>
                }
            </li>
            <li
            onClick={() => setIs("private")}
            className='
            border-b pl-3
            cursor-pointer
            hover:bg-slate-600'>
                { is == "private" ? (
                <span className='
                flex 
                flex-row 
                items-center '
                >
                    <CheckCircle size={16} color="#81d8f7" />
                    <p className='ml-2'>{list.private}</p>
                </span>
                 ) 
                : 
                    <p className='ml-6'>{list.private}</p>
                }

            </li>
        </div>
    )
}
export function ListOrders(list: IlistOrders) {
    const {sort, setSort} = useContext(SearchContext);

    return (
        <div>
            <li
            className='
            border-b pl-3
            cursor-pointer
            hover:bg-slate-600'
            onClick={() => setSort("name")}
            >

                { sort == "name" ? (
                    <span className='
                    flex 
                    flex-row 
                    items-center '
                    >
                        <CheckCircle size={16} color="#81d8f7" />
                        <p className='ml-2'>{list.name}</p>
                    </span>
                 ) 
                : 
                    <p className='ml-6'>{list.name}</p>
                }

            </li>

            <li
            className='
            border-b 
            pl-3
            cursor-pointer
            hover:bg-slate-600'
            onClick={() => setSort("updated")}
            >
                { sort == "updated" ? (
                    <span className='
                    flex 
                    flex-row 
                    items-center '
                    >
                        <CheckCircle size={16} color="#81d8f7" />
                        <p className='ml-2'>{list.updated}</p>
                    </span>
                 ) 
                : 
                    <p className='ml-6'>{list.updated}</p>
                }
            </li>
        </div>
    )
}