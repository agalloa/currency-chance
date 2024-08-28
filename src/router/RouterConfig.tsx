import { Route, Routes } from 'react-router-dom'
import { Tabs } from '../components/ui/Tabs/Tabs'

export const RouterConfig  = () => {
  return (
    <Routes>
      <Route path="/*" element={<Tabs />} />
    </Routes>
  )
}
