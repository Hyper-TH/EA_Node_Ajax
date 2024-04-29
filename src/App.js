import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductInfo } from './pages/ProductInfo';
import { SearchProduct } from './pages/SearchProduct';
import { Login } from './pages/Login';

function App() {
	return (
		<>
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<Home />} />
			<Route 
				path="/productInfo" 
				element={<ProductInfo backTo="/home" />} 
			/>

			<Route 
				path="/searchProduct" 
				element={<SearchProduct backTo="/home" />} 
			/>

		</Routes>
		</>	
	);
}

export default App;
