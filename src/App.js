import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
	SignUp, Login,
	Home, SearchProduct,
	ProductInfo
} from './RouteImports.js';
import ProtectedRoute from './components/auth/ProtectedRoute.js';
import { AuthContextProvider } from './components/context/AuthContext.js';

function App() {
	return (
		<>
		<AuthContextProvider>
			<Routes>
				<Route path="/" element={<Login />} />

				<Route 
					path="/home"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					} 
				/>

				<Route 
					path="/productInfo" 
					element={
						<ProtectedRoute>
							<ProductInfo backTo="/home" />
						</ProtectedRoute>
					} 
				/>

				<Route 
					path="/searchProduct" 
					element={
						<ProtectedRoute>
							<SearchProduct backTo="/home" />
						</ProtectedRoute>
					} 
				/>

			</Routes>
		</AuthContextProvider>
		</>	
	);
}

export default App;
