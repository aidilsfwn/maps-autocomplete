import { Layout } from 'antd'
import { AppHeader, AppFooter } from '../components'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <AppHeader />

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <AppFooter />
    </Layout>
  )
}

export default MyApp
