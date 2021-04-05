import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Loading from './Loading';

export const Datatable = (props) => {

    const [isMounted, setIsMounted] = useState(false);
    const [orderBy, setOrderBy] = useState('id');
    const [orderWay, setOrderWay] = useState('asc');

    useEffect(() => {
        console.log("DATATABLE > USE EFFECT")
        console.log("Props >>")
        console.log(props)
        console.log("DATATABLE > USE EFFECT orderBy", orderBy)
        console.log("DATATABLE > USE EFFECT orderWay", orderWay)
        if (!isMounted) {
            console.log("DATATABLE IS NOT MOUNTED")
            console.log("orderBy", orderBy)
            console.log("orderWay", orderWay)
            props.fetch(orderBy, orderWay);
            setIsMounted(true);
        }
    }, [isMounted, orderBy, orderWay, props])

    const handleSort = (column, sortDirection) => {
        const nextOrderBy = column.selector;
        const nextOrderWay = sortDirection;
        setOrderBy(nextOrderBy)
        setOrderWay(nextOrderWay)
        console.log("Next order by >>>> ", nextOrderBy)
        console.log("Next order way >>>> ", nextOrderWay)
        console.log("DATATABLE HANDLESORT")
        console.log("orderBy", nextOrderBy)
        console.log("orderWay", nextOrderWay)
        props.fetch(nextOrderBy, nextOrderWay);
    }

    return (

        <DataTable
            columns={props.columns}
            data={props.data}
            progressPending={props.isLoading}
            progressComponent={<Loading />}
            onSort={handleSort}
        />
    );
    
}

export default Datatable;