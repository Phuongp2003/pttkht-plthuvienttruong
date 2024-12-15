<template>
	<div class="sticky top-0 z-50 bg-white shadow-md navbar">
		<div class="container flex items-center justify-between p-4 mx-auto">
			<!-- Logo -->
			<NuxtLink
				to="/"
				class="flex items-center">
				<Logo />
			</NuxtLink>
			<!-- Navigation Links -->
			<div class="flex space-x-4">
				<RouterLink
					to="/books"
					class="text-gray-700 hover:text-blue-500">
					Sách
				</RouterLink>
				<RouterLink
					to="/books"
					class="text-gray-700 hover:text-blue-500">
					Quán lý sách mượn
				</RouterLink>
				<RouterLink
					to="/books"
					class="text-gray-700 hover:text-blue-500">
					Quán lý thẻ sinh viên
				</RouterLink>
			</div>
			<!-- Account Section -->
			<div class="relative">
				<input
					type="checkbox"
					id="avatar-checkbox"
					class="hidden peer" />
				<label
					for="avatar-checkbox"
					class="cursor-pointer">
					<img
						v-if="user && user.avatar"
						:src="user.avatar"
						alt="Avatar"
						class="w-10 h-10 rounded-full" />
					<div
						v-else
						class="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full">
						<span class="text-gray-700">A</span>
					</div>
				</label>
				<div
					class="absolute right-0 hidden w-48 mt-2 bg-white border rounded shadow-lg peer-checked:block">
					<div v-if="user">
						<RouterLink
							to="/profile"
							class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							@click="
								document.getElementById(
									'avatar-checkbox'
								).checked = false
							"
							>Hồ sơ</RouterLink
						>
						<RouterLink
							to="/borrow-history"
							class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							@click="
								document.getElementById(
									'avatar-checkbox'
								).checked = false
							"
							>Lịch sử mượn</RouterLink
						>
						<RouterLink
							to="/announcements"
							class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							@click="
								document.getElementById(
									'avatar-checkbox'
								).checked = false
							"
							>Thông báo</RouterLink
						>
						<button
							@click="logout"
							class="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
							Đăng xuất
						</button>
					</div>
					<div v-else>
						<RouterLink
							to="/login"
							class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							@click="
								document.getElementById(
									'avatar-checkbox'
								).checked = false
							"
							>Login</RouterLink
						>
						<RouterLink
							to="/signup"
							class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							@click="
								document.getElementById(
									'avatar-checkbox'
								).checked = false
							"
							>Sign Up</RouterLink
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { useCookies } from '@vueuse/integrations/useCookies';
	import { useStorage } from '@vueuse/core';
	import Logo from '~/components/Logo.vue';

	export default {
		components: {
			Logo,
		},
		setup() {
			const cookies = useCookies();
			const user = JSON.parse(useStorage('user', null).value);

			const logout = () => {
				cookies.remove('accessToken');
				cookies.remove('refreshToken');
				localStorage.removeItem('user');
				window.location.reload();
			};

			return {
				user,
				logout,
			};
		},
	};
</script>

<style scoped>
	.navbar {
		background-color: #ffffff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
