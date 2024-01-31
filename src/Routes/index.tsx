import { memo } from 'react'

import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

import About from 'pages/About'
import Contact from 'pages/Contact'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
