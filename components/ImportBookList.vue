<template>
	<div
		class="container mx-auto book-list-container"
		id="booklist">
		<div v-if="!selectedPublisher">
			<h2 class="my-6 text-2xl font-bold text-center">
				Chọn nhà phát hành
			</h2>
			<div
				class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
				<div
					v-for="(books, publisher) in books"
					:key="publisher"
					class="p-4 bg-white rounded shadow cursor-pointer hover:bg-gray-100"
					@click="selectPublisher(publisher)">
					<h3 class="text-lg font-semibold">{{ publisher }}</h3>
					<p class="text-gray-700">Số sách: {{ books.length }}</p>
				</div>
			</div>
		</div>
		<div v-else>
			<button
				@click="deselectPublisher"
				class="p-2 mb-4 text-white bg-blue-500 rounded">
				Quay lại
			</button>
			<h2 class="my-6 text-2xl font-bold text-center">
				{{ selectedPublisher }}
			</h2>
			<div class="p-4 mb-4 bg-gray-100 rounded shadow">
				<h3 class="text-lg font-semibold">Thông tin Nhà Xuất Bản</h3>
				<p class="text-gray-700">
					Số sách:
					{{ books[selectedPublisher].length }}
				</p>
				<button
					@click="addAllBooksToWarehouse"
					class="p-2 mt-2 text-white bg-green-500 rounded">
					Thêm tất cả sách vào kho
				</button>
			</div>
			<div
				class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-5">
				<div
					v-for="book in books[selectedPublisher]"
					:key="book.id"
					class="relative p-4 bg-white rounded shadow book-card">
					<img
						:src="book.cover"
						:alt="book.title"
						class="object-cover w-full h-48 mb-4 rounded" />
					<h3 class="mb-2 text-lg font-semibold">
						{{ book.title }}
					</h3>
					<p class="text-gray-700">{{ book.author }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			books: { type: Array, required: true },
		},
		data() {
			return {
				selectedPublisher: null,
				loading: false,
			};
		},
		async created() {},
		methods: {
			selectPublisher(publisher) {
				this.selectedPublisher = publisher;
			},
			deselectPublisher() {
				this.selectedPublisher = null;
			},
			addAllBooksToWarehouse() {
				this.$emit('add-all-books', this.books[this.selectedPublisher]);
				this.$delete(this.books, this.selectedPublisher);
				this.selectedPublisher = null;
			},
		},
	};
</script>

<style scoped>
	.book-list-container {
		padding: 1rem;
	}
	.book-card {
		position: relative;
		overflow: hidden;
	}
</style>
