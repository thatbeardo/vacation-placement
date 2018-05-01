<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="my-5" v-for="(session, index) in courseContent" :key="index">
        <v-card-media :src=session.image height="400px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{session.title}}</div>
            <span class="grey--text">{{session.summary}}</span>
            <v-btn icon @click.native="visible.includes(index)? visible.splice(visible.indexOf(index), 1): visible.push(index)">
              <v-icon>{{ visible.includes(index) ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <v-slide-y-transition>
          <v-card-text v-show="visible.includes(index)">
            {{session.details}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import * as courseContent from '../data/courseContent';

export default {
  name: 'CourseContent',
  data() {
    return {
      courseContent: [],
      visible: []
    };
  },
  created() {
    this.courseContent = courseContent;
  }
};
</script>