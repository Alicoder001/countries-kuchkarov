import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	useParams,
} from "react-router-dom";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/about/About";
import Loading from "./components/Loading/Loading";
import useFetch from "./hooks/useFetch";
import useUrl from "./hooks/useUrl";
import useAbout from "./hooks/useAbout";
const App = () => {
	const { pending } = useFetch();
	const { pendingg } = useAbout();
	const { mode } = useUrl();
	return (
		<Router>
			<div className={mode}>
				<div className="dark:bg-slate-800 duration-300">
					<Navbar />
					{(pending || pendingg) && <Loading />}
					<Routes>
						<Route path="/" element={<Main />} />
						<Route
							path={"/country=name/:name"}
							element={<About />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
