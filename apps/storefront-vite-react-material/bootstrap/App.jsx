import { CssBaseline, ThemeProvider } from '@mui/material'

import { theme } from '@config/theme'

import Header from '@components/Header'
import Footer from '@components/Footer'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Footer />
    </ThemeProvider>
  )
}

export default App
