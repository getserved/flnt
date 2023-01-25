<!-- eslint-disable require-await -->
<!-- eslint-disable require-await -->
<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="px-2 py-4 d-flex justify-center">
        <v-form ref="form" @submit.prevent="submit">
          <v-row fluid justify="center" align="center">
            <v-col cols="12" sm="12" md="12">
              <data-table :items="items" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="4">
              <v-btn
                elevation="2"
                type="submit"
                color="primary"
                :loading="loading"
                :disabled="loading || !formValid"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

import { v4 as uuidv4 } from 'uuid'
import DataTable from '../components/DataTable.vue'

export default {
  name: 'IndexPage',
  components: {
    DataTable
  },
  data () {
    return {
      uuid: null,
      loader: null,
      loading: false,
      unsubscribe: null,
      rules: [val => (val || '').length > 0 || 'This field is required']
    }
  },
  computed: mapState({
    items: state => state.products,
    formValid () {
      return true
    }
  }),
  methods: {
    submit () {
      this.loading = true
      this.$store.dispatch('updateProducts')
      this.loading = false
    },

    generateIdentifer () {
      return uuidv4()
    }
  }
}
</script>
