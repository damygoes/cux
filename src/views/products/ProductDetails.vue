<template>
  <div v-if="product" class="container main">
    <div class="control-btns">
      <i class="fa-solid fa-arrow-left" @click="back"></i
      ><i class="fa-solid fa-heart"></i>
    </div>
    <div class="card">
      <h5 class="product-name">{{ product.name }}</h5>
      <img
        :src="product.img"
        class="card-img-top"
        :alt="product.key"
        :key="product.id"
      />
      <div class="card-body">
        <div class="select-size">
          <p class="size-title">Size</p>
          <div class="size-filter">
            <button
              v-for="size in product.size"
              :key="size"
              class="size-filter-btn"
            >
              {{ size }}
            </button>
          </div>
        </div>
        <div class="select-color">
          <p class="color-title">Color</p>
          <div class="color-filter">
            <button
              v-for="color in product.color"
              :key="color"
              class="color-filter-btn"
            >
              {{ color }}
            </button>
          </div>
        </div>
        <div class="card-foot">
          <p class="product-price">€{{ product.price }}</p>
          <a href="#" class="btn btn-primary add-to-cart">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
  <div class="card" v-else>
    <p>Product Loading.....</p>
  </div>
</template>

<script>
// import sourceData from "@/datapoints/data.json"; //to import the data.json
// import sourceData from "@/data.json"; //to import the data.json
export default {
  // props: ["slug"],
  data() {
    return {
      product: null,
    };
  },
  methods: {
    async getProduct() {
      await fetch("http://localhost:5000/products/" + this.$route.params.slug)
        .then((res) => res.json())
        .then((data) => (this.product = data))
        .catch((err) => console.log(err.message));
    },
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.getProduct();
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

  .control-btns {
    display: flex;
    align-self: center;
    justify-content: space-between;
    margin-top: 4em;
    margin-bottom: 3em;
    width: 90%;

    i {
      font-size: 2rem;
      color: lightcoral; //change later
      cursor: pointer;
    }
  }

  .card {
    width: 90%;
    border: none;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;

    .product-name {
      font-size: 2.5rem;
      font-weight: 400;
      margin-bottom: 1.2em;
    }
    img {
      width: 80%;
      height: 50%;
      border-radius: 20px;
      object-fit: cover;
    }
    .card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin: 1em auto;
      // justify-content: space-evenly;

      .select-size {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
        margin: 1.2em 0em;

        .size-title {
          font-size: 1.2rem;
          font-weight: 300;
        }
        .size-filter {
          display: flex;
          justify-content: center;
          gap: 1em;
          width: 100%;
        }
        .size-filter-btn {
          border-radius: 10px;
          padding: 0.5em 1.2em;
          font-size: 1rem;
          font-weight: 100;
          border: 1px solid #ccc;
          background-color: transparent;
          cursor: pointer;
          transition: 200ms all ease-in;
          &:hover {
            background-color: lightcoral; //change later
            border: none;
          }
        }
      }

      .select-color {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
        margin: 1.2em 0em;

        .color-title {
          font-size: 1.2rem;
          font-weight: 300;
        }
        .color-filter {
          display: flex;
          justify-content: center;
          gap: 1em;
          width: 100%;
        }
        .color-filter-btn {
          border-radius: 10px;
          padding: 0.5em 1.2em;
          font-size: 1rem;
          font-weight: 100;
          border: 1px solid #ccc;
          background-color: transparent;
          text-transform: capitalize;
          cursor: pointer;
          transition: 200ms all ease-in;
          &:hover {
            background-color: lightcoral; //change later
            border: none;
          }
        }
      }

      .card-foot {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2.5em;
        .product-price {
          font-size: 1.5rem;
          font-weight: 500;
        }
        .add-to-cart {
          border-radius: 10px;
          font-size: 1.2rem;
          padding: 0.5em 1.5em;
        }
      }
    }
  }
}
</style>
