import Vuex from 'vuex';
import Vue from 'vue';
import { instruction } from './modules/instruction.module'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    instruction
  }
})