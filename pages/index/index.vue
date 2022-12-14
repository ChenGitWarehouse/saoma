<template>
	<view class="content">
		<h3 class="title">会员卡密激活</h3>
		<view class="inp1 inp">
			<view class="txt">卡密</view>
			<input type="text" placeholder="请输入卡密" placeholder-style="font-size: 28rpx; color:#c0c4cc" />
		</view>

		<view class="inp2 inp">
			<view class="txt"></view>
			<input type="text" placeholder="点击右边扫码" placeholder-style="font-size: 28rpx;color:#c0c4cc" />
			<view class="sao" @click="scanCode">点击扫码</view>
		</view>
		<view class="btn" @click="goto">激活</view>
		<view class="text">
			[免责声明]我们是第三方激活平台 切勿利用本网站从事违反法律行为《如：诈骗，欺骗，行为不实》一切产生后果自负，我们只是第三方激活平台；如有问题请联系商家售后处理！
		</view>
	</view>
</template>

<script>
let qrcode = require('@/components/qrcode.js'); // 导入这个文件，这个文件随便放在哪里，看个喜好
export default {
	data() {
		return {};
	},
	onLoad() {
		console.log(qrcode);
	},

	methods: {
		scanCode() {
			let that = this;
			// 调用uni提供的调用相机api
			uni.chooseImage({
				sizeType: ['original'],
				count: 1,
				success: res => {
					const tempFilePaths = res.tempFilePaths[0]; // 获取到二维码图片的链接
					qrcode.decode(tempFilePaths); // 解析二维码图片
					qrcode.callback = res1 => {
						if (res1 == 'error decoding QR Code') {
							uni.showToast({
								title: '识别二维码失败，请重新上传！',
								duration: 2000,
								icon: 'none'
							});
						} else {
							alert(res1);
							// 解析成功返回二维码链接
							console.log(res1); // 这打印的是扫码扫出来的东西
						}
					};
				}
			});
		},
		goto() {
			uni.navigateTo({
				url: '/pages/index/saoma'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	width: 100%;
	padding: 0 20rpx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.inp {
		width: 100%;
		height: 80rpx;
		padding: 2rpx;
		display: flex;
		background-color: #f5f7fa;
		border-radius: 10rpx;
		box-sizing: border-box;
		overflow: hidden;
		margin-bottom: 20rpx;
		border: 1rpx solid #ccc;
		.txt {
			font-size: 28rpx;
			width: 150rpx;
			height: 76rpx;
			line-height: 76rpx;
			text-align: center;
			color: #ccc;
		}
		input {
			flex: 1;
			height: 76rpx;
			background-color: #ffffff;
			padding-left: 20rpx;
		}
	}
	.inp2 {
		input {
			flex: 1;
		}
		.sao {
			font-size: 28rpx;
			color: #409eff;
			line-height: 76rpx;
			text-align: center;
			width: 20%;
			background-color: #ffffff;
			padding-right: 10rpx;
		}
	}
	.title {
		margin: 100rpx 0 150rpx 0;
	}
	.text {
		color: red;
	}
	.btn {
		margin-top: 60rpx;
		width: 80%;
		height: 80rpx;
		background-color: #409eff;
		color: #ffffff;
		border-radius: 10rpx;
		line-height: 80rpx;
		text-align: center;
		margin-bottom: 20rpx;
	}
}
</style>
