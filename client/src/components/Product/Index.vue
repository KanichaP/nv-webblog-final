<template>
	<div class="container-fluid">
		<back-header />

		<div class="container-fluid">
			<br />
			<button
				style="float: right"
				type="button"
				class="btn btn-success font2"
				v-on:click="navigateTo('/Product/create')"
			>
				<i class="fas fa-plus-circle"></i> Add Product
			</button>
		</div>
		<br /><br /><br />

		<div class="container-fluid">
			<div v-for="Product in Products" v-bind:key="Product.id" class="blog-list">
				<table class="table table-bProducted">
					<tbody>
						<th width="10%">{{ Product.product_name }}</th>
						<th width="8%">
							<span style="color: red">Quantity : </span>{{ Product.quantity }}
						</th>
						<th width="10%">
							<span style="color: yellowgreen">Size : </span>{{ Product.size }}
						</th>
						<th width="10%">
							<span style="color: green">Sweet : </span>{{ Product.sweet }}
						</th>
						<th width="10%">
							<span style="color: purple"></span>{{ Product.updatedAt }}
						</th>
						<th width="10%">
							<button
								class="btn btn-primary btn-lg"
								v-on:click="navigateTo('/Product/edit/' + Product.id)"
							>
								Edit
							</button>
							<button
								class="btn btn-danger btn-lg"
								v-on:click="deleteProduct(Product)"
							>
								Delete
							</button>
						</th>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import ProductsService from "@/services/ProductService";
import _ from "lodash";

export default {
	data() {
		return {
			Products: [],
			BASE_URL: "http://localhost:8081/assets/uploads/",
		};
	},
	async created() {
		this.Products = (await ProductsService.index()).data;
	},
	methods: {
		logout() {
			this.$store.dispatch("setToken", null);
			this.$store.dispatch("setBlog", null);
			this.$router.push({
				name: "login",
			});
		},
		navigateTo(route) {
			this.$router.push(route);
		},
		async deleteProduct(Product) {
			let result = confirm("Want to delete?");
			if (result) {
				try {
					await ProductsService.delete(Product);
					this.refreshData();
				} catch (err) {
					console.log(err);
				}
			}
		},
		async refreshData() {
			this.Products = (await ProductsService.index()).data;
		},
	},
};
</script>
<style scoped>
</style>
