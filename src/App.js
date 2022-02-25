import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListData from './pages/List_Data'
import '../src/styles/tailwind.css';

export default function App() {
  return (
    <Provider store={store}>
        <div className ="p-15">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<ListData />} />
              </Routes>
            </BrowserRouter>
        </div>
    </Provider>
  )
}