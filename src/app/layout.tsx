import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Burak Yıldırım",
	description: "Burak Yıldırım's portfolio website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.className} flex flex-col min-h-screen`}
			>
				<Navbar />
				<div className="flex-1 flex flex-col">{children}</div>
			</body>
		</html>
	);
}
