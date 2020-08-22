<template>
  <div id="app">
    <div class="service-wrapper">
      <b-card-group>
        <b-card title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </b-card-text>

        <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
        </template>
        </b-card>

        <b-card title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
       <b-card-text>
          This card has supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>

      <b-card title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
      </b-card>
      </b-card-group>
    </div>
      <h2 class="subheading">What we offer</h2>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#app {
  position: relative;
  z-index: 0;
}

.services-section {
  position: absolute;
  z-index: 1;
}
</style>