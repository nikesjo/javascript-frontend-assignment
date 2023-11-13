import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import News from './views/News'
import NewsDetails from './views/NewsDetails'
import NotFound from './views/NotFound'
import { ArticleProvider } from './contexts/ArticleContext'
import AutoScrollToTop from './components/Generics/AutoScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ArticleProvider>
        <AutoScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />
          <Route path='/newsdetails/:id' element={<NewsDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ArticleProvider>
    </BrowserRouter>
  )
}

export default App
