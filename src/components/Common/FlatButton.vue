<template>
  <div :class="{ 'btn-primary': isPrimary }" class="btn d-flex align-items-center">
    <div>{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component
export default class FlatButton extends Vue {
  @Prop({ required: false, type: String, default: "" })
  private readonly title!: string;

  @Prop({ required: false, type: Boolean, default: false })
  private readonly isPrimary!: boolean;
}
</script>
