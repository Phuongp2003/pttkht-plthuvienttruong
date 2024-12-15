<template>
	<div class="container p-4 mx-auto">
		<h2 class="mb-6 text-2xl font-bold text-center">Thông tin sách</h2>
		<h3
			class="mb-4 text-xl font-semibold text-center"
			v-if="book">
			{{ book.title }}
		</h3>
		<div
			class="grid grid-cols-1 gap-6 lg:grid-cols-10"
			v-if="book && refBooks">
			<div class="lg:col-span-7">
				<BookInfo :book="book" />
			</div>
			<div class="lg:col-span-3">
				<RefBooks :books="refBooks" />
			</div>
		</div>
	</div>
</template>

<script>
	import { ref, onMounted } from 'vue';
	import { useRoute } from 'vue-router';
	import BookInfo from '~/components/EditBookInfo.vue';
	import RefBooks from '~/components/RefBooks.vue';

	export default {
		components: {
			BookInfo,
			RefBooks,
		},
		setup() {
			const route = useRoute();
			const book = ref(null);
			const refBooks = ref([]);

			const fetchBook = async (id) => {
				const response = await fetch('/data/book.json');
				const books = await response.json();
				book.value = books.find((b) => b.id === parseInt(id));
				refBooks.value = books
					.filter((b) => b.id !== parseInt(id))
					.slice(0, 3); // Example: get 5 reference books
			};

			onMounted(() => {
				fetchBook(route.params.id);
			});

			return {
				book,
				refBooks,
			};
		},
	};
</script>

<style scoped>
	.container {
		padding: 1rem;
	}
</style>
