<template>
  <v-row>
    <v-col v-for="(product, index) in products" cols="2">
      <v-card :title="product.title">
        <v-card-actions>
          <v-img
            :src="require(`@/assets/images/products/$(product.thumbnail)`)"
          >
          </v-img>
        </v-card-actions>
        <v-card-text>
          {{ product.title }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'asus Zenfone',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          category: 1,
        },
        {
          id: 2,
          title: 'Canon Eos 700d',
          thumbnail: 'canon-eos-700d.png',
          price: 4300000,
          categoryId: 2,
        },
        {
          id: 3,
          title: 'Canon Eos 750d',
          thumbnail: 'canon-eos-750d.png',
          price: 5400000,
          categoryId: 2,
        },
        {
          id: 4,
          title: 'Iphone 6 Silver',
          thumbnail: 'iphone-6-silver.png',
          price: 2500000,
          categoryId: 1,
        },
        {
          id: 5,
          title: 'Lenovo A7000',
          thumbnail: 'Lenovo-A7000.png',
          price: 1500000,
          categoryId: 1,
        },
        {
          id: 6,
          title: 'Lg Led Tv 32LF550A',
          thumbnail: 'lg-32-led-tv-32LF550A.png',
          price: 2500000,
          categoryId: 3,
        },
        {
          id: 7,
          title: 'Lg Led Tv 32LF520A',
          thumbnail: 'lg-led-tv32-32LF520A.png',
          price: 2700000,
          categoryId: 3,
        },
        {
          id: 8,
          title: 'Mi 4i',
          thumbnail: 'mi-4i.png',
          price: 1800000,
          categoryId: 1,
        },
        {
          id: 9,
          title: 'Nikon D3200',
          thumbnail: 'nikon-d3200.png',
          price: 4500000,
          categoryId: 2,
        },
        {
          id: 10,
          title: 'Nikon D5200',
          thumbnail: 'nikon-d5200.png',
          price: 6500000,
          categoryId: 2,
        },
        {
          id: 11,
          title: 'Galaxy A3',
          thumbnail: 'samsung-galaxy-A3.png',
          price: 3000000,
          categoryId: 1,
        },
        {
          id: 12,
          title: 'Galaxy A8',
          thumbnail: 'samsung-galaxy-A8.png',
          price: 4100000,
          categoryId: 1,
        },
        {
          id: 13,
          title: 'Galaxy Grand Prime',
          thumbnail: 'samsung-galaxy-grand-prime.png',
          price: 2100000,
          categoryId: 1,
        },
        {
          id: 14,
          title: 'Galaxy Note 3',
          thumbnail: 'samsung-galaxy-note-3.png',
          price: 4100000,
          categoryId: 1,
        },
        {
          id: 15,
          title: 'Sharp Led TV 32LE265i',
          thumbnail: 'sharp-32-led-32LE265i.png',
          price: 2300000,
          categoryId: 3,
        },
      ],
    }
  },
}
</script>
