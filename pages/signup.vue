<template>
	<div
		id="authorized"
		class="flex w-full h-screen bg-indigo-700">
		<div class="w-full max-w-xl p-5 m-auto bg-indigo-100 rounded">
			<header>
				<h2
					class="mb-4 text-2xl font-bold text-center text-indigo-700 text-bold">
					Đăng ký
				</h2>
			</header>
			<form @submit.prevent="signup">
				<div class="form-group">
					<label
						class="block mb-2 text-black"
						for="lastname"
						>Họ</label
					>
					<input
						type="text"
						class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none form-control focus:bg-gray-300"
						id="lastname"
						v-model="lastname"
						required />
				</div>
				<div class="form-group">
					<label
						class="block mb-2 text-black"
						for="firstname"
						>Tên đệm và tên</label
					>
					<input
						type="text"
						class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none form-control focus:bg-gray-300"
						id="firstname"
						v-model="firstname"
						required />
				</div>
				<div class="form-group">
					<label
						class="block mb-2 text-black"
						for="nickname"
						>Biệt danh (sẽ sử dụng để hiển thị trong trận
						đấu)</label
					>
					<input
						type="text"
						class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none form-control focus:bg-gray-300"
						id="nickname"
						v-model="nickname"
						required />
				</div>
				<div class="form-group">
					<label
						class="block mb-2 text-black"
						for="email"
						>E-Mail</label
					>
					<input
						type="email"
						class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none form-control focus:bg-gray-300"
						id="email"
						v-model="email"
						required />
				</div>
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
				<div class="form-group">
					<label
						class="block mb-2 text-black"
						for="rpassword"
						>Nhập lại mật khẩu</label
					>
					<input
						type="password"
						class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none form-control focus:bg-gray-300"
						id="rpassword"
						v-model="rpassword"
						required />
				</div>
				<div class="form-group">
					<label
						class="block mb-2 text-black"
						for="avatar"
						>Ảnh đại diện</label
					>
					<input
						type="file"
						class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none form-control focus:bg-gray-300"
						id="avatar"
						@change="previewAvatar"
						accept="image/*" />
					<div
						v-if="avatar"
						class="mt-4">
						<img
							:src="avatar"
							alt="Avatar Preview"
							class="object-cover w-32 h-32 mx-auto rounded-full" />
					</div>
				</div>
				<div
					class="message"
					v-if="message">
					{{ message }}
				</div>
				<button
					type="submit"
					class="w-full px-4 py-2 mb-6 font-bold text-white bg-indigo-700 rounded hover:bg-pink-700">
					Đăng ký
				</button>
			</form>
			<footer>
				<span class="text-sm">Đã có tài khoản?</span>
				<RouterLink
					to="/login"
					class="text-sm text-indigo-700 hover:text-pink-700">
					Đăng nhập
				</RouterLink>
			</footer>
		</div>
		<LoadingTransition v-if="inLoad" />
	</div>
</template>

<script>
	import { useCookies } from '@vueuse/integrations/useCookies';
	import axios from 'axios';

	definePageMeta({
		layout: 'empty',
	});

	export default {
		name: 'Signup',
		data() {
			return {
				lastname: '',
				firstname: '',
				nickname: '',
				email: '',
				username: '',
				password: '',
				rpassword: '',
				avatar: '',
				inLoad: false,
				message: '',
			};
		},
		setup() {
			const cookies = useCookies();
			return { cookies };
		},
		methods: {
			async signup() {
				if (this.password !== this.rpassword) {
					this.message = 'Mật khẩu nhập lại không trùng khớp!';
					return;
				}
				this.inLoad = true;
				let avatarUrl = '';
				if (this.avatar) {
					const formData = new FormData();
					formData.append('file', this.avatar);
					formData.append('upload_preset', 'upload_f');
					formData.append(
						'asset_folder',
						process.env.VITE_CLOUDINARY_FOLDER
					);

					try {
						const response = await axios.post(
							`https://api.cloudinary.com/v1_1/${
								import.meta.env.VITE_CLOUDINARY_NAME
							}/image/upload?upload_preset=upload_f`,
							formData
						);
						avatarUrl = response.data.secure_url;
					} catch (error) {
						console.error('🚀 ~ signup ~ error:', error);
						this.message = 'Failed to upload avatar';
						this.inLoad = false;
						return;
					}
				}

				const signupInfo = {
					lastName: this.lastname,
					firstName: this.firstname,
					nickname: this.nickname,
					email: this.email,
					username: this.username,
					password: this.password,
					avatar: avatarUrl,
				};

				try {
					const response = await fetch(`/api/auth/register`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(signupInfo),
						credentials: 'include',
					});
					const data = await response.json();
					this.inLoad = false;

					if (data.status === 200) {
						console.log('Đăng ký thành công!');
						this.$router.push('/login');
					} else {
						throw new Error(data.message);
					}
				} catch (error) {
					this.message = error.message;
					console.error(error);
				}
			},
			previewAvatar(event) {
				const file = event.target.files[0];
				if (file) {
					const reader = new FileReader();
					reader.onload = (e) => {
						this.avatar = e.target.result;
					};
					reader.readAsDataURL(file);
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
