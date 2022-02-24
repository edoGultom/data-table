import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListData from './pages/List_Data'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListData />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}