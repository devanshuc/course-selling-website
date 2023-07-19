import { TextField, Card, Typography, Button } from "@mui/material";

const Signup = () => {
	return (
		<div>
			<div
				style={{
					paddingTop: 150,
					marginBottom: 10,
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Typography variant={"h6"}>Welcome to Udemy. Sign up below</Typography>
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Card variant="outlined" style={{ width: 400, padding: 20 }}>
					<Typography paragraph>
						<TextField
							id="outlined-basic"
							label="Full Name"
							variant="outlined"
							fullWidth={true}
						/>
					</Typography>
					<Typography paragraph>
						<TextField
							id="outlined-basic"
							label="Email Address"
							variant="outlined"
							fullWidth={true}
						/>
					</Typography>
					<Typography paragraph>
						<TextField
							id="outlined-basic"
							label="Password"
							variant="outlined"
							fullWidth={true}
						/>
					</Typography>
					<Button size="large" variant="contained" fullWidth>
						Sign Up
					</Button>
				</Card>
			</div>
		</div>
	);
};

export default Signup;
