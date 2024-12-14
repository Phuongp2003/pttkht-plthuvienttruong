<template>
	<div class="flex flex-col min-h-screen">
		<Navbar />
		<div class="flex-grow">
			<slot />
		</div>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '~/components/Navbar.vue';
	import Footer from '~/components/Footer.vue';

	export default {
		components: {
			Navbar,
			Footer,
		},
	};
</script>
