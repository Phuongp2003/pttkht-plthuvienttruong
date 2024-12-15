<template>
	<div class="p-4 bg-white rounded shadow user-info">
		<div
			class="flex items-center cursor-pointer"
			@click="toggleBooks">
			<div class="flex-grow">
				<h3 class="text-lg font-semibold">{{ user.name }}</h3>
				<p class="text-gray-700">
					Số sách mượn: {{ user.borrowedBooks.length }}
				</p>
			</div>
			<div
				:class="statusClass"
				class="w-4 h-4 rounded-full"></div>
		</div>
		<div
			v-if="showBooks"
			class="mt-4">
			<div
				v-for="book in user.borrowedBooks"
				:key="book.id"
				class="p-2 mb-2 bg-gray-100 rounded">
				<div class="flex items-center gap-3">
					<img
						:src="book.cover"
						:alt="book.title"
						class="object-cover w-16 h-16 mr-4 rounded" />
					<div class="flex-grow">
						<h4 class="font-semibold text-md">{{ book.title }}</h4>
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
					<div v-if="book.status === 'IB'">
						<button
							@click="confirmReturned(book.id)"
							class="p-2 text-white bg-green-500 rounded">
							Xác nhận đã trả
						</button>
					</div>
				</div>
			</div>
			<div class="mt-4 c-button">
				<button
					@click="confirmAllReturned"
					class="p-2 text-white bg-blue-500 rounded">
					Xác nhận đã trả toàn bộ
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			user: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				showBooks: false,
			};
		},
		computed: {
			statusClass() {
				const currentDate = new Date().toISOString().split('T')[0];
				const hasOverdueBooks = this.user.borrowedBooks.some(
					(book) =>
						book.returnDate < currentDate && book.status === 'IB'
				);
				const hasBorrowedBooks = this.user.borrowedBooks.some(
					(book) =>
						book.returnDate >= currentDate && book.status === 'IB'
				);
				if (hasOverdueBooks) {
					return 'bg-red-500';
				} else if (hasBorrowedBooks) {
					return 'bg-yellow-500';
				} else {
					return 'bg-green-500';
				}
			},
		},
		methods: {
			toggleBooks() {
				this.showBooks = !this.showBooks;
			},
			confirmReturned(bookId) {
				// Emit an event to confirm the book has been returned
				this.$emit('confirm-returned', bookId);
			},
			confirmAllReturned() {
				// Emit an event to confirm all books have been returned
				this.$emit('confirm-all-returned', this.user.id);
			},
		},
	};
</script>

<style scoped>
	.user-info {
		margin-bottom: 1rem;
	}
	.cursor-pointer {
		cursor: pointer;
	}
	.bg-green-500 .c-button {
		display: none;
	}
</style>
