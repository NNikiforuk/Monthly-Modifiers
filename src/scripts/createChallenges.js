import { getCurrentChallenges } from "./getCurrentChallenges";

export function createChallenges() {
	async function updateChallenges() {
		const challengesContainer = document.getElementById("challengesContainer");
		const loading = document.getElementById("loading");

		try {
			const challenges = await getCurrentChallenges();

			challenges.map((challenge) => {
				const newAElement = document.createElement("a");
				newAElement.href = `/challenges/${challenge.slug}`;
				newAElement.classList.add("ctaLink");
				newAElement.innerHTML = challenge.title;

				challengesContainer.append(newAElement)
			});

			loading.remove();
		} catch (error) {
			console.error("Error fetching challenge:", error);
			challengesContainer.textContent =
				"Error loading challenge. Please try again later";
		}
	}
	updateChallenges();
}

document.addEventListener("DOMContentLoaded", createChallenges);
