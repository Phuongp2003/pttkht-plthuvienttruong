<template>
	<div
		class="container mx-auto book-list-container"
		id="booklist">
		<div
			class="grid grid-cols-1 gap-6 mt-4"
			v-if="paginatedBooks">
			<div
				v-for="book in paginatedBooks"
				:key="book.id"
				class="p-4 bg-white rounded shadow-sm book-card shadow-neutral-600">
				<div class="flex items-center">
					<img
						:src="book.cover"
						:alt="book.title"
						class="object-cover w-24 h-24 mb-4 rounded" />
					<div class="flex-grow ml-4">
						<h3 class="mb-2 text-lg font-semibold">
							{{ book.title }}
						</h3>
						<p class="text-gray-700">{{ book.author }}</p>
					</div>
					<div class="flex items-center space-x-2">
						<button
							@click="deleteBook(book.id)"
							class="p-2 text-white bg-red-500 rounded">
							Delete
						</button>
						<div class="flex items-center space-x-1">
							<button
								@click="decrementBorrowCount(book)"
								class="p-2 text-black bg-gray-300 rounded">
								-
							</button>
							<input
								type="number"
								v-model.number="book.borrowCount"
								class="w-16 p-2 border rounded" />
							<button
								@click="incrementBorrowCount(book)"
								class="p-2 text-black bg-gray-300 rounded">
								+
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Pagination class="mt-4" />
		<div class="flex justify-center mt-6">
			<button
				class="px-4 py-2 text-white bg-blue-500 rounded"
				@click="confirmBorrow">
				Xác nhận mượn
			</button>
		</div>
	</div>
</template>

<script>
	import Pagination from './Pagination.vue';

	export default {
		components: {
			Pagination,
		},
		props: {
			books: {
				type: Array,
				required: true,
			},
		},
		data() {
			return {
				page: {
					current: 1,
					max: 1,
				},
				paginatedBooks: [],
			};
		},
		mounted() {
			this.page.max = Math.ceil(this.books.length / 18);
			this.page.current = 1;
			this.updatePaginatedBooks();
		},
		watch: {
			books: {
				handler() {
					this.page.max = Math.ceil(this.books.length / 18);
					this.page.current = 1;
					this.updatePaginatedBooks();
				},
				immediate: true,
				deep: true,
			},
			page: {
				handler() {
					this.updatePaginatedBooks();
				},
				deep: true,
			},
		},
		methods: {
			updatePaginatedBooks() {
				const start = (this.page.current - 1) * 18;
				const end = start + 18;
				this.paginatedBooks = this.books.slice(start, end);
			},
			gotoPage(pageNumber) {
				this.page.current = pageNumber;
				this.updatePaginatedBooks();
				this.gotoTopList();
			},
			gotoNxtPage() {
				if (this.page.current < this.page.max) {
					this.page.current++;
				}
				this.updatePaginatedBooks();
				this.gotoTopList();
			},
			gotoPrePage() {
				if (this.page.current > 1) {
					this.page.current--;
				}
				this.updatePaginatedBooks();
				this.gotoTopList();
			},
			gotoTopList() {
				document
					.getElementById('booklist')
					.scrollIntoView({ behavior: 'smooth' });
			},
			deleteBook(bookId) {
				// TODO: Implement actual delete logic to remove the book from the current array
				this.paginatedBooks = this.paginatedBooks.filter(
					(book) => book.id !== bookId
				);
			},
			incrementBorrowCount(book) {
				if (!book.borrowCount) {
					book.borrowCount = 1;
				} else {
					book.borrowCount++;
				}
			},
			decrementBorrowCount(book) {
				if (!book.borrowCount || book.borrowCount <= 1) {
					book.borrowCount = 1;
				} else {
					book.borrowCount--;
				}
			},
			confirmBorrow() {
				this.$emit('confirmBorrow', this.paginatedBooks);
			},
		},
		provide() {
			return {
				page: ref(this.page),
				gotoPage: (pageNumber) => this.gotoPage(pageNumber),
				gotoNxtPage: () => this.gotoNxtPage(),
				gotoPrePage: () => this.gotoPrePage(),
			};
		},
	};
</script>

<style scoped>
	.book-list-container {
		padding: 1rem;
	}
	.book-card {
		transition: transform 0.2s;
	}
</style>
