<template>
	<div>
		<h2 class="my-6 text-2xl font-bold text-center">Lịch sử mượn sách</h2>
		<LoadingTransition v-if="loading" />
		<div v-else>
			<BookSearch @filter="applyFilter" />
			<BookListBH :books="filteredBooks" />
		</div>
	</div>
</template>

<script>
	import BookSearch from '~/components/BookSearch.vue';
	import BookListBH from '~/components/BookListBorrowHistory.vue';

	export default {
		components: {
			BookSearch,
			BookListBH,
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
					fetch('/data/bookUBH.json').then(
						(res) => res.json()
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
