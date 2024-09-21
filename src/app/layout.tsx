import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "MC Manager",
	description: "Minecraft server dashboard",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
			</head>
			<body>{children}</body>
		</html>
	);
}
