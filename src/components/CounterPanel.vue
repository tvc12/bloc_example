<template>
  <div>
    <VueBloc :bloc="bloc" :renderWhen="renderWhen" @onStateChange="handleOnStateChanged">
      <template #default="{ state }">
        <h2>Current state: {{ state.num }}</h2>
        <h3 v-if="isFailed(state)" style="color: red">
          Count failure, try again
        </h3>
      </template>
    </VueBloc>
    <h3>Log</h3>
    <div>
      <template v-for="(log, index) in logs">
        <h4 :key="index" style="color: red">{{ log }}</h4>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CounterBloc } from "@/components/CounterBloc/CounterBloc";
import { CounterFailure, CounterState } from "@/components/CounterBloc/CounterState";

@Component
export default class CounterPanel extends Vue {
  @Prop({ required: true })
  private readonly bloc!: CounterBloc;

  private logs: string[] = [];

  private renderWhen(state: CounterState): boolean {
    return !this.isFailed(state);
  }

  private isFailed(state: CounterState): boolean {
    return state.constructor == CounterFailure;
  }

  private handleOnStateChanged(state: CounterState): void {
    if (this.isFailed(state)) {
      this.logs.push(state.toString());
    }
  }
}
</script>

<style lang="scss" scoped></style>
