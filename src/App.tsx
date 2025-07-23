import './index.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
// import { Dashboard } from './pages/dashboard'

function App() {
    return <BrowserRouter>
        <Routes>
             {/* Redirect home route to dashboard */}
                <Route path="/" element={<Navigate to="/dashboard" />} />

                {/* Auth and main routes */}
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/share/:shareId" element={<Dashboard/>} />
        </Routes>
    </BrowserRouter>
}

export default App
