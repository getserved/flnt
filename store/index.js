import { v4 as uuidv4 } from 'uuid'
import { collection, query, onSnapshot } from 'firebase/firestore'
import { db, projectId, region } from '../plugins/firebase.js'

export const generateIdentifer = () => {
  return uuidv4()
}

export const state = () => ({
  products: [],
  tableLoading: false
})

export const getters = {
  getProducts (state) {
    return state.products
  },

  getTableLoading (state) {
    return state.tableLoading
  }
}

export const mutations = {
  addProduct (state, val) {
    state.products.push(val)
    state.lastIndex++
  },
  editProduct (state, val) {
    Object.assign(state.products[val.editedIndex], val.editedItem)
  },
  updateProducts (state, val) {
    state.products = [...val]
  },

  delProduct (state, val) {
    state.products.splice(val, 1)
  },

  updateTableLoading (state, val) {
    state.tableLoading = val
  }
}

export const actions = {
  async fetchProducts ({ commit }, payload) {
    const q = query(collection(db, 'products'))
    await onSnapshot(q, (snapshot) => {
      const change = snapshot.docChanges()[0]
      commit('updateProducts', change.doc.data().list)
    })
  },

  updateProducts ({ commit, state, dispatch }, payload) {
    this.$axios({
      method: 'post',
      url: `/${projectId}/${region}/updateDoc`,
      data: {
        list: state.products
      }
    }).then(() => {
      dispatch('fetchProducts')
    })
  },

  addProduct ({ commit }, payload) {
    commit('addProduct', { uuid: generateIdentifer(), ...payload })
  },

  editProduct ({ commit }, payload) {
    commit('editProduct', { uuid: generateIdentifer(), ...payload })
  },

  delProduct ({ commit }, payload) {
    commit('delProduct', payload)
  }
}
