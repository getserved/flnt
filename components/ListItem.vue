<!-- Please remove this file from your project -->
<template>
  <v-row class="list-item">
    <v-col>
      <v-text-field
        v-model="productName"
        label="Name"
        placeholder="Name"
        :rules="rules"
      />
    </v-col>
    <v-col>
      <v-text-field
        v-model="productQuantity"
        label="Quantity"
        placeholder="Quantity"
        :rules="rules"
      />
    </v-col>
    <v-col>
      <v-btn
        color="primary"
        depressed
        @click="delItem"
      >
        Remove
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ListItem',
  props: {
    index: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
      productName: '',
      productQuantity: '',
      uuid: null,
      loader: null,
      loading: false,
      unsubscribe: null,
      rules: [val => (val || '').length > 0 || 'This field is required']
    }
  },
  computed: {
    formValid () {
      return this.productName && this.productQuantity
    }
  },
  methods: {
    ...mapActions([
      'delProduct'
    ]),

    delItem: function () {
      this.$store.dispatch('delProduct', this.index)
    }
  }
}
</script>
