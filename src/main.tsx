import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Routers from './router/index.tsx'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store.tsx'
import { PersistGate } from 'redux-persist/integration/react'
import { RotateSpinner } from 'react-spinners-kit'

const LoadingFallback = () => {
  return (
    <div className='flex fixed top-0 left-0 z-[99999999999] items-center w-screen h-screen justify-center'>
      <RotateSpinner size={70} color="#36D7B7" loading={true} />
  </div>
  )
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {
                Routers.map((router, index) => (
                  <Route 
                    key={index}
                    path={router.path}
                    element={<router.component />}
                  />
                ))
              }@tailwind
            </Routes>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
