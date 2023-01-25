<template>
  <v-card class="flnt-list">
    <v-btn
      elevation="2"
      type="button"
      @click="editItem"
    >
      Edit
    </v-btn>
    <v-btn
      elevation="2"
      type="button"
      @click="addItem"
    >
      Add
    </v-btn>
    <v-list>
      <template v-for="(item) in items">
        <list-item
          v-if="editMode"
          :key="`item_${item.uuid}`"
          :index="item.index"
        />
        <v-row v-else :key="`item_${item.uuid}`">
          <v-col>
            {{ item.name }}
          </v-col>
          <v-col>
            {{ item.quantity }}
          </v-col>
        </v-row>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import ListItem from './ListItem.vue'

export default {
  name: 'FLNTList',
  components: {
    ListItem
  },
  computed: mapState({
    items: state => state.products,
    lastIndex: state => state.lastIndex,
    editMode: state => state.editMode
  }),
  methods: {
    ...mapActions([
      'addProduct'
    ]),
    addItem: function () {
      this.$store.dispatch('addProduct', this.lastIndex + 1)
    },
    editItem: function () {
      this.$store.dispatch('toggleEditMode')
    }
  }
}
</script>
