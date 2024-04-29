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
			<Route path="/productInfo" element={<ProductInfo />} />
			<Route path="/searchProduct" element={<SearchProduct />} />
		</Routes>
		</>	
	);
}

export default App;
