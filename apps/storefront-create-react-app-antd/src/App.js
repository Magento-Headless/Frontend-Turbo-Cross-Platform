import { BrowserRouter } from 'react-router-dom'

import { ConfigProvider } from '@headless/react-antd'
import { ThemeConf } from '@config/theme.conf'

import Header from '@components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider prefixCls={ThemeConf.prefix}>
        <Header />
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default App
