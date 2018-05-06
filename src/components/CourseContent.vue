<template>
  <v-container grid-list-xl>
    <v-layout row wrap justify-space-around v-resize="onResize">
      <v-flex xs10 sm10>
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
      <v-flex xs12 sm12 md10 xl10>
        <h2 class="headline blue--text pl-3 pb-2 ">Venue</h2>
        <blockquote class="pl-3 pb-3 text-xs-justify">
          <GmapMap :center="{lat:19.119791, lng:72.845654}" :zoom="16" map-type-id="hybrid" :style=getDimensions()>
            <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
          </GmapMap>
          <br> Kossine, 3rd Floor, BEST Commercial Complex, B - Building, Station Road, Andheri West, Mumbai, 400067 Landmark: Near McDonalds</blockquote>
        <h2 class="headline blue--text pl-3 pb-2 ">Pricing</h2>
        <blockquote class="pl-3 pb-3 text-xs-justify">The course will be broken down into 11 sessions of 4 hours each. Hands on coding practice is ensured which is why machines are required. We need a machine for each session. We need you to understand that is not a theory course. We get our hands dirty and learn to code. Also, we will have a separate session - 12th session to understand a few database concepts required for many dream company interviews</blockquote>
        <v-list three-line subheader>
          <v-list-tile v-for="plan in pricing" :key="plan.cost">
            <v-list-tile-content>
              <v-list-tile-title>
                <div class="subheading blue--text">INR {{plan.cost}}/-</div>
              </v-list-tile-title>
              <v-list-tile-sub-title>{{plan.details}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as courseContent from '../data/courseContent';

export default {
  name: 'CourseContent',
  data() {
    return {
      width: 500,
      pricing: [
        {
          cost: '5000',
          details: 'Incase you can get your own laptop'
        },
        {
          cost: '6500',
          details: 'Incase you cannot bring your laptop'
        }
      ],
      courseContent: [],
      visible: [],
      markers: [{ position: { lat: 19.119791, lng: 72.845654 } }]
    };
  },
  methods: {
    onResize() {
      this.width = window.innerWidth - 50;
    },
    getDimensions() {
      return `width: ${this.width}; height: 300px`;
    }
  },
  created() {
    this.courseContent = courseContent;
  }
};
</script>