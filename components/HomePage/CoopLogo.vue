<style>
	.coop-logo {
		--gap: 86.21px;
		--sl-w: calc(
			var(--gap) * v-bind(cooperateImg.length - 1) + v-bind(wSum())
		);
		width: calc(var(--sl-w));
		overflow-x: hidden;
	}

	.cl-inner {
		width: calc(2 * var(--sl-w));
		animation: slideLeft 8s linear 0s infinite;
	}
	.cl-inner img {
		height: 64px;
	}
	.cl-inner:hover {
		animation-play-state: paused;
	}
	@media (max-width: 1184px) {
		.cl-inner img {
			height: 44px;
		}
	}
	@media (max-width: 620px) {
		.cl-inner img {
			height: 20px;
		}
	}
	@media (max-width: 1184px) {
		.coop-logo {
			--gap: 33.55px;
			--sl-w: calc(
				var(--gap) * v-bind(cooperateImg.length - 1) + v-bind(wSum()) *
					0.6875
			);
		}
	}
	@media (max-width: 620px) {
		.coop-logo {
			--gap: 16.25px;
			--sl-w: calc(
				var(--gap) * v-bind(cooperateImg.length - 1) + v-bind(wSum()) *
					0.3125
			);
		}
	}

	@keyframes slideLeft {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>

<template>
	<div class="coop-logo">
		<div class="flex justify-around cl-inner">
			<div class="main-list w-[50%] flex justify-around">
				<a
					v-for="item in cooperateImg"
					:key="item.id"
					:href="item.href">
					<img
						:src="item.imgSrc"
						:alt="'Image ' + item.id" />
				</a>
			</div>
			<div class="flex dumpl-list w-[50%] justify-around">
				<a
					v-for="item in cooperateImg"
					:key="item.id"
					:href="item.href">
					<img
						:src="item.imgSrc"
						:alt="'Image ' + item.id" />
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cooperateImg: [
					{
						id: 1,
						imgSrc: '/images/ptitlogo.jpg',
						href: '/',
						width: 120,
					},
					{
						id: 2,
						imgSrc: '/images/logo.png',
						href: '/',
						width: 198,
					},
					{
						id: 3,
						imgSrc: '/images/nuxt-logo.png',
						href: '/',
						width: 210,
					},
					{
						id: 4,
						imgSrc: '/images/tailwind.jpg',
						href: '/',
						width: 210,
					},
				],
			};
		},
		methods: {
			wSum() {
				return (
					this.cooperateImg.reduce(
						(sum, item) => sum + item.width,
						0
					) + 'px'
				);
			},
		},
	};
</script>
