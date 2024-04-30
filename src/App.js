import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
	SignUp, Login,
	Home, SearchProduct,
	SearchByCat, ProductInfo, 
	Catalogue, ShoppingCart, 
	AddProduct, About
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
					path="/signUp"
					element={<SignUp /> } 
				/>

				{/* START ADMIN */}
				<Route 
					path="/productInfo" 
					element={
						<ProtectedRoute>
							<ProductInfo backTo="/home" />
						</ProtectedRoute>
					} 
				/>

				<Route 
					path="/addProduct" 
					element={
						<ProtectedRoute>
							<AddProduct backTo="/home" />
						</ProtectedRoute>
					} 
				/>
				{/* END ADMIN */}

				<Route 
					path="/searchProduct" 
					element={
						<ProtectedRoute>
							<SearchProduct backTo="/home" />
						</ProtectedRoute>
					} 
				/>

				<Route 
					path="/searchByCat" 
					element={
						<ProtectedRoute>
							<SearchByCat backTo="/home" />
						</ProtectedRoute>
					} 
				/>

				<Route 
					path="/catalogue" 
					element={
						<ProtectedRoute>
							<Catalogue backTo="/home" />
						</ProtectedRoute>
					} 
				/>

				<Route 
					path="/cart" 
					element={
						<ProtectedRoute>
							<ShoppingCart backTo="/home" />
						</ProtectedRoute>
					} 
				/>

				<Route 
					path="/about" 
					element={
						<ProtectedRoute>
							<About backTo="/home" />
						</ProtectedRoute>
					} 
				/>

			</Routes>
		</AuthContextProvider>
		</>	
	);
}

export default App;
