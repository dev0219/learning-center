<template>
    <q-layout view="hHh LpR fff">
        <q-header bordered class="bg-primary text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar square>
                        <img src="~/assets/nycirb-logo-icon.svg" />
                    </q-avatar>
                    Learning Center
                </q-toolbar-title>

                <q-input dense v-model="text" class="q-ml-md">
                    <template v-slot:append>
                        <q-icon v-if="text === ''" name="search" />
                        <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
                    </template>
                </q-input>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer bordered class="bg-grey-8 text-white">
            <q-toolbar> </q-toolbar>
        </q-footer>
    </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        return {
            text: ref(''),
        }
    },
}
</script>

<style>
.navigation-nycirb-logo {
    height: 50px;
}
</style>
