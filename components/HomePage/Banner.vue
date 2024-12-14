<template>
	<section class="banner relative container mx-auto h-[600px]">
		<div class="content-wrap relative h-full">
			<div class="overlay absolute inset-0 bg-black opacity-50"></div>
			<div
				class="content-layer relative z-10 text-white py-[200px] px-16 flex flex-col h-full">
				<div class="text-layer">
					<h3 class="text-3xl font-bold mb-4">
						Đăng ký thẻ thư viện - Khoá D24
					</h3>
					<p class="mb-4">
						Đã mở đăng ký thẻ thư viện cho khoá D24 chính quy. Chỉ
						hơn 5 phút thao tác nhận ngay thẻ thư viện điện tử!
					</p>
				</div>
				<div class="flex-grow"></div>
				<div class="redirect-layer">
					<RouterLink
						to="/signup"
						class="r-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
						Đăng ký ngay!
					</RouterLink>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {};
</script>

<style scoped>
	.banner {
		background-image: url('/images/banner-bg.jpg');
		background-size: cover;
		background-position: center;
	}
</style>
