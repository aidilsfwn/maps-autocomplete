import { ConfigProvider, Layout, Modal, Spin } from 'antd'
import { AppHeader, AppFooter } from '../components'
import { appTheme } from '../configs/theme'
import { useDispatch, useSelector } from 'react-redux'
import { createContext, useEffect } from 'react'
import { setIsError } from '../store/autoCompleteSlice'

const Context = createContext(null)

const AppLayout = ({ children }) => {
  const [modal, contextHolder] = Modal.useModal()
  const { status, isError } = useSelector((state) => state.autoComplete)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError)
      modal.error({
        title: 'Oops!',
        content: 'There seems to be a problem in putting your marker on the map. Please select nearby location.',
        onOk() {
          dispatch(setIsError(false))
        },
      })
  }, [isError])

  return (
    <ConfigProvider theme={{ ...appTheme }}>
      <Context.Provider value='Light'>
        <Layout style={{ minHeight: '100vh' }}>
          <AppHeader />
          {children}
          <AppFooter />
          <Modal open={status === 'loading'} footer={null} closable={false} centered bodyStyle={{ padding: '0px 0px', margin: 0 }} modalRender={renderLoadingModal} />
        </Layout>
        {contextHolder}
      </Context.Provider>
    </ConfigProvider>
  )
}

const renderLoadingModal = () => {
  return (
    <Layout style={{ backgroundColor: 'transparent', width: '100%', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
      <Spin size='large' />
    </Layout>
  )
}

export { AppLayout }
