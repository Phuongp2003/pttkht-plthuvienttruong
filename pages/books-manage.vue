<template>
	<div>
		<h2 class="my-6 text-2xl font-bold text-center">Tìm sách</h2>
		<BookSearch @filter="applyFilter" />
		<BookListManage
			:books="filteredBooks"
			v-if="filteredBooks" />
	</div>
</template>

<script>
	import BookSearch from '~/components/BookSearch.vue';
	import BookListManage from '~/components/BookListManage.vue';

	export default {
		components: {
			BookSearch,
			BookListManage,
		},
		data() {
			return {
				books: null,
				filteredBooks: [],
			};
		},
		async created() {
			try {
				const { data: bookData } = await useAsyncData('books', () =>
					fetch('http://localhost:3000/data/book.json').then((res) =>
						res.json()
					)
				);
				this.books = bookData;
			} catch (error) {
				console.error('Error fetching top books:', error);
			}
			this.filteredBooks = this.books;
		},
		methods: {
			applyFilter(filter) {
				this.filteredBooks = this.books.filter((book) => {
					return (
						book.title.includes(filter.searchQuery) &&
						book.author.includes(filter.publisher) &&
						(filter.bookType === 'all' ||
							book.type === filter.bookType) &&
						(filter.edition === '' ||
							book.edition === filter.edition)
					);
				});
			},
		},
	};
</script>

<style scoped>
	h2 {
		margin-bottom: 1.5rem;
	}
</style>
