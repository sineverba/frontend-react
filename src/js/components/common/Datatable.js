import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Loading from './Loading';

export const Datatable = (props) => {

    const [orderBy, setOrderBy] = useState('id');
    const [orderWay, setOrderWay] = useState('asc');
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(1);

    const { fetch } = props;

    useEffect(() => {
        fetch(orderBy, orderWay, page, perPage);
    }, [fetch, orderBy, orderWay, page, perPage])

    const handleSort = (column, sortDirection) => {
        const nextOrderBy = column.selector;
        const nextOrderWay = sortDirection;
        setOrderBy(nextOrderBy)
        setOrderWay(nextOrderWay)
    }

    const handleChangeRowsPerPage = (perPage, page) => {
        const nextPerPage = perPage;
        const nextPage = page;
        setPerPage(nextPerPage);
        setPage(nextPage);
    }

    const handleChangePage = (page) => {
        const nextPage = page;
        setPage(nextPage);
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