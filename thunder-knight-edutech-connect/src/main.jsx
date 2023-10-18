import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider'
import route from './routes/Route'



ReactDOM.createRoot(document.getElementById('root')).render(
 
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>

)
