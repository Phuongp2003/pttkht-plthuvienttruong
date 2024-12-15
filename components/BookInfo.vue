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
				<p class="mb-2 text-gray-700">
					<strong>Tác giả:</strong> {{ book.author }}
				</p>
				<p class="mb-2 text-gray-700">
					<strong>Nhà xuất bản:</strong> {{ book.publisher }}
				</p>
				<p class="mb-2 text-gray-700">
					<strong>Ngày phát hành:</strong> {{ book.date }}
				</p>
				<p class="mb-2 text-gray-700">
					<strong>Số lượng:</strong> {{ book.amount }}
				</p>
				<p class="mb-2 text-gray-700">
					<strong>Còn lại:</strong> {{ book.available }}
				</p>
				<p class="mb-4 text-gray-700">
					<strong>Mô tả:</strong> {{ book.description }}
				</p>
				<button class="p-2 text-white bg-blue-500 rounded">
					Mượn sách
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
	};
</script>

<style scoped>
	.book-info {
		background-color: #ffffff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
