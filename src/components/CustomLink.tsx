"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CustomLinkProps = {
	href: string;
	title: string;
	className?: string;
};

const CustomLink: FC<CustomLinkProps> = ({ href, title, className }) => {
	const pathname = usePathname();
	const [isSelected, setIsSelected] = useState<boolean>(pathname === href);
	const [isHover, setIsHover] = useState<boolean>(isSelected);
	const variants = {
		hidden: {
			width: "0%",
			marginLeft: "0%",
		},
		visible: {
			width: "100%",
			marginLeft: "0%",
		},
		exit: {
			width: "0%",
			marginLeft: "100%",
		},
	};

	useEffect(() => {
		setIsSelected(pathname === href);
		setIsHover(pathname === href);
	}, [pathname]);

	return (
		<Link
			href={href}
			className={`${className ?? ""} relative`}
			onMouseEnter={() => {
				!isSelected && setIsHover(true);
			}}
			onMouseLeave={() => {
				!isSelected && setIsHover(false);
			}}
		>
			{title}

			<AnimatePresence>
				{isHover && (
					<motion.span
						className="absolute h-px w-full bg-dark left-0 -bottom-2 pointer-events-none"
						variants={variants}
						initial={isSelected ? "visible" : "hidden"}
						animate="visible"
						exit="exit"
					>
						&nbsp;
					</motion.span>
				)}
			</AnimatePresence>
		</Link>
	);
};

export default CustomLink;
