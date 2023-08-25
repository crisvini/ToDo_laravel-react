import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

const data =
    [
        {
            code: 1,
            name: 'a',
            description: 'categoria',
            status: 'doing',
            created: '10/08/2023',
            concluded: '',
            quantity: 10
        },
        {
            code: 2,
            name: 'b',
            description: 'categoria',
            status: 'done',
            created: '20/08/2023',
            concluded: '25/08/2023',
            quantity: 30
        },
        {
            code: 3,
            name: 'c',
            description: 'categoria',
            status: 'to do',
            created: '15/08/2023',
            concluded: '',
            quantity: 20
        }
    ]

const List = () => {
    return (
        <>
            <Navbar redirect='/kanban' redirectName='See kanban' />
            <Header title='Table' />
            <main className='main background-7'>
                <DataTable value={data} paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}" emptyMessage="No tasks found." paginator rows={10} rowsPerPageOptions={[10, 25, 50]} removableSort sortField="code" sortOrder={-1} className='w-100'>
                    <Column sortable field="code" header="code"></Column>
                    <Column sortable field="name" header="name"></Column>
                    <Column sortable field="description" header="description"></Column>
                    <Column sortable field="status" header="status"></Column>
                    <Column sortable field="created" header="created"></Column>
                    <Column sortable field="concluded" header="concluded"></Column>
                    <Column header="delete"></Column>
                </DataTable>
            </main>
        </>
    )
}

export default List
