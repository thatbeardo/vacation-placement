<template>
  <v-flex>
    <br><br>
    <h2 class="headline blue--text">{{ instructorData.name }}</h2>
    <h2 class="subheading grey--text">{{ instructorData.designation }} at {{instructorData.company}}</h2>
    <v-layout row wrap>
      <v-flex xs12 md6 xl6>
        <img :src="instructorData.image" alt="" width="400px">
      </v-flex>
      <v-flex xs12 md6 xl6 class="text-xs-justify">{{instructorData.about}}</v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  name: "InstructorCard",
  data() {
    return {
      imagePreUrl: "../assets/"
    };
  },
  props: {
    instructorData: {
      type: Object
    }
  }
};
</script>