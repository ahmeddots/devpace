<script setup lang="ts">
	import { NText, NSpace, NButton } from "naive-ui";

	import { usePomodoroStore } from "@/store/pomodoro";
	import { makeDuration } from "@/store/utils";
	const store = usePomodoroStore();
</script>

<template>
	<!-- Session Specifier -->
	<NText v-if="store.current.status === 'ready'">
		Your session will be made up of
		<b>{{ store.config.rounds.at }}</b>
		rounds of
		<b>{{ store.config.focus.at }}</b>
		minutes focus periods, with
		<b>{{ store.config.break.at }}</b>
		minute break(s) in-between, and a final rest period of
		<b>{{ store.config.rest.at }}</b>
		minutes.
	</NText>

	<!-- Session Stage Highlighter (only shows on run) -->
	<NSpace v-else vertical>
		<NText>
			Session in a
			{{ store.current.stages[store.current.at.index].type }} stage,
			{{
				store.current.at.time === makeDuration()
					? "waiting"
					: store.current.status
			}}.
		</NText>
		<NSpace align="center">
			<NButton
				v-for="(stage, id) in store.current.stages"
				size="small"
				strong
				secondary
				:type="id == store.current.at.index ? 'primary' : 'default'"
			>
				{{ stage.type }}
			</NButton>
		</NSpace>
	</NSpace>
</template>
