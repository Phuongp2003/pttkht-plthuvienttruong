<template>
	<div>
		<banner />
		<prefer-book />
		<coop />
	</div>
</template>

<script>
	import Banner from '~/components/HomePage/Banner.vue';
	import Coop from '~/components/HomePage/Coop.vue';
	import PreferBook from '~/components/HomePage/PreferBook.vue';
	export default {
		components: { Banner, PreferBook, Coop },
		layout: 'default',
	};
</script>
