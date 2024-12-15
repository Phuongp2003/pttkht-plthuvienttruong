<template>
	<div>
		<h2 class="my-6 text-2xl font-bold text-center">Tìm sách</h2>
		<LoadingTransition v-if="loading" />
		<div v-else>
			<BookSearch @filter="applyFilter" />
			<BookList :books="filteredBooks" />
		</div>
	</div>
</template>

<script>
	import BookSearch from '~/components/BookSearch.vue';
	import BookList from '~/components/BookList.vue';

	export default {
		components: {
			BookSearch,
			BookList,
		},
		data() {
			return {
				books: null,
				filteredBooks: [],
				loading: false,
			};
		},
		async created() {
			try {
				const {
					data: bookData,
					pending: loading,
					error,
				} = await useAsyncData('books', () =>
					fetch('/data/book.json').then((res) =>
						res.json()
					)
				);
				this.loading = loading;
				this.books = bookData;
			} catch (error) {
				console.error('Error fetching top books:', error);
			}
			this.filteredBooks = this.books;
		},
		methods: {
			applyFilter(filter) {
				// Implement filter logic here
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
