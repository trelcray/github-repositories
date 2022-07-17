import { CheckCircle } from 'phosphor-react'
import { useContext } from 'react';
import { SearchContext } from '../contexts';

interface ListTypesProps {
    all: string;
    public: string;
    private: string;
}

interface ListOrdersProps {
    name: string;
    updated: string;
}

export function ListTypes(list: ListTypesProps) {
    const {is, setIs} = useContext(SearchContext);

    return (
        <div>
            <li
                onClick={() => setIs("")}
                className='
            flex 
            flex-row 
            items-center 
            border-b pl-3
            cursor-pointer
            hover:bg-slate-600'>
                <CheckCircle size={16} color="#81d8f7" />
                <p className='ml-2'>{list.all}</p>
            </li>
            <li
                onClick={() => setIs("public")}
                className='
            flex 
            flex-row 
            items-center 
            border-b pl-3
            cursor-pointer
            hover:bg-slate-600'>
                <CheckCircle size={16} color="#81d8f7" />
                <p className='ml-2'>{list.public}</p>
            </li>
            <li
                onClick={() => setIs("private")}
                className='
            flex 
            flex-row 
            items-center 
            border-b pl-3
            cursor-pointer
            hover:bg-slate-600'>
                <CheckCircle size={16} color="#81d8f7" />
                <p className='ml-2'>{list.private}</p>
            </li>
        </div>
    )
}
export function ListOrders(list: ListOrdersProps) {
    const {sort, setSort} = useContext(SearchContext);

    return (
        <div>
            <li
                className='
            flex 
            flex-row 
            items-center 
            border-b pl-3
            cursor-pointer
            hover:bg-slate-600'
                onClick={() => setSort("name")}>
                <CheckCircle size={16} color="#81d8f7" />
                <p className='ml-2'>{list.name}</p>
            </li>
            <li
                className='
            flex 
            flex-row 
            items-center 
            border-b 
            pl-3
            cursor-pointer
            hover:bg-slate-600'
                onClick={() => setSort("updated")}>
                <CheckCircle size={16} color="#81d8f7" />
                <p className='ml-2'>{list.updated}</p>
            </li>
        </div>
    )
}