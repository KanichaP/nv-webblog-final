<template>
	<div class="container-fluid">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
				<img style="color: Black"
					src="../assets/stationery.png"
					width="45"
					height="45"
					class="d-inline-block align-top"
					alt=""
				/>
				<span class="font1" style="color: Black">&nbsp;<b>Nu Stationery </b></span>
				<span class="font1">&nbsp;|&nbsp;</span>
				<span class="font1"><router-link :to="{ name: 'homepage' }"><span style="color: Black"><b>Homepage</b></span></router-link></span>
				<span class="font1">&nbsp;|&nbsp;</span>
				<span class="font1"><router-link :to="{ name: 'blogs' }"><span style="color: Black"><b>Equipment</b></span></router-link></span>
				<span class="font1">&nbsp;|&nbsp;</span>
				<span class="font1"><router-link :to="{ name: 'shops' }"><span style="color: Black"><b>Stationery shop</b></span></router-link></span>
				<span class="font1">&nbsp;|&nbsp;</span>
				<span v-on:click.prevent="logout" style="color: Black"
					><i class="fas fa-sign-in-alt"></i><b> Logout</b></span
				>
				
			</a>
			<!-- <ul class="navbar-brand">
        <li><router-link :to="{ name: 'blogs' }">Blog</router-link></li>
        <li><router-link :to="{ name: 'users' }">Order</router-link></li>
        <li><router-link :to="{ name: 'comments' }">Product</router-link></li>
        <li><router-link :to="{ name: 'login' }">Login</router-link></li>
        <li><router-link :to="{ name: 'blogs' }">User</router-link></li>
      </ul> -->
			<div class="clearfix" />
		</nav>
	</div>
</template>
<script>
import { mapState } from "vuex";
import AuthenService from "@/services/AuthenService";

export default {
	data() {
		return {};
	},
	computed: {
		...mapState(["isUserLoggedIn", "user"]),
	},
	methods: {
		navigateTo(route) {
			this.$router.push(route);
		},
		logout() {
			this.$store.dispatch("setToken", null);
			this.$store.dispatch("setUser", null);
			this.$router.push({
				name: "login",
			});
		},
	},
};
</script>
<style scoped>
.bg-light {
	background-color: #FFCCCC !important;
	color: #fff !important;
}

.container-fluid {
	margin-top: -50px;
}
</style>
