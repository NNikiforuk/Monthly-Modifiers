export const challenges = [
	{
		title: "NO SUGAR",
		slug: "no-sugar",
		description: "Give up sugar for a month. Be a little healthier this month and avoid sweet stuff.",
		FAQ: [
			{
				title: "Sweeteners?",
				answer: "No",
			},
			{
				title: "Are natural sugars in f.e. fruits allowed?",
				answer: "Yes - but only whole fruits, no juices",
			},
		],
	},
	{
		title: "ONLY WATER",
		slug: "only-water",
		collidesWith: ["no-soda", "no-coffee", "no-alcohol"],
		description: "Drink only water this month. No soda, no tea, no coffee, no nothing. Just plain water. Mineral and carbonated is fine though.",
		FAQ: [
			{
				title: "What about herbal tea?",
				answer: "Only if you're sick and using it as a remedy",
			},
		],
	},
	{
		slug: "no-cheese",
		title: "NO CHEESE",
		description: "Eliminate all cheese from your diet",
		FAQ: [
			{
				title: "Does this include cheese flavoring?",
				answer: "Yes, avoid all cheese and cheese-flavored products",
			},
		],
	},
	{
		slug: "no-meat",
		title: "NO MEAT",
		description: "Adopt a vegetarian diet for a month",
		FAQ: [
			{
				title: "Can I eat eggs and dairy?",
				answer: "Yeah, sure!",
			},
			{
				title: "Fish?",
				answer: "No",
			},
		],
	},
	{
		slug: "no-coffee",
		title: "NO COFFEE",
		collidesWith: ["only-water"],
		description: "Eliminate all (major) sources of caffeine. No coffee, no caffeine pills, no energy drinks. And I know this is a little confusing - but tea is fine.",
	},
	{
		slug: "no-alcohol",
		title: "NO ALCOHOL",
		collidesWith: ["only-water"],
		description: "No alcohol of any kind",
		FAQ: [
			{
				title: "What about cooking with alcohol?",
				answer: "Avoid dishes cooked with alcohol as well",
			},
			{
				title: "Sweets with alcohol?",
				answer: "Nope",
			},
			{
				title: "Kombucha",
				answer: "If Kombucha was allowed then liqour chocolates would have to be too. So no.",
			}
		],
	},
	{
		slug: "no-fast-food",
		title: "NO FAST FOOD",
		description: "Avoid all fast food restaurants and takeaways. No burgers, no fries",
	},
	{
		slug: "no-soda",
		title: "NO SODA",
		collidesWith: ["only-water"],
		description: "Eliminate all carbonated beverages",
		FAQ: [
			{
				title: "Is sparkling water allowed?",
				answer: "No, avoid all carbonated drinks, including sparkling water",
			},
		],
	},
	{
		slug: "no-tv",
		title: "NO TV",
		description: "No watching TV or streaming services",
	},
	{
		slug: "no-social-media",
		title: "NO SOCIAL MEDIA",
		description: "Stay off Facebook, Instagram, X/Twitter, TikTok, Reddit, etc. for a month",
		FAQ: [
			{
				title: "Youtube?",
				answer: "Youtube is ok",
			}
		],
	},
	{
		slug: "no-video-games",
		title: "NO VIDEO GAMES",
		description: "Abstain from playing video games",
		FAQ: [
			{
				title: "Does this include mobile games, Nintendo Switch etc?",
				answer: "Yes, avoid all types of video games",
			},
			{
				title: "I'm a streamer, can I still stream?",
				answer: "Yes, but you can't play video games on the stream. Stare blankly at the camera or something. You'll figure it out ;)",
			},
		],
	},
	{
		slug: "no-youtube",
		title: "NO YOUTUBE",
		description: "Avoid watching any YouTube videos",
		FAQ: [
			{
				title: "What about educational content on YouTube?",
				answer: "Find alternative sources for educational content",
			},
		],
	},
	{
		slug: "no-sitting",
		title: "NO SITTING",
		description: "No sitting - stand or lay down instead.",
		FAQ: [
			{
				title: "Driving a car?",
				answer: "Yes, but ideally take public transport or walk",
			},
			{
				title: "In an airplane?",
				answer: "Yeah, you can sit in an airplane",
			},
			{
				title: "Cross-legged on the floor?",
				answer: "No",
			},
			{
				title: "On the toilet?",
				answer: "You can sit on the toilet - but be quick about your business!",
			}
		],
	},
	{
		slug: "cold-showers-only",
		title: "COLD SHOWERS",
		description: "Take only cold showers",
		FAQ: [
			{
				title: "What temperature is considered 'cold'?",
				answer: "Use the coldest setting acceptable for you",
			},
		],
	},
	{
		slug: "no-elevators",
		title: "NO ELEVATORS",
		description: "Use stairs instead of elevators or escalators",
		FAQ: [
			{
				title: "What about very tall buildings?",
				answer: "Plan extra time for vertical travel",
			},
			{
				title: "Building with no stairs?",
				answer: "Last resort - ideally avoid such buildings",
			},
			{
				title: "Travelling for work and coleagues are taking the elevator",
				answer: "Tough luck, take the stairs. Claim you're afraid of elevators, idk. figure it out.",
			},
		],
	},
	{
		slug: "no-online-shopping",
		title: "NO ONLINE SHOPPING",
		description: "Abstain from all forms of online shopping",
		FAQ: [
			{
				title: "Does this include digital products?",
				answer: "Yes, avoid all online purchases",
			},
			{
				title: "What about groceries?",
				answer: "No",
			},
			{
				title: "But I really, really wanna buy X that just came out!",
				answer: "No",
			},
			{
				title: "Preorders that release next month?",
				answer: "Nice try - no",
			},
		],
	},
	{
		slug: "no-makeup",
		title: "NO MAKEUP",
		description: "Go without wearing any makeup",
		FAQ: [
			{
				title: "Does this include skincare products?",
				answer: "No, skincare products are allowed",
			},
		],
	}
];
