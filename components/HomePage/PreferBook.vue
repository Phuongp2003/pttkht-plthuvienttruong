<template>
	<section class="container py-8 mx-auto prefer-book">
		<h3 class="mb-6 text-2xl font-bold">Sách được mượn nhiều</h3>
		<Suspense>
			<template #default>
				<div
					class="grid grid-cols-1 gap-6 lg:grid-cols-3"
					v-if="topBooks.length">
					<div
						v-if="topBooks.length"
						:key="topBooks[0].id"
						class="relative flex flex-col p-4 bg-white rounded shadow book-card lg:col-span-3 lg:flex-row">
						<img
							:src="topBooks[0].cover"
							:alt="topBooks[0].title"
							class="object-cover w-full h-48 mb-4 rounded lg:w-1/2 lg:mb-0 lg:mr-4" />
						<div class="flex flex-col justify-center lg:w-1/2">
							<h3 class="mb-2 text-lg font-semibold">
								{{ topBooks[0].title }}
							</h3>
							<p class="mb-2 text-gray-700">
								{{ topBooks[0].author }}
							</p>
							<p class="text-gray-700">
								{{ topBooks[0].description }}
							</p>
						</div>
						<RouterLink
							class="absolute inset-0 flex items-center justify-center text-lg font-bold transition-opacity duration-300 bg-blue-500 bg-opacity-75 opacity-0 text-whi te borrow-overlay hover:opacity-100"
							:to="topBooks[0].link">
							Mượn sách
						</RouterLink>
					</div>
					<div
						v-for="book in topBooks.slice(1)"
						:key="book.id"
						class="relative p-4 bg-white rounded shadow book-card">
						<img
							:src="book.cover"
							:alt="book.title"
							class="object-cover w-[50%] h-48 mb-4 mx-auto rounded" />
						<div class="book-content w-[50%]">
							<h3 class="px-5 mb-2 text-lg font-semibold">
								{{ book.title }}
							</h3>
							<p class="px-5 text-gray-700">{{ book.author }}</p>
						</div>
						<RouterLink
							class="absolute inset-0 flex items-center justify-center text-lg font-bold text-white transition-opacity duration-300 bg-blue-500 bg-opacity-75 opacity-0 borrow-overlay hover:opacity-100"
							:to="book.link">
							Mượn sách
						</RouterLink>
					</div>
				</div>
			</template>
			<template #fallback>
				<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
					<div
						v-for="n in 10"
						:key="n"
						class="p-4 bg-gray-200 rounded shadow book-card animate-pulse">
						<div class="w-full h-48 mb-4 bg-gray-300 rounded"></div>
						<div class="h-6 mb-2 bg-gray-300 rounded"></div>
						<div class="h-6 mb-2 bg-gray-300 rounded"></div>
						<div class="h-6 bg-gray-300 rounded"></div>
					</div>
				</div>
			</template>
		</Suspense>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				topBooks: [],
			};
		},
		async mounted() {
			try {
				const response = await fetch('/data/book.json');
				this.topBooks = await response
					.json()
					.then((data) => data.slice(0, 10));
			} catch (error) {
				console.error('Error fetching top books:', error);
			}
		},
	};
</script>

<style scoped>
	.prefer-book {
		background-color: #f9fafb; /* Tailwind CSS bg-gray-100 */
	}
	.book-card {
		transition: transform 0.2s;
		position: relative;
	}
	.book-card:hover {
		transform: translateY(-5px);
	}
	.borrow-overlay {
		background-color: rgba(
			59,
			130,
			246,
			0.75
		); /* Tailwind CSS bg-blue-500 with opacity */
		color: #ffffff; /* Tailwind CSS text-white */
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.125rem; /* Tailwind CSS text-lg */
		font-weight: 700; /* Tailwind CSS font-bold */
		opacity: 0;
		transition: opacity 0.3s;
	}
	.book-card:hover .borrow-overlay {
		opacity: 1;
	}
</style>
