import React, { FC } from "react";
import { CircularText } from ".";
import Link from "next/link";

const HireMe: FC = () => {
	return (
		<div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
			<div className="w-48 h-auto flex items-center justify-center relative ">
				<CircularText className="fill-dark animate-[spin_8s_linear_infinite]" />
				<Link
					href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
					className="flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
				>
					Hire Me
				</Link>
			</div>
		</div>
	);
};

export default HireMe;
