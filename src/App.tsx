import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/auth/register'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<h1>hello world</h1>} path="/" />
        <Route element={<RegisterPage />} path="/sign-in" />
      </Routes>
    </BrowserRouter>
  )
}
