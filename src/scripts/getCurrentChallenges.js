import { challenges } from "../data/challenges";
import { XORShift } from "random-seedable";

const MAX_CHALLENGES = 3;

export async function getCurrentChallenges() {
	const url = `https://beacon.nist.gov/beacon/2.0/pulse/last`;

	try {
		const response = await fetch(url);
		const data = await response.json();
		const randomValue = data.pulse.listValues.find(
			(item) => item.type === "month"
		).value;

		const seed = BigInt("0x" + randomValue);
		const randomNumberGenerator = new XORShift(seed);
		let numberOfChallenges = 1 + (randomNumberGenerator.int() % MAX_CHALLENGES);

		let currentChallengesList = [...challenges];
		let newChallenges = [];

		for (let i = 0; i < numberOfChallenges; i++) {
			let challenge =
				randomNumberGenerator.int() % currentChallengesList.length;

			const newChallenge = currentChallengesList.splice(challenge, 1)[0];

			if (newChallenge.collidesWith) {
				newChallenge.collidesWith.forEach((slug) => {
					newChallenges = newChallenges.filter(
						(challenge) => challenge.slug !== slug
					);
				});
			}

			newChallenges.push(newChallenge);
		}

		return newChallenges;
	} catch (error) {
		console.error("Error fetching NIST Randomness Beacon:", error);
		return {
			slug: "error",
			title: "Error",
			description: "Could not fetch challenge. Please try again later",
			FAQ: [
				{
					title: "What should I do if I see this error?",
					answer:
						"Refresh the page or try again later. If the problem persists, contact support",
				},
			],
		};
	}
}

// getCurrentChallenges()
