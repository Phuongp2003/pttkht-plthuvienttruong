<template>
	<div>
		<h2 class="my-6 text-2xl font-bold text-center">Tìm sách</h2>
		<BookSearch @filter="applyFilter" />
		<ImportBookList :books="filteredBooks" />
	</div>
</template>

<script>
	import BookSearch from '~/components/BookSearch.vue';
	import ImportBookList from '~/components/ImportBookList.vue';

	export default {
		components: {
			BookSearch,
			ImportBookList,
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
					fetch('http://localhost:3000/data/bookS.json').then((res) =>
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
