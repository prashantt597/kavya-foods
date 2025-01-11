// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import KavyaFoods from './components/KavyaFoods'
import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KavyaFoods />
  </React.StrictMode>,
)