
import { Route, Routes } from 'react-router-dom'
import { ConversionForm } from '../components'

export const RouterConfig  = () => {
  return (
    <Routes>
      <Route path="/*" element={<ConversionForm />} />
    </Routes>
  )
}
