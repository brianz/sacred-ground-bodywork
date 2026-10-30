export type Service = {
	slug: string;
	name: string;
	description: string;
	pricing: { length: string; price: string }[];
	where: ("Home studio" | "Mobile")[];
};

export const services: Service[] = [
	{
		slug: "swedish",
		name: "Swedish Massage",
		description:
			"Long, smooth strokes to ease everyday tension, improve circulation, and help your whole body relax. A great place to start if you're new to massage.",
		pricing: [
			{ length: "60 min", price: "$100" },
			{ length: "90 min", price: "$140" },
		],
		where: ["Home studio", "Mobile"],
	},
	{
		slug: "deep-tissue",
		name: "Deep Tissue",
		description:
			"Firmer, focused pressure that works into the deeper layers of muscle. Good for chronic tightness, stiff shoulders and backs, and bodies that work hard for a living.",
		pricing: [
			{ length: "60 min", price: "$110" },
			{ length: "90 min", price: "$150" },
		],
		where: ["Home studio", "Mobile"],
	},
	{
		slug: "sports",
		name: "Sports Massage",
		description:
			"Targeted work for active bodies — before an event, after one, or as part of regular training. Helps with recovery, flexibility, and keeping you moving.",
		pricing: [
			{ length: "60 min", price: "$110" },
			{ length: "90 min", price: "$150" },
		],
		where: ["Home studio", "Mobile"],
	},
	{
		slug: "hot-stone",
		name: "Hot Stone Massage",
		description:
			"Warm basalt stones combined with massage strokes to melt away tension and bring a deeper sense of calm. Especially good for cold Colorado days.",
		pricing: [{ length: "75 min", price: "$135" }],
		where: ["Home studio"],
	},
	{
		slug: "cupping",
		name: "Cupping",
		description:
			"Suction cups lift and release tissue to improve blood flow and loosen areas that feel stuck. Often paired with Swedish or deep tissue work.",
		pricing: [{ length: "Add-on, 15 min", price: "$25" }],
		where: ["Home studio", "Mobile"],
	},
	{
		slug: "thai",
		name: "Thai Massage",
		description:
			"A clothed, mat-based massage that combines assisted stretching with rhythmic pressure along the body's energy lines. Leaves you loose and lengthened.",
		pricing: [{ length: "90 min", price: "$145" }],
		where: ["Home studio"],
	},
	{
		slug: "myofascial-release",
		name: "Myofascial Release",
		description:
			"Slow, sustained pressure on the fascia — the connective tissue wrapped around your muscles — to release restrictions and ease pain that doesn't respond to other work.",
		pricing: [
			{ length: "60 min", price: "$110" },
			{ length: "90 min", price: "$150" },
		],
		where: ["Home studio", "Mobile"],
	},
	{
		slug: "trigger-point",
		name: "Trigger Point Therapy",
		description:
			"Direct pressure on specific tight spots that refer pain elsewhere in the body. Precise, focused work for a stubborn knot or recurring ache.",
		pricing: [{ length: "60 min", price: "$110" }],
		where: ["Home studio", "Mobile"],
	},
];
