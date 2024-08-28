import { Route, Routes } from 'react-router-dom'
import { Card } from '../components/ui/Card/Card'

export const RouterConfig  = () => {
  return (
    <Routes>
      <Route path="/*" element={<Card />} />
    </Routes>
  )
}
