<template>
  <section-slot>
    <template v-slot:title>
      <h1>Clients</h1>
    </template>
    <template v-slot:button>
      <b-button variant="outline-dark"
        >See All Clients <b-icon class="arrow-icon" icon="arrow-right"></b-icon
      ></b-button>
    </template>
    <template>
      <ClientCard />
    </template>
  </section-slot>
</template>

<script>
import ClientCard from "@/components/HomeComponents/ClientsComponents/ClientCard.vue";
export default {
  components: { ClientCard },
  name: "Clients",
};
</script>

<style scoped></style>
