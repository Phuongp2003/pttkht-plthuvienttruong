<template>
	<div
		class="container mx-auto book-list-container"
		id="booklist">
		<h2 class="mb-6 text-2xl font-bold">Sách quá hạn</h2>
		<div
			class="grid grid-cols-1 gap-6 mt-4"
			v-if="overdueBooks.length">
			<div
				v-for="book in overdueBooks"
				:key="book.id"
				class="p-4 bg-white rounded shadow-sm shadow-neutral-600 book-card">
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
						<p class="text-gray-700">
							<strong>Ngày mượn:</strong> {{ book.borrowDate }}
						</p>
						<p class="text-gray-700">
							<strong>Ngày đến hạn:</strong> {{ book.returnDate }}
						</p>
						<p class="text-gray-700">
							<strong>Trạng thái:</strong>
							{{ book.status === 'IB' ? 'Chưa trả' : 'Đã trả' }}
						</p>
					</div>
					<div class="flex items-center space-x-2">
						<button
							@click="reportLost(book.id)"
							class="p-2 text-white bg-yellow-500 rounded">
							Báo mất
						</button>
						<button
							@click="extendBorrow(book.id)"
							class="p-2 text-white bg-blue-500 rounded">
							Gia hạn mượn
						</button>
					</div>
				</div>
			</div>
		</div>

		<h2 class="mt-4 mb-6 text-2xl font-bold">Sách đang mượn</h2>
		<div
			class="grid grid-cols-1 gap-6 mt-4"
			v-if="borrowedBooks.length">
			<div
				v-for="book in borrowedBooks"
				:key="book.id"
				class="p-4 bg-white rounded shadow-sm shadow-neutral-600 book-card">
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
						<p class="text-gray-700">
							<strong>Ngày mượn:</strong> {{ book.borrowDate }}
						</p>
						<p class="text-gray-700">
							<strong>Ngày đến hạn:</strong> {{ book.returnDate }}
						</p>
						<p class="text-gray-700">
							<strong>Trạng thái:</strong>
							{{ book.status === 'IB' ? 'Chưa trả' : 'Đã trả' }}
						</p>
					</div>
					<div class="flex items-center space-x-2">
						<button
							@click="reportLost(book.id)"
							class="p-2 text-white bg-yellow-500 rounded">
							Báo mất
						</button>
						<button
							@click="extendBorrow(book.id)"
							class="p-2 text-white bg-blue-500 rounded">
							Gia hạn mượn
						</button>
					</div>
				</div>
			</div>
		</div>

		<h2 class="mt-4 mb-6 text-2xl font-bold">Sách đã trả</h2>
		<div
			class="grid grid-cols-1 gap-6 mt-4"
			v-if="returnedBooks.length">
			<div
				v-for="book in returnedBooks"
				:key="book.id"
				class="p-4 bg-white rounded shadow-sm shadow-neutral-600 book-card">
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
						<p class="text-gray-700">
							<strong>Ngày mượn:</strong> {{ book.borrowDate }}
						</p>
						<p class="text-gray-700">
							<strong>Ngày đến hạn:</strong> {{ book.returnDate }}
						</p>
						<p class="text-gray-700">
							<strong>Trạng thái:</strong>
							{{ book.status === 'IB' ? 'Chưa trả' : 'Đã trả' }}
						</p>
					</div>
				</div>
			</div>
		</div>

		<Pagination />
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
				overdueBooks: [],
				borrowedBooks: [],
				returnedBooks: [],
			};
		},
		mounted() {
			this.categorizeBooks();
		},
		watch: {
			books: {
				handler() {
					this.categorizeBooks();
				},
				immediate: true,
				deep: true,
			},
		},
		methods: {
			categorizeBooks() {
				const currentDate = new Date().toISOString().split('T')[0];
				this.overdueBooks = this.books.filter(
					(book) =>
						book.status === 'IB' && book.returnDate < currentDate
				);
				this.borrowedBooks = this.books.filter(
					(book) =>
						book.status === 'IB' && book.returnDate >= currentDate
				);
				this.returnedBooks = this.books.filter(
					(book) => book.status === 'IR'
				);
			},
			reportLost(bookId) {
				// Redirect to /lost-report with the book ID
				this.$router.push({ path: '/lost-report', query: { bookId } });
			},
			extendBorrow(bookId) {
				// TODO: Implement the logic to extend the borrow period
				console.log('Extend borrow for book ID:', bookId);
			},
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
	.book-card:hover {
		transform: translateY(-5px);
	}
</style>
