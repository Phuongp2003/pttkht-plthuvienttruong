<template>
	<div class="container p-4 mx-auto">
		<h2 class="mb-6 text-2xl font-bold text-center">Thông tin sách</h2>
		<h3
			class="mb-4 text-xl font-semibold text-center"
			v-if="book">
			{{ book.title }}
		</h3>

		<div
			class="w-full"
			v-if="book">
			<EditBookInfo :book="book" />
		</div>
	</div>
</template>

<script>
	import { ref, onMounted } from 'vue';
	import { useRoute } from 'vue-router';
	import EditBookInfo from '~/components/EditBookInfo.vue';

	export default {
		components: {
			EditBookInfo,
		},
		setup() {
			const route = useRoute();
			const book = ref(null);

			const fetchBook = async (id) => {
				const response = await fetch('/data/book.json');
				const books = await response.json();
				book.value = books.find((b) => b.id === parseInt(id));
			};

			onMounted(() => {
				fetchBook(route.params.id);
			});

			return {
				book,
			};
		},
	};
</script>

<style scoped>
	.container {
		padding: 1rem;
	}
</style>
