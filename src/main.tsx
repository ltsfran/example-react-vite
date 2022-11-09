import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from '@app/styles/global'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/manage/profile" element={<div>profile</div>} />
        <Route path="/manage/notes" element={<div>notes</div>} />
        <Route path="*" element={<div>Loading...</div>} />
      </Routes>
    </BrowserRouter>
  </>
)
