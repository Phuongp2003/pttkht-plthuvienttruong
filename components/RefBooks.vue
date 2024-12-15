<template>
	<div class="p-4 bg-white rounded shadow ref-books">
		<h4 class="mb-4 text-lg font-semibold text-center">Sách liên quan</h4>
		<ul>
			<li
				v-for="book in books"
				:key="book.id"
				class="mb-2">
				<NuxtLink
					:to="book.link"
					class="p-4 bg-white rounded shadow book-card">
					<div class="flex flex-row gap-2">
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
					</div>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			books: {
				type: Array,
				required: true,
			},
		},
	};
</script>

<style scoped>
	.ref-books {
		background-color: #ffffff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
