import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
	return (
		<>
			<div className="w-full px-13 py-4 xl:sticky top-0">
				<Header />
			</div>
			<div className="w-full sm:w-full md:w-full lg:w-full xl:w-full mx-auto">
				<div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/2 mx-auto">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Layout;
