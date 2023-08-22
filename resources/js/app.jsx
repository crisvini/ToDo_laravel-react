import '../css/app.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"

import ReactDOM from 'react-dom/client'
import Home from './Page/Home'

ReactDOM.createRoot(document.getElementById('app')).render(
    <PrimeReactProvider>
        <Home />
    </PrimeReactProvider>
)
