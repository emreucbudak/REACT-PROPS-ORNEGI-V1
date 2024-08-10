import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Price from './Price'

createRoot(document.getElementById('root')).render(
  <>
    <Price name = "PANTOLON" price = {3200}/>
  </>,
)
