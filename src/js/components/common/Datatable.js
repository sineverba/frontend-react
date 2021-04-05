import DataTable from 'react-data-table-component';

export const Datatable = (props) => {

    return (
        <DataTable
            columns={props.columns}
            data={props.data}
        />
    );
    
}

export default Datatable;