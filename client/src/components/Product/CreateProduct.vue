<template>
	<div>
		<main-header navsel="front"></main-header>
		<back-header /><br />

		<div class="container-fluid">
			<div class="container">
				<div class="blog-wrapper">
					<h4><i class="far fa-clipboard"></i> <b>Add Product</b></h4>
					<br />
					<span class="font2">
						<form v-on:submit.prevent="createProduct">
							<div class="row">
								<div class="col">
									<label for="input1">Product Name</label>
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text" id="basic-addon1"
												><i class="fas fa-boxes"></i
											></span>
										</div>
										<select
											class="form-control"
											v-model="Product.product_name"
											required
										>
											<option disabled value="">Choose a product</option>
											<option v-for="blog in blogs" v-bind:key="blog.id">
												{{ blog.title + "  " + blog.content + "  Baht" }}
											</option>
										</select>
									</div>
								</div>
								<div class="col">
									<label for="input1">Quantity</label>
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text" id="basic-addon1"
												><i class="fas fa-sort-numeric-up"></i
											></span>
										</div>
										<input
											required
											type="number"
											class="form-control"
											placeholder="Quantity"
											v-model="Product.quantity"
										/>
									</div>
								</div>
							</div>
							<div class="row">
								
								
							</div>
							
							<div class="row">
								<div class="col">
									<button
										type="submit"
										class="btn btn-success"
										style="width: 100%"
									>
										<i class="fas fa-clipboard-check"></i> Confirm
									</button>
								</div>
								<div class="col">
									<button
										class="btn btn-danger"
										type="button"
										style="width: 100%"
										v-on:click="navigateTo('/Products')"
									>
										<i class="fas fa-times-circle"></i> Cancel
									</button>
								</div>
							</div>
						</form>
					</span>
				</div>
				<div class="footer"></div>
			</div>
		</div>
	</div>
</template>
  <script>
import { mapState } from "vuex";
import ProductService from "@/services/ProductService";
import BlogsService from "@/services/BlogsService";
export default {
	data() {
		return {
			blogs: [],
			Product: {
				quantity: "",
				product_name: "",
				
				status: "pending",
			},
			data: { date: new Date().toISOString().substr(0, 10) },
		};
	},
	computed: {
		...mapState(["isUserLoggedIn", "user"]),
		name: function () {
			return this.user.name;
		},
	},
	methods: {
		async createProduct() {
			try {
				await ProductService.post(this.Product);
				this.$router.push({
					name: "Products",
				});
				alert("You have successfully completed your Chanom Producting.");
			} catch (err) {
				console.log(err);
				alert("An error");
			}
		},
		navigateTo(route) {
			this.$router.push(route);
		},
	},
	async created() {
		this.blogs = (await BlogsService.index()).data;
	},
	async refreshData() {
		this.Products = (await ProductService.index()).data;
	},
};
</script>>
  
  <style scoped>
.header {
	margin-left: auto;
	margin-right: auto;
	margin-top: 0px;
	padding: 10px;
	position: relative;
	background-color: #ececec;
	border-bottom: 1px solid rgba(255, 255, 255, 0.5);
	box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.1) inset;
	text-shadow: 1px 1px 1px #fff;
}
.categories {
	margin-top: 10px;
	padding: 0;
	width: 100%;
}
.blog-wrapper {
	margin-top: 20px;
	padding: 40px;
	height: 100%;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.blog-tab {
	padding: 1px;
	background-color: #d3d3d3;
	text-align: left;
	text-indent: 0.5em;
}
.footer {
	margin-top: 50px;
}
</style>