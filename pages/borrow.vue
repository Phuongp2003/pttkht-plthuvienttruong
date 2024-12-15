<template>
	<div>
		<h2 class="my-6 text-2xl font-bold text-center">Xác nhận sách mượn</h2>
		<BookListBC
			:books="filteredBooks"
			@confirmBorrow="handleConfirmBorrow" />
	</div>
</template>

<script>
	import BookListBC from '~/components/BookListBorrowConfirm.vue';

	export default {
		components: {
			BookListBC,
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
					fetch('http://localhost:3000/data/bookUB.json').then(
						(res) => res.json()
					)
				);
				this.books = bookData;
			} catch (error) {
				console.error('Error fetching top books:', error);
			}
			this.filteredBooks = this.books;
		},
		methods: {
			handleConfirmBorrow(paginatedBooks) {
				// TODO: Handle the borrow confirmation logic here
				console.log('Books to borrow:', paginatedBooks);

				// Redirect to /borrow-history
				this.$router.push('/borrow-history');
			},
		},
	};
</script>

<style scoped>
	h2 {
		margin-bottom: 1.5rem;
	}
</style>
