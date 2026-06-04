import { useEffect, useState } from "react";

interface TerminalLine {
	t: "cmd" | "out" | "br";
	text?: string;
	color?: string;
}

const SEQ = [
	{ cmd: "whoami", out: "Thomas Silva de Farias", outColor: "#edeef4" },
	{ cmd: "cat role.txt", out: "FullStack Developer", outColor: "#6366f1" },
	{
		cmd: "ls experience/",
		out: "unimed-sc/  teajudo/  sempre-it/  magalu/",
		outColor: "#8888a0",
	},
	{
		cmd: "git status",
		out: "✓ On branch main — open to new challenges",
		outColor: "#4ade80",
	},
] as const;

function wait(ms: number): Promise<void> {
	return new Promise((r) => setTimeout(r, ms));
}

export function Terminal() {
	const [lines, setLines] = useState<TerminalLine[]>([]);
	const [typingText, setTypingText] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const [isDone, setIsDone] = useState(false);

	useEffect(() => {
		let cancelled = false;

		async function run() {
			await wait(800);

			for (let i = 0; i < SEQ.length; i++) {
				if (cancelled) return;
				const { cmd, out, outColor } = SEQ[i];

				setIsTyping(true);
				for (let j = 0; j <= cmd.length; j++) {
					if (cancelled) return;
					setTypingText(cmd.slice(0, j));
					await wait(38 + Math.random() * 42);
				}

				if (cancelled) return;
				setIsTyping(false);
				setTypingText("");
				setLines((prev) => [...prev, { t: "cmd", text: cmd }]);
				await wait(90);

				if (cancelled) return;
				setLines((prev) => [...prev, { t: "out", text: out, color: outColor }]);

				if (i < SEQ.length - 1) {
					await wait(260);
					if (cancelled) return;
					setLines((prev) => [...prev, { t: "br" }]);
					await wait(90);
				}
			}

			if (!cancelled) {
				await wait(320);
				setIsDone(true);
			}
		}

		run();
		return () => {
			cancelled = true;
		};
	}, []);

	const renderLine = (item: TerminalLine, i: number) => {
		if (item.t === "br") return <div key={i} className="h-1.5" />;
		if (item.t === "cmd")
			return (
				<div key={i} className="flex gap-2.5">
					<span className="text-green select-none shrink-0">$</span>
					<span className="text-text">{item.text}</span>
				</div>
			);
		if (item.t === "out")
			return (
				<div key={i} className="pl-5" style={{ color: item.color }}>
					{item.text}
				</div>
			);
		return null;
	};

	return (
		<div className="bg-[#09090f] border border-border rounded-[14px] overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.55),0_0_0_1px_rgba(99,102,241,0.06)] w-full max-w-115">
			{/* Window chrome */}
			<div className="bg-[#06060c] border-b border-border py-3 px-4 flex items-center gap-2">
				<div className="flex gap-1.75">
					{(["#ff5f57", "#febc2e", "#28c840"] as const).map((c) => (
						<div
							key={c}
							className="size-3 rounded-full"
							style={{ background: c }}
						/>
					))}
				</div>
				<span className="font-mono text-xs text-text-3 flex-1 text-center">
					thomas@portfolio — bash
				</span>
			</div>

			{/* Body */}
			<div className="pt-5 px-6 pb-6.5 font-mono text-[13.5px] leading-[1.65] min-h-52.5">
				{lines.map(renderLine)}

				{isTyping && (
					<div className="flex gap-2.5">
						<span className="text-green select-none">$</span>
						<span className="text-text">{typingText}</span>
						<span className="inline-block w-2 h-3.5 bg-accent align-text-bottom animate-[termBlink_1s_step-end_infinite]" />
					</div>
				)}

				{isDone && !isTyping && (
					<div className="flex gap-2.5 mt-1.5">
						<span className="text-green select-none">$</span>
						<span className="inline-block w-2 h-3.5 bg-accent align-text-bottom animate-[termBlink_1s_step-end_infinite]" />
					</div>
				)}
			</div>
		</div>
	);
}
