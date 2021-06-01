<template>
  <div id="app">
    <div>
      <button style="margin-right: 4px" @click.stop="increase">Increase</button>
      <button @click.stop="decrease">Decrease</button>
    </div>
    <CounterPanel :bloc="bloc"></CounterPanel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CounterBloc } from "@/components/CounterBloc/CounterBloc";
import CounterPanel from "@/components/CounterPanel.vue";
import { DecreaseCounter, IncreaseCounter } from "@/components/CounterBloc/CounterEvent";

@Component({
  components: {
    CounterPanel
  }
})
export default class App extends Vue {

  private bloc = new CounterBloc();

  private increase() {
    this.bloc.add(new IncreaseCounter());
  }

  private decrease() {
    this.bloc.add(new DecreaseCounter());
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
