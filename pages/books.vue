<template>
	<div>
		<h2 class="my-6 text-2xl font-bold text-center">Tìm sách</h2>
		<BookSearch @filter="applyFilter" />
		<BookList :books="filteredBooks" />
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
			};
		},
		async created() {
			try {
				const response = await fetch('/data/book.json');
				this.books = await response.json();
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
