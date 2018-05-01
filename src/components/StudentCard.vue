
<template>
    <div class="enlarge">
        <v-card>
            <v-card-media :src="studentData.avatar" height=" 200px" contain>
            </v-card-media>
            <v-card-title primary-title>
                <div>
                    <v-container fluid grid-list-xs>
                        <v-layout row wrap>
                            <v-flex xs12>
                                <div class="headline ">{{ studentData.firstName }} {{ studentData.lastName }}</div>
                                <span class="grey--text ">{{ studentData.designation }} at {{ studentData.company }} </span>
                                <br>
                                <span class="grey--text ">Campus to Corporate Batch of {{ studentData.year }}</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </div>
            </v-card-title>
            <v-flex xs12 md12>
                <v-card-actions>
                    <v-btn flat color="blue" @click="toggleVisibility">{{ studentData.firstName }}'s take on C2C </v-btn>
                </v-card-actions>
                <v-dialog v-model="show" max-width="400">
                    <v-card>
                        <v-card-title class="headline">Here's what {{studentData.firstName}} has to say</v-card-title>
                        <v-card-text class="text-xs-justify">{{studentData.testimony}}</v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat="flat" @click.native="show = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </v-flex>
        </v-card>
    </div>
</template>

<script>
export default {
  name: 'StudentCard',
  props: {
    studentData: {
      type: Object
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleVisibility() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
.enlarge {
  transition: transform 0.2s ease-in-out;
}
.enlarge:hover {
  transform: scale(1.05, 1.05);
}
</style>
