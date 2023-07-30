<template>
    <q-page class="q-pa-xl">
        <q-card class="q-mx-auto q-mt-xl q-pa-lg">
            {{data}}
        </q-card>
    </q-page>
</template>

<script>
import axios from 'axios'
import settings from '../setting.json'

export default {
  data() {
    return {
      data: {},
      urlApi: `${settings.environments.prod.api.uri}`,
      cargando: true
    };
  },

  methods: {
    async getData() {
            axios
                .get(this.urlApi)   
                .then(response => {
                    console.log("--- response data")
                    console.log(response)
                    this.data = response['data']
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => this.cargando = false)
        }
  },

  created() {
    this.getData();
  },
};
</script>

<style></style>
