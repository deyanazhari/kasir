<template name="component-name">
  <v-row>
    <v-col cols="12">
      <h2>Order</h2>
      <v-list>
        <v-list-item v-for="(item, index) in cartItems" :key="index">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ currency(item.price) }}
              <v-btn icon class="px-0" color="primary" x-small @click="decrement(item.id)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              x
              {{ item.quantity }}
              <v-btn icon class="px-0" color="primary" x-small @click="increment(item.id)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon  color="error" x-small @click="remove(item.id)">
                <v-icon>mdi-close-thick</v-icon>
              </v-btn>
            <v-list-item-title>
              {{ currency(itemTotal(item.price, item.quantity)) }}
            </v-list-item-title>
          </v-list-item-action>
        </v-list-item>
        <v-list-item v-if="cartItems.length" class="text-h6 black--text grey lighten-2">
          <v-list-item-content>
            <v-list-item-title>Sub Total</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-title>{{currency(subTotal)}}</v-list-item-title>
          </v-list-item-action>
        </v-list-item>
        <v-list-group class="black--text grey lighten-2" v-if="cartItems.length" 
        :value="false" 
        >
          <template v-slot:activator>
            <v-list-item-content class="text-h6">
              <v-list-item-title>Additionals</v-list-item-title>
            </v-list-item-content>
          </template>
          <template v-for="(additional,index) in additionals"  >
            <v-list-item disabled class="black--text grey lighten-3" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{additional.title}}</v-list-item-title>
                <v-lis-item-subtitle v-if="additional.mode == 'percentage'">
                  {{currency(additional.value)}}%
                </v-lis-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-title v-if="additional.mode == 'fix'">{{currency(additional.value)}}</v-list-item-title>
                 <v-list-item-title v-else-if="additional.mode == 'percentage'">{{currency(calculatePercentage(additional.value))}}</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list-group>
        <v-list-item v-if="cartItems.length" class="text-h6 black--text grey lighten-2">
          <v-list-item-content>
            <v-list-item-title>Total</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-title>{{currency(total)}}</v-list-item-title>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions('carts',{
      increment: 'increment',
      decrement: 'decrement',
      remove:'remove'
    }),
    currency(value) {
      return Intl.NumberFormat('en-US').format(value)
    },
  },
  computed: {
    ...mapState('carts', {
      items: 'items',
      additionals: 'additionals',
    }),
    ...mapGetters('carts', {
      cartItems: 'cartItems',
      itemTotal: 'itemTotal',
      subTotal: 'subTotal',
      calculatePercentage: 'calculatePercentage',
      total:'total',
    }),

  },
}
</script>