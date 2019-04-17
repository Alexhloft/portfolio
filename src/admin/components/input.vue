<template lang="pug">
  label.input(
    :class="[iconClass, {'error' : !!errorText}]"
  )
    span.input__title(v-if="title") {{title}} 
    input(
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    ).input__elem.field__elem
    .input__error-tooltip
      errors-tooltip(
        :errorText="errorText"
      )
</template>

<script>
import errorsTooltip from "./errors-tooltip";

export default {
  inheritAttrs: false,
  props: {
    title: String,
    errorText: String,
    icon: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconClass() {
      const iconName = this.icon;
      return iconName.length ? ` input_iconed input_icon-${iconName}` : "";
    }
  },
  components: {
    errorsTooltip
  }
};
</script>