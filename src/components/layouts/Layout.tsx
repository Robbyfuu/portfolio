import React from 'react'
import { Box, NavbarComponent } from '../ui'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Personal } from '../../pages'

interface Props {
    children: React.ReactNode
}
export const Layout:React.FC<Props> = ({children}) => {
  return (
    <Box
    css={{
      maxW: "100%"
    }}
  >
    
    {children}
    
    <Routes>
        <Route path="/" element={<Personal/>} />
        <Route path="/project" element={<h1>About</h1>} />
    </Routes>
    
    
    
  </Box>
  )
}
