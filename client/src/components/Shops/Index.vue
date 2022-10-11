<template>
  <div class="container-fluid">
   

    <div class="container-fluid">
      <br />
      <button
        style="float: right"
        type="button"
        class="btn btn-success font2"
        v-on:click="navigateTo('/shop/create')"
      >
        <i class="fas fa-plus-circle"></i> Add Shop
      </button>
    </div>
    <br /><br /><br />

    <!-- <div class="container-fluid">
			<transition-group name="fade">
				<div v-for="shop in shops" v-bind:key="shop.id" class="shop-list">
					<div class="shop-pic">
						<div class="thumbnail-pic" v-if="shop.thumbnail != 'null'">
							<img :src="BASE_URL + shop.thumbnail" alt="thumbnail" width="200" />
						</div>
					</div>
					<h3>{{ shop.title }}</h3>
					<div class="shop-info">
						<p>
							<span class="font2">Product Id:</span> {{ shop.id }}<br />
							<span class="font2">Price:</span> {{ shop.content }}<br />
							<span class="font2">Category:</span> {{ shop.category }}<br />
							<span class="font2">Status:</span> {{ shop.status }}<br />
							<span class="font2">Apply on:</span>
							{{ shop.createdAt | formatedDate }}
						</p>
						<p class="font2">
							<button
								class="btn btn-sm btn-info"
								v-on:click="navigateTo('/shop/' + shop.id)"
							>
								<i class="far fa-eye"></i>
								Watch Book
							</button>
							<button
								class="btn btn-sm btn-warning"
								v-on:click="navigateTo('/shop/edit/' + shop.id)"
							>
								<i class="far fa-edit"></i> Edit
							</button>
							<button
								class="btn btn-sm btn-danger"
								v-on:click="deleteshop(shop)"
							>
								<i class="fas fa-trash-alt"></i> Delete
							</button>
						</p>
					</div>
				</div>
			</transition-group>
		</div> -->

    <div class="container-fluid">
      <div v-for="shop in shops" v-bind:key="shop.id" class="shop-list">
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Location </th>

              <th scope="col">Tool</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th width="5%">{{ shop.id }}</th>
              <td width="15%">
                <div class="shop-pic">
                  <div class="thumbnail-pic" v-if="shop.thumbnail != 'null'">
                    <img
                      :src="BASE_URL + shop.thumbnail"
                      alt="thumbnail"
                      width="200"
                    />
                  </div>
                </div>
              </td>
              <td width="15%">{{ shop.name }}</td>
              <td width="30%">{{ shop.location }}</td>
              

              <td width="20%">
                <center>
                  <button
                    class="btn btn-primary btn-lg"
                    v-on:click="navigateTo('/shop/edit/' + shop.id)"
                  >
                    Edit</button
                  >&nbsp; &nbsp; &nbsp;
				  
                  <button
                    class="btn btn-danger btn-lg"
                    v-on:click="deleteshop(shop)"
                  >
                    Delete
                  </button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import shopsService from "@/services/ShopService";
import _ from "lodash";

export default {
  data() {
    return {
      shops: [],
      BASE_URL: "http://localhost:8081/assets/uploads/"
    };
  },
  async created() {
    this.shops = (await shopsService.index()).data;
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setshop", null);
      this.$router.push({
        name: "login"
      });
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteshop(shop) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await shopsService.delete(shop);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.shops = (await shopsService.index()).data;
    }
  }
};
</script>
<style scoped></style>
