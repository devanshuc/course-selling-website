import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				backgroundColor: "#eeeeee",
			}}
		>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/signup" element={<Signup />}></Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
