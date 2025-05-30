import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { BrowserRouter } from 'react-router-dom'

// Import Mantine styles
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/dates/styles.css'

// Import custom theme
import { theme } from './theme'

// Import Providers
import { AuthProvider } from './context/AuthContext'
import { ColorSchemeProvider, useColorScheme } from './context/ColorSchemeContext'

// Import global styles
import './index.css'
import App from './App.tsx'

function Root() {
  const { colorScheme } = useColorScheme();

  return (
    <MantineProvider
      theme={{ ...theme, colorScheme }}
      defaultColorScheme="light"
    >
      <ModalsProvider>
        <Notifications />
        <AuthProvider>
          <App />
        </AuthProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ColorSchemeProvider>
        <Root />
      </ColorSchemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
