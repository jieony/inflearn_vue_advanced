<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
//import { mapGetters } from "vuex";
// import bus from "../utils/bus.js";
import ListMixin from "../mixins/ListMixin.js";
// import bus from "../utils/bus.js";

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {
  //   bus.$emit("start:spinner");
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch("FETCH_ASK")
  //       .then(bus.$emit("end:spinner"))
  //       .catch((error) => console.log(error));
  //   }, 2000);
  // },
};
</script>
