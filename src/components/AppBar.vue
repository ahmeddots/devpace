<script lang="ts" setup>
	import { NButton, NGradientText, NIcon } from "naive-ui";
	import { ArrowCircleRightRound, AccessibilityFilled } from "@vicons/material";
	import { ref } from "vue";

	let text = ref("Take your time, you'll make something great.");
</script>

<template>
	<div style="display: flex; flex-direction: column">
		<!-- top -->
		<div>{{ text }}</div>

		<!-- bottom -->
		<div style="display: flex; gap: 1rem; align-items: center">
			<!-- logo -->
			<NGradientText :size="28">devpace</NGradientText>

			<!-- options -->
			<NButton circle>
				<template #icon>
					<NIcon><ArrowCircleRightRound /></NIcon>
				</template>
			</NButton>
			<NButton circle>
				<template #icon>
					<NIcon><AccessibilityFilled /></NIcon>
				</template>
			</NButton>
		</div>
	</div>
</template>