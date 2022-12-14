<template>
	<view class="container"><get-qrcode @success="qrcodeSucess" @error="qrcodeError"></get-qrcode></view>
</template>

<script>
import getQrcode from '@/uni_modules/mumu-getQrcode/components/mumu-getQrcode/mumu-getQrcode.vue';
export default {
	components: {
		getQrcode
	},
	data() {
		return {
			to: '' //页面带过来的to地址
		};
	},
	onLoad(options) {
		this.to = options?.to;
	},
	methods: {}
};
</script>
