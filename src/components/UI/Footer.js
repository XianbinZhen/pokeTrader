import React from 'react';
import { FaGithub, FaHome, FaRegEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="flex bg-blue-900 text-white p-2 justify-between items-center">
			<p className="mx-4">&copy; Xianbin Zhen 2020</p>
			<div className="flex justify-center items-center mx-4">
				<a
					className="p-2  text-xl"
					rel="noopener noreferrer"
					href="https://xianbinzhen.github.io/mypage/index.html"
					target="_blank"
				>
					<FaHome />
				</a>
				<a className="p-2  text-xl" href="mailto:xianbin.zhen001@umb.edu">
					<FaRegEnvelope />
				</a>
				<a
					className="p-2  text-xl"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/xianbin-zhen-93ba311a1/"
					target="_blank"
				>
					<FaLinkedin />
				</a>
				<a
					className="p-2  text-xl"
					rel="noopener noreferrer"
					href="https://github.com/XianbinZhen"
					target="_blank"
				>
					<FaGithub />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
