<template>
	<div class="p-4 bg-white rounded shadow book-info">
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
			<div>
				<img
					:src="book.cover"
					:alt="book.title"
					class="object-cover w-full mb-4 rounded h-80" />
			</div>
			<div>
				<div class="mb-2">
					<label class="block text-gray-700"
						><strong>Tác giả:</strong></label
					>
					<input
						v-model="editedBook.author"
						type="text"
						class="w-full p-2 border rounded" />
				</div>
				<div class="mb-2">
					<label class="block text-gray-700"
						><strong>Nhà xuất bản:</strong></label
					>
					<input
						v-model="editedBook.publisher"
						type="text"
						class="w-full p-2 border rounded" />
				</div>
				<div class="mb-2">
					<label class="block text-gray-700"
						><strong>Ngày phát hành:</strong></label
					>
					<input
						v-model="editedBook.date"
						type="date"
						class="w-full p-2 border rounded" />
				</div>
				<div class="mb-2">
					<label class="block text-gray-700"
						><strong>Số lượng:</strong></label
					>
					<input
						v-model="editedBook.amount"
						type="number"
						class="w-full p-2 border rounded" />
				</div>
				<div class="mb-2">
					<label class="block text-gray-700"
						><strong>Còn lại:</strong></label
					>
					<input
						v-model="editedBook.available"
						type="number"
						class="w-full p-2 border rounded" />
				</div>
				<div class="mb-4">
					<label class="block text-gray-700"
						><strong>Mô tả:</strong></label
					>
					<textarea
						v-model="editedBook.description"
						class="w-full p-2 border rounded"></textarea>
				</div>
				<button
					@click="saveBookInfo"
					class="p-2 text-white bg-blue-500 rounded">
					Lưu thông tin sách
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			book: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				editedBook: { ...this.book },
			};
		},
		methods: {
			saveBookInfo() {
				// Emit an event to save the edited book information
				this.$emit('save-book-info', this.editedBook);
			},
		},
	};
</script>

<style scoped>
	.book-info {
		background-color: #ffffff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
