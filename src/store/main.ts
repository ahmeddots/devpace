import { ref } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore(
	"main",
	() => {
		let darkTheme = ref(true);

		let deleteButtons = ref(false);

		let twentyFourHours = ref(true);

		let apiText = ref<"phrase" | "facts">("facts");
		let getApiText = async () => {
			switch (apiText.value) {
				case "phrase": {
					return fetch("https://corporatebs-generator.sameerkumar.website/")
						.then((res) => res.json())
						.then((json) => json.phrase);
				}
				case "facts": {
					return fetch("https://uselessfacts.jsph.pl/random.json?language=en")
						.then((res) => res.json())
						.then((json) => json.text);
				}
			}
		};

		return {
			apiText,
			getApiText,
			darkTheme,
			deleteButtons,
			twentyFourHours,
		};
	},
	{ persist: true }
);
