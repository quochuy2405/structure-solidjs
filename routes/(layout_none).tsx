import { Outlet } from "solid-start";

const DefaultLayout = () => {
	return (
		<div class="w-screen h-screen bg-red-500">
			<Outlet />
		</div>
	);
};

export default DefaultLayout;
