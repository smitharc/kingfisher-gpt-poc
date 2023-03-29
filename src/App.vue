<template>
  <div id="app" class="flex w-full flex-col items-center pt-20">
    <img
      class="w-40 fixed top-10 left-10"
      src="https://www.kingfisher.com/etc/designs/kingfisher/corporate/images/logo.png"
    />
    <div class="bg-gray-200 rounded w-1/3 flex flex-col shadow p-10">
      <h1 class="text-2xl font-bold flex flex-col text-gray-700 pb-10">
        Ecommerce Toolkit (POC)
      </h1>
      <h2 class="pb-2">Select your function</h2>
      <select v-model="query">
        <option v-for="(query, key) in queries" :key="key" :value="query.query">
          {{ query.title }}
        </option>
      </select>
      <h2 class="pt-8">Enter your search</h2>
      <input
        type="text"
        class="rounded p-2 mt-4"
        placeholder="Search"
        v-model="search"
      />
      <button
        @click="handleSubmit"
        class="bg-indigo-500 cursor-pointer text-white p-2 rounded shadow mt-4"
      >
        Search
      </button>

      <LoadingSpinner v-if="loading"></LoadingSpinner>
    </div>
    <div class="overflow-auto">
      <pre
        v-if="!loading && results"
        class="h-96 whitespace-pre-wrap overflow-auto"
      >
 {{ results }}</pre
      >
    </div>
  </div>
</template>

<script>
import LoadingSpinner from "./components/LoadingSpinner.vue";
import { searchRequest } from "./api/chatGpt.js";
export default {
  name: "app",
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      search: "",
      results: "",
      loading: false,
      query: "",
      queries: [
        {
          title: "Product Description with benefits",
          query: `Give me a product description and four features and benefits bulled points for the following search query:`,
        },
        {
          title: "Facets/Filters",
          query: `List facets/filters for an e-commerce lister page based on the following search query:`,
        },
        {
          title: "Help and Advice Articles",
          query: `Give me 20 help and advice articles ideas for the following search query:`,
        },
      ],
    };
  },
  methods: {
    async handleSubmit(e) {
      this.loading = true;
      e.preventDefault();
      this.results = await searchRequest(this.search, this.query);
      this.loading = false;
    },
  },
};
</script>

<!-- CSS libraries -->

<!-- Global CSS -->
<style></style>
