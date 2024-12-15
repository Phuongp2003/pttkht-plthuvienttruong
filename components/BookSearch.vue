<template>
	<div
		class="container p-4 mx-auto bg-white rounded shadow-sm shadow-neutral-600 search-bar">
		<div class="flex items-center space-x-4">
			<input
				type="text"
				v-model="searchQuery"
				@input="debouncedSearch"
				placeholder="Nhập thông tin sách..."
				class="flex-grow p-2 border rounded" />
			<button
				@click="toggleFilter"
				class="p-2 text-white bg-blue-500 rounded">
				{{ !filterOpen ? 'Mở bộ lọc' : 'Đóng bộ lọc' }}
			</button>
			<button
				@click="searchBooks"
				class="p-2 text-white bg-green-500 rounded">
				Tìm kiếm
			</button>
		</div>
		<div
			v-if="filterOpen"
			class="p-4 mt-4 bg-gray-100 rounded">
			<div class="mb-4">
				<label class="block mb-2 font-bold">Sắp xếp</label>
				<select
					v-model="sortRule"
					class="w-full p-2 border rounded">
					<option value="date">Ngày phát hành</option>
					<option value="relevance">Sự liên quan</option>
					<option value="popularity">Số lượt mượn</option>
				</select>
			</div>
			<div class="mb-4">
				<label class="block mb-2 font-bold">Thể loại sách</label>
				<select
					v-model="bookType"
					class="w-full p-2 border rounded">
					<option value="">Không chọn</option>
					<option value="type1">Thể loại 1</option>
					<option value="type2">Thể loại 2</option>
					<option value="type3">Thể loại 3</option>
				</select>
			</div>
			<div class="mb-4">
				<label class="block mb-2 font-bold">Lần tái bản</label>
				<input
					type="number"
					v-model="edition"
					placeholder="Nhập lần tái bản"
					class="w-full p-2 border rounded" />
			</div>
			<div class="mb-4">
				<label class="block mb-2 font-bold">Nhà xuất bản</label>
				<input
					type="text"
					v-model="publisher"
					placeholder="Nhập Nhà xuất bản"
					class="w-full p-2 border rounded" />
			</div>
		</div>
	</div>
</template>

<script>
	import debounce from 'lodash/debounce';

	export default {
		data() {
			return {
				searchQuery: '',
				filterOpen: false,
				sortRule: 'relevance',
				bookType: 'type1',
				edition: '',
				publisher: '',
			};
		},
		methods: {
			toggleFilter() {
				this.filterOpen = !this.filterOpen;
			},
			searchBooks() {
				// Implement search logic here
				console.log(
					'Searching for books with query:',
					this.searchQuery
				);
				console.log('Sort rule:', this.sortRule);
				console.log('Book type:', this.bookType);
				console.log('Edition:', this.edition);
				console.log('Publisher:', this.publisher);
			},
			emitFilter() {
				this.$emit('filter', {
					searchQuery: this.searchQuery,
					sortRule: this.sortRule,
					bookType: this.bookType,
					edition: this.edition,
					publisher: this.publisher,
				});
			},
			debouncedSearch: debounce(function () {
				this.emitFilter();
			}, 3000),
		},
		watch: {
			searchQuery: 'debouncedSearch',
			sortRule: 'debouncedSearch',
			bookType: 'debouncedSearch',
			edition: 'debouncedSearch',
			publisher: 'debouncedSearch',
		},
	};
</script>

<style scoped>
	.search-bar {
		background-color: #ffffff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
