<template>
  <v-container>
    <v-container>
      <v-flex xs12 md12 xl12>
        <h2 class="headline blue--text">{{ instructorData.name }}</h2>
        <h2 class="subheading grey--text">{{ instructorData.designation }} at {{instructorData.company}}</h2>
      </v-flex>
    </v-container>
    <v-container grid-list-xl>
      <v-layout row wrap justify-space-between v-resize="onResize">
        <v-flex xs12 md6 xl6 align-content-space-between>
          <v-avatar tile :size="width" class="grey lighten-4">
            <img :src="instructorData.image" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex xs12 md6 xl6 class="text-xs-justify subheading">
          <blockquote>{{instructorData.about}}
            <v-icon x-large>format_quote</v-icon>
          </blockquote>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'InstructorCard',
  data() {
    return {
      imagePreUrl: '../assets/'
    };
  },
  data() {
    return {
      width: '400px'
    };
  },
  props: {
    instructorData: {
      type: Object
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 400) {
        this.width = '300px';
      }
    }
  }
};
</script>