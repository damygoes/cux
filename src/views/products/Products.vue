<template>
  <div class="container main">
    <div class="container wrapper">
      <h2 class="section-title">Find yo<span>u</span>r style</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="style in styles" :key="style.styleID">
          <div class="card">
            <img
              :src="style.styleImage"
              class="card-img-top"
              :alt="style.styleName"
            />
            <div class="card-body">
              <h5 class="card-title">{{ style.styleName }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container all-products">
      <div class="filter-btns">
        <button type="button" class="btn btn-outline-secondary">All</button>
        <button type="button" class="btn btn-outline-secondary">Tops</button>
        <button type="button" class="btn btn-outline-secondary">Jackets</button>
        <button type="button" class="btn btn-outline-secondary">Pants</button>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <router-link
          class="col"
          v-for="product in products"
          :key="product.id"
          :to="{ name: 'ProductDetails', params: { slug: product.slug } }"
        >
          <div class="card">
            <img :src="product.img" class="card-img-top" :alt="product.name" />
            <div class="card-body text-center">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">€{{ product.price }}</p>
              <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import sourceData from "@/datapoints/data.json"; //to import the data.json

export default {
  data() {
    return {
      styles: [],
      products: [],
    };
  },
  // This lifecycle hook makes the API call to fetch our data
  methods: {
    async getStyles() {
      await fetch("http://localhost:5000/styles")
        .then((res) => res.json())
        .then((data) => (this.styles = data))
        .catch((err) => console.log(err.message));
    },
    async getProdcts() {
      await fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => (this.products = data))
        .catch((err) => console.log(err.message));
    },
  },

  // This lifecycle hook fires when the Products component is mounted to the DOM
  mounted() {
    this.getStyles();
    this.getProdcts();
  },
};
</script>

<style lang="scss" scoped>
.main {
  // border: 1px solid red;
  height: 100vh;
  padding: 2em;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
  }

  .wrapper {
    .section-title {
      font-size: 3rem;
      font-weight: 400;
      align-self: flex-start;
      margin-bottom: 1em;
      margin-top: 2em;
      span {
        font-style: italic;
        color: pink; //change later
      }
    }

    .card {
      border: none;

      img {
        height: 80%;
      }

      .card-title {
        font-size: 1.5rem;
        font-style: italic;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }

  .all-products {
    .filter-btns {
      margin: 3em 0 1.2em 0;
      padding: 1.2em 1.2em 1.2em 0;

      .btn {
        font-size: 1rem;
        font-weight: 100;
        margin-right: 0.8em;
        cursor: pointer;
        transition: 200ms all ease-in;
        &:hover {
          background-color: lightcoral; //change later
          border: none;
        }
      }
    }
  }
}
</style>
