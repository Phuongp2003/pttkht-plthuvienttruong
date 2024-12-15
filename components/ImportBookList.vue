<template>
	<div
		class="container mx-auto book-list-container"
		id="booklist">
		<LoadingTransition v-if="loading" />
		<div v-else>
			<div v-if="!selectedPublisher">
				<h2 class="my-6 text-2xl font-bold text-center">
					Chọn Nhà Xuất Bản
				</h2>
				<div
					class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
					<div
						v-for="(books, publisher) in booksByPublisher"
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
					<h3 class="text-lg font-semibold">
						Thông tin Nhà Xuất Bản
					</h3>
					<p class="text-gray-700">
						Số sách:
						{{ booksByPublisher[selectedPublisher].length }}
					</p>
					<button
						@click="addAllBooksToWarehouse"
						class="p-2 mt-2 text-white bg-green-500 rounded">
						Thêm tất cả sách vào kho
					</button>
				</div>
				<div
					class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-5">
					<NuxtLink
						v-for="book in booksByPublisher[selectedPublisher]"
						:key="book.id"
						:to="`${book.link}/edit`"
						class="relative p-4 bg-white rounded shadow book-card">
						<img
							:src="book.cover"
							:alt="book.title"
							class="object-cover w-full h-48 mb-4 rounded" />
						<h3 class="mb-2 text-lg font-semibold">
							{{ book.title }}
						</h3>
						<p class="text-gray-700">{{ book.author }}</p>
						<div
							class="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white transition-opacity duration-300 bg-blue-500 bg-opacity-75 rounded opacity-0 hover:opacity-100">
							Sửa thông tin sách
						</div>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				booksByPublisher: {},
				selectedPublisher: null,
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
					fetch('/data/books.json').then((res) => res.json())
				);
				this.loading = loading;
				this.booksByPublisher = bookData;
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		},
		methods: {
			selectPublisher(publisher) {
				this.selectedPublisher = publisher;
			},
			deselectPublisher() {
				this.selectedPublisher = null;
			},
			addAllBooksToWarehouse() {
				this.$emit(
					'add-all-books',
					this.booksByPublisher[this.selectedPublisher]
				);
				this.$delete(this.booksByPublisher, this.selectedPublisher);
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
	.book-card:hover .hover-box {
		opacity: 1;
	}
</style>
