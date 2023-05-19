import React from 'react'
import { Provider } from 'react-redux'
import { AppLayout } from '../components/Layout'
import store from '../store/store'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  )
}

export default MyApp
