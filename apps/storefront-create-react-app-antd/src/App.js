import { BrowserRouter } from 'react-router-dom'

import { ConfigProvider } from 'antd'

import { ThemeConf } from '@config/theme.conf'

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider prefixCls={ThemeConf.prefix}>
        <p>123</p>
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default App
