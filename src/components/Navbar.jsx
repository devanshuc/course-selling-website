import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: 4,
				zIndex: 1,
				height: "4rem",
			}}
		>
			<div style={{ marginLeft: 10 }}>
				<Typography variant={"h5"}>Udemy</Typography>
			</div>
			<div style={{ display: "flex" }}>
				<div style={{ marginRight: 10 }}>
					<Button
						variant="contained"
						onClick={() => {
							navigate("/signup");
						}}
					>
						SignUp
					</Button>
				</div>
				<div
					style={{ marginRight: 10 }}
					onClick={() => {
						navigate("/login");
					}}
				>
					<Button variant="contained">Login</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
