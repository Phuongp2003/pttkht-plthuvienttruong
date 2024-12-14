<template>
	<div
		id="authorized"
		class="w-full flex h-screen bg-indigo-700">
		<div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
			<header>
				<h2
					class="text-bold text-indigo-700 font-bold text-2xl text-center mb-4">
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
						class="form-control w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
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
						class="form-control w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
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
					class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded">
					Đăng nhập
				</button>
			</form>
			<footer>
				<RouterLink
					to="forgot-pass"
					class="text-indigo-700 hover:text-pink-700 text-sm float-left">
					Quên mật khẩu?
				</RouterLink>
				<RouterLink
					to="signup"
					class="text-indigo-700 hover:text-pink-700 text-sm float-right">
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
				this.username = 'demo';
				this.password = 'demo';
				await this.login();
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
