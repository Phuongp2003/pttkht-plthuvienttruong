<template>
	<div
		class="container mx-auto book-list-container"
		id="booklist">
		<div
			class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-5"
			v-if="paginatedBooks">
			<NuxtLink
				v-for="book in paginatedBooks"
				:key="book.id"
				:to="book.link"
				class="p-4 bg-white rounded shadow book-card">
				<img
					:src="book.cover"
					:alt="book.title"
					class="object-cover w-full h-48 mb-4 rounded" />
				<h3 class="mb-2 text-lg font-semibold">{{ book.title }}</h3>
				<p class="text-gray-700">{{ book.author }}</p>
			</NuxtLink>
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
				console.log(this.page);
				const start = (this.page.current - 1) * 18;
				const end = start + 18;
				this.paginatedBooks = this.books.slice(start, end);
			},
			gotoPage(pageNumber) {
				console.log(pageNumber, this.page);
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
	.book-card:hover {
		transform: translateY(-5px);
	}
</style>
