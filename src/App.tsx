import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Body from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Body />} />
					<Route path="policy" element={<PrivacyPolicy />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
