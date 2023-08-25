import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

const data =
    [
        {
            code: 1,
            name: 'teste',
            category: 'categoria',
            quantity: 10
        },
        {
            code: 1,
            name: 'teste',
            category: 'categoria',
            quantity: 10
        },
        {
            code: 1,
            name: 'teste',
            category: 'categoria',
            quantity: 10
        }
    ]

const List = () => {
    return (
        <>
            <Navbar redirect='/kanban' redirectName='See kanban' />
            <Header title='Table' />
            <main className='main background-7'>
                <DataTable value={data} className='w-100'>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </main>
        </>
    )
}

export default List
