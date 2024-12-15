<template>
	<div>
		<h2 class="my-6 text-2xl font-bold text-center">Tìm sách</h2>
		<BookSearch @filter="applyFilter" />
		<div class="container mx-auto mt-6">
			<UserBorrowInfo
				v-for="user in filteredUsers"
				:key="user.id"
				:user="user" />
		</div>
	</div>
</template>

<script>
	import BookSearch from '~/components/BookSearch.vue';
	import UserBorrowInfo from '~/components/UserBorrowInfo.vue';

	export default {
		components: {
			BookSearch,
			UserBorrowInfo,
		},
		data() {
			return {
				books: null,
				users: null,
				filteredBooks: [],
				filteredUsers: [],
			};
		},
		async created() {
			try {
				const { data: bookData } = await useAsyncData('books', () =>
					fetch('/data/book.json').then((res) => res.json())
				);
				const { data: userData } = await useAsyncData('users', () =>
					fetch('/data/users.json').then((res) => res.json())
				);
				this.books = bookData;
				this.users = userData;

				this.filteredBooks = this.books;
				this.filteredUsers = this.sortUsers(this.users);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
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
			sortUsers(users) {
				const currentDate = new Date().toISOString().split('T')[0];
				return users.sort((a, b) => {
					const aHasOverdueBooks = a.borrowedBooks.some(
						(book) =>
							book.returnDate < currentDate &&
							book.status === 'IB'
					);
					const bHasOverdueBooks = b.borrowedBooks.some(
						(book) =>
							book.returnDate < currentDate &&
							book.status === 'IB'
					);
					const aHasBorrowedBooks = a.borrowedBooks.some(
						(book) =>
							book.returnDate >= currentDate &&
							book.status === 'IB'
					);
					const bHasBorrowedBooks = b.borrowedBooks.some(
						(book) =>
							book.returnDate >= currentDate &&
							book.status === 'IB'
					);

					if (aHasOverdueBooks && !bHasOverdueBooks) return -1;
					if (!aHasOverdueBooks && bHasOverdueBooks) return 1;
					if (aHasBorrowedBooks && !bHasBorrowedBooks) return -1;
					if (!aHasBorrowedBooks && bHasBorrowedBooks) return 1;
					return 0;
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
