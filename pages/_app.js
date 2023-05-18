import { ConfigProvider, theme, Layout } from 'antd'
import { AppHeader, AppFooter } from '../components'
import { appTheme } from '../configs/theme'
import '../styles/globals.css'

const { darkAlgorithm, defaultAlgorithm } = theme

const MyApp = ({ Component, pageProps }) => {
  return (
    <ConfigProvider theme={{ ...appTheme, algorithm: false ? darkAlgorithm : defaultAlgorithm }}>
      <Layout style={{ height: '100vh' }}>
        <AppHeader />

        <Layout>
          <Component {...pageProps} />
        </Layout>

        <AppFooter />
      </Layout>
    </ConfigProvider>
  )
}

export default MyApp
