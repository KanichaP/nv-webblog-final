<template>
	<div>
		<h1>Show Shop</h1>
		<p>id: {{ shop.id }}</p>
		<p>title: {{ shop.title }}</p>
		<p>content: {{ shop.content }}</p>
		<p>category: {{ shop.category }}</p>
		<p>status: {{ shop.status }}</p>
		<p>
			<button v-on:click="navigateTo('/shop/edit/' + shop.id)">
				แก้ไข shop
			</button>
			<button v-on:click="navigateTo('/shops')">กลับ</button>
		</p>
	</div>
</template>
<script>
import shopsService from "@/services/ShopService";
export default {
	data() {
		return {
			shop: null,
		};
	},
	async created() {
		try {
			let shopId = this.$route.params.shopId;
			this.shop = (await shopsService.show(shopId)).data;
		} catch (error) {
			console.log(error);
		}
	},
	methods: {
		navigateTo(route) {
			this.$router.push(route);
		},
	},
};
</script>
<style scoped>
</style>
