"use client";

import React, { FC } from "react";
import { MotionLink } from "@/types.d";

const Logo: FC = () => {
	return (
		<div className="flex items-center justify-center mt-2">
			<MotionLink
				href="/"
				className="w-16 h-16 flex justify-center items-center bg-dark text-light rounded-full font-bold text-2xl"
				whileHover={{
					backgroundColor: [
						"#1b1b1b",
						"rgba(131,58,180,1)",
						"rgba(253,29,29,1)",
						"rgba(252,176,69,1)",
						"rgba(131,58,180,1)",
						"#1b1b1b",
					],
					transition: {
						duration: 1,
						repeat: Infinity,
						repeatType: "reverse",
					},
				}}
			>
				BY
			</MotionLink>
		</div>
	);
};

export default Logo;
