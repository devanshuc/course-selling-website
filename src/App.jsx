import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
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
			<Navbar />
			<Signup />
		</div>
	);
}

export default App;
