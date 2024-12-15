<template>
	<div
		id="authorized"
		class="flex w-full h-screen bg-indigo-700">
		<div class="w-full max-w-xs p-5 m-auto bg-indigo-100 rounded">
			<header>
				<h2
					class="mb-4 text-2xl font-bold text-center text-indigo-700 text-bold">
					Đăng nhập
				</h2>
			</header>
			<form @submit.prevent="loginDemo">
				<div class="form-group">
					<label
						class="block mb-2 text-black"
						for="username"
						>Tên tài khoản</label
					>
					<input
						type="text"
						class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none form-control focus:bg-gray-300"
						id="username"
						v-model="username"
						required />
				</div>
				<div class="form-group">
					<label
						class="block mb-2 text-black"
						for="password"
						>Mật khẩu</label
					>
					<input
						type="password"
						class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none form-control focus:bg-gray-300"
						id="password"
						v-model="password"
						required />
				</div>
				<div
					class="message"
					v-if="message">
					{{ message }}
				</div>
				<button
					type="submit"
					class="w-full px-4 py-2 mb-6 font-bold text-white bg-indigo-700 rounded hover:bg-pink-700">
					Đăng nhập
				</button>
			</form>
			<footer>
				<RouterLink
					to="forgot-pass"
					class="float-left text-sm text-indigo-700 hover:text-pink-700">
					Quên mật khẩu?
				</RouterLink>
				<RouterLink
					to="signup"
					class="float-right text-sm text-indigo-700 hover:text-pink-700">
					Đăng ký
				</RouterLink>
			</footer>
		</div>
		<LoadingTransition v-if="inLoad" />
	</div>
</template>

<script>
	import { useCookies } from '@vueuse/integrations/useCookies';
	import { jwtDecode } from 'jwt-decode';
	import { useStorage } from '@vueuse/core';

	definePageMeta({
		layout: 'empty',
	});

	export default {
		layout: 'empty',
		data() {
			return {
				username: '',
				password: '',
				inLoad: false,
				message: '',
				isVerified: false,
				target: this.$route.query.target || '/',
			};
		},
		setup() {
			const cookies = useCookies();
			const isUserAuth = inject('isUserAuth');
			const uid = inject('uid');
			return { cookies, isUserAuth, uid };
		},
		mounted() {
			if (this.$route.query.message) {
				this.message = this.$route.query.message;
			}
		},
		methods: {
			async login() {
				this.inLoad = true;

				const loginData = {
					username: this.username,
					password: this.password,
				};

				try {
					const response = await $fetch('/api/auth/login', {
						method: 'POST',
						body: loginData,
						credentials: 'include',
					});
					this.inLoad = false;

					if (response.status === 200) {
						const data = response.data;
						console.log('Đăng nhập thành công!');
						this.cookies.set('accessToken', data.accessToken, {
							path: '/',
							expires: new Date(
								new Date().getTime() + 60 * 60 * 1000
							), // 1 hour
						});
						this.cookies.set('refreshToken', data.refreshToken, {
							path: '/',
							expires: new Date(
								new Date().getTime() + 60 * 60 * 1000 * 24 * 7
							), // 1 week
						});

						const accessToken = this.cookies.get('accessToken');
						const decodedToken = jwtDecode(accessToken);
						const user = {
							id: decodedToken.id,
							uid: decodedToken.uid,
							username: decodedToken.username,
							firstName: decodedToken.firstName,
							lastName: decodedToken.lastName,
							nickname: decodedToken.nickname,
							avatar: decodedToken.avatar,
							elo: decodedToken.elo,
							trainingStatus: decodedToken.trainingStatus,
						};
						this.uid.value = user.uid;
						this.isUserAuth.value = true;
						this.userStorage.value = user;

						if (!accessToken || !this.cookies.get('refreshToken')) {
							throw new Error(
								'Lỗi đăng nhập, không nhận được token!'
							);
						}
						this.isVerified = true;
						this.$emit('login-success', this.username);
						console.log(
							'Đăng nhập thành công và token đã được lưu trong cookies'
						);
						this.$router.push(this.target);
					} else {
						throw new Error(response.message);
					}
				} catch (error) {
					this.message = error.message;
					console.error(error);
				}
			},
			async loginDemo() {
				this.password = 'demo';
				const uRole = this.username == 'admin' ? 'lib' : 'usr';
				this.username = 'demo';

				if (this.username !== 'false') {
					this.$router.push(this.target || '/');
				}
				if (this.username === 'false') {
					this.message = 'Demo login failed!';
				} else {
					const user = {
						username: 'demo',
						name: `Demo user`,
						avatar: 'https://res.cloudinary.com/drgzcrye6/image/upload/v1732819880/obhw6bw9twmkqvlng21y.jpg',
						role: uRole,
					};
					this.cookies.set('accessToken', 'accessToken', {
						path: '/',
						expires: new Date(
							new Date().getTime() + 60 * 60 * 1000
						), // 1 hour
					});
					useStorage('user', user, localStorage);
				}
			},
		},
	};
</script>

<style scoped>
	.container {
		max-width: 400px;
		margin: 0 auto;
		padding: 20px;
	}
</style>
