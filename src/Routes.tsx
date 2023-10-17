import { Route, Router, Routes } from "@solidjs/router";
import { Login } from "@/components/template";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" component={Login} />{" "}
				{/* 👈 Define the home page route */}
			</Routes>
		</Router>
	);
}

export default App;
