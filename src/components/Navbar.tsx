"use client";

import React, { FC } from "react";
import { Logo, CustomLink, GithubIcon, LinkedInIcon } from ".";
import { MotionLink } from "@/types.d";

const Navbar: FC = () => {
	return (
		<>
			<header className="w-full px-32 py-8 font-medium flex items-center justify-between">
				<nav className="flex gap-8">
					<CustomLink href="/" title="Home" />
					<CustomLink href="/about" title="About" />
					<CustomLink href="/projects" title="Projects" />
				</nav>

				<nav className="flex justify-center items-center flex-wrap gap-6">
					<MotionLink
						href={process.env.NEXT_PUBLIC_GITHUB_URL!}
						target="_blank"
						className="w-6"
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
					>
						<GithubIcon />
					</MotionLink>
					<MotionLink
						href={process.env.NEXT_PUBLIC_LINKEDIN_URL!}
						target="_blank"
						className="w-6"
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
					>
						<LinkedInIcon />
					</MotionLink>
				</nav>

				<div className="absolute left-2/4 top-2 -translate-x-1/2">
					<Logo />
				</div>
			</header>
		</>
	);
};

export default Navbar;
