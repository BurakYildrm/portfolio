"use client";

import { AnimatedText } from "@/components";
import HireMe from "@/components/HireMe";
import { MotionLink } from "@/types.d";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import lightBulb from "/public/svgs/light-bulb.svg";
import heroPic from "/public/images/hero-pic.webp";

export default function Home() {
	return (
		<>
			<main className="flex flex-1 items-center h-full text-dark px-32">
				<div className="flex items-center justify-between w-full">
					<div className="w-1/2">
						<Image
							src={heroPic}
							alt="Profile picture"
							className="w-full h-auto"
						/>
					</div>
					<div className="w-1/2 flex flex-col items-center justify-center">
						<AnimatedText
							text="Turning Vision Into Reality With Code And Design."
							className="text-6xl text-left"
							staggerDelay={0.05}
						/>
						<p className="my-4 text-base font-medium">
							As a skilled full-stack developer, I am dedicated to
							turning ideas into innovative web applications.
							Explore my latest projects and articles, showcasing
							my expertise in React.js and web development.
						</p>
						<div className="flex justify-start items-center mt-2 w-full gap-4">
							<MotionLink
								href="/Burak_Yıldırım_Resume.pdf"
								target="_blank"
								className="flex justify-center items-center bg-dark text-light py-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark gap-1"
								download={true}
								whileTap={{ scale: 0.95 }}
							>
								Resume <HiOutlineExternalLink />
							</MotionLink>
							<Link
								href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
								target="_blank"
								className="text-lg font-medium capitalize text-dark underline"
							>
								Contact
							</Link>
						</div>
					</div>
				</div>
			</main>

			<HireMe />

			<div className="absolute right-8 bottom-8 inline-block w-24">
				<Image
					src={lightBulb}
					alt="Light bulb"
					className="w-full h-auto"
				/>
			</div>
		</>
	);
}
