import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Kanban = () => {
    return (
        <>
            <Navbar redirect='/table' redirectName='See table' />
            <Header title='Kanban board' />
            <main className='main background-7'>
            </main>
        </>
    )
}

export default Kanban
