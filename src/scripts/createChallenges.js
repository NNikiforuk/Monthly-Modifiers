import { getCurrentChallenges } from "./getCurrentChallenges";

export function createChallenges() {
	async function updateChallenges() {
		const firstChallenge = document.getElementById("firstChallenge");
		const secondChallenge = document.getElementById("secondChallenge");
		const thirdChallenge = document.getElementById("thirdChallenge");
		const loading = document.getElementById("loading");

		try {
			const challenges = await getCurrentChallenges();

			challenges.map((challenge, index) => {
				const newAElement = document.createElement("a");
				newAElement.href = `/challenges/${challenge.slug}`;
				newAElement.classList.add("ctaLink");
				newAElement.innerHTML = challenge.title;

				if (index === 0) {
					firstChallenge.append(newAElement);
				} else if (index === 1) {
					secondChallenge.append(newAElement);
				} else {
					thirdChallenge.append(newAElement);
				}
			});

			loading.remove()

		} catch (error) {
			console.error("Error fetching challenge:", error);
			challengeElement.innerHTML = `<p>Error loading challenge. Please try again later.</p>`;
		}
	}
	updateChallenges();
}

document.addEventListener("DOMContentLoaded", createChallenges);
