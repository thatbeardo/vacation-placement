
<template>
    <v-card>
        <v-card-title primary-title>
            <div>
                <v-container grid-list-xs>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <div class="headline">{{ studentData.firstName }} {{ studentData.lastName }}</div>
                        </v-flex>
                        <v-flex xs12>
                            <span class="grey--text">{{ studentData.designation }} at {{ studentData.company }} </span>
                            <br>
                            <span class="grey--text">Campus to Corporate Batch of {{ studentData.year }}</span>
                        </v-flex>
                    </v-layout>
                </v-container>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-btn flat color="blue" @click.native="show = !show">Here's what {{ studentData.firstName }} has to say</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click.native="show = !show">
                <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
            <v-card-text v-show="show">
                {{ studentData.testimony }}
            </v-card-text>
        </v-slide-y-transition>
    </v-card>
</template>

<script>
export default {
  name: "StudentCard",
  props: {
    studentData: {
      type: Object
    }
  },
  data() {
    return {
      show: false
    };
  }
};
</script>