import ResetStyleCSS from './styles/ResetStyleCSS'
import GlobalStyle from './styles/GlobalStyle'
import PagesRoutes from './Routes'
import { AuthProvider } from './contexts/authContext'

function App() {
	return (
		<AuthProvider>
			<ResetStyleCSS/>
			<GlobalStyle/>
			<PagesRoutes/>
		</AuthProvider>
	)
}

export default App
