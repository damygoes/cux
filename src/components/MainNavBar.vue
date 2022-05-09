<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <router-link :to="{ name: 'Products' }" class="navbar-brand ms-3"
        >C<span>U</span>X</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mx-auto mb-2 mb-lg-0">
          <div class="input-group">
            <input
              type="search"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
            <span class="input-group-text" id="basic-addon1"
              ><i class="fa-solid fa-magnifying-glass"></i
            ></span>
          </div>
        </div>
        <div class="mr-auto">
          <i class="fa-solid fa-heart me-5"></i>
          <i class="fa-solid fa-bag-shopping me-5"></i>
          <i class="fa-solid fa-euro-sign me-5"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      name: "MainNavBar",
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  font-size: 2rem;
  font-weight: 900;
  span {
    font-style: italic;
    color: pink; //change later
  }
}
</style>
