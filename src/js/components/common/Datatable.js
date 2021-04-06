import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Loading from './Loading';

export const Datatable = (props) => {

    const [isMounted, setIsMounted] = useState(false);
    const [orderBy, setOrderBy] = useState('id');
    const [orderWay, setOrderWay] = useState('asc');
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(1);

    useEffect(() => {
        if (!isMounted) {
            props.fetch(orderBy, orderWay, page, perPage);
            setIsMounted(true);
        }
    }, [isMounted, orderBy, orderWay, page, perPage, props])

    const handleSort = (column, sortDirection) => {
        console.log("Called handle sort")
        const nextOrderBy = column.selector;
        const nextOrderWay = sortDirection;
        setOrderBy(nextOrderBy)
        setOrderWay(nextOrderWay)
        props.fetch(nextOrderBy, nextOrderWay, page, perPage);
    }

    const handleChangeRowsPerPage = (perPage, page) => {
        const nextPerPage = perPage;
        const nextPage = page;
        setPerPage(nextPerPage);
        setPage(nextPage);
        props.fetch(orderBy, orderWay, nextPage, nextPerPage);
    }

    const handleChangePage = (page) => {
        const nextPage = page;
        setPage(nextPage);
        props.fetch(orderBy, orderWay, nextPage, perPage);
    }

    return (

        <DataTable
            columns={props.columns}
            data={props.data}
            progressPending={props.isLoading}
            progressComponent={<Loading />}
            pagination
            paginationServer
            paginationTotalRows={props.total}
            paginationPerPage={perPage}
            paginationRowsPerPageOptions={[1, 10, 15, 20, 25, 30]}
            onSort={handleSort}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            onChangePage={handleChangePage}
        />
    );
    
}

export default Datatable;