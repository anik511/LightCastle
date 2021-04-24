<template>
  <div class="featured">
    <b-container>
      <b-row>
        <b-col class="featured-top" cols="12" sm="12" md="6" lg="6">
          <slot name="title"></slot>
        </b-col>
        <b-col class="featured-top" cols="12" sm="12" md="6" lg="6">
          <div class="right">
            <slot name="button"></slot>
          </div>
        </b-col>
        <slot></slot>
        <slot name="contant-1"></slot>
        <slot name="contant-2"></slot>
        <slot name="contant-3"></slot>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SectionSlot",
};
</script>

<style scoped></style>
