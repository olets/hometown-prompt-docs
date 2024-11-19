<script>
import { useContextStore } from "../stores/context";
import { getValue } from "../utils/value";
import set from "../utils/set.js";
import InputComponent from "./InputComponent.vue";

export default {
  components: [InputComponent],
  props: {
    group: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useContextStore();
    return { store };
  },
  computed: {
    options() {
      return Object.fromEntries(
        Object.entries(this.store.data).filter(
          // eslint-disable-next-line no-unused-vars
          ([_k, v]) => v.group.toLowerCase() === this.group.toLowerCase()
        )
      );
    },
  },
  methods: {
    hasNotes() {
      return Object.values(this.options).filter((option) => option.notes)
        .length;
    },
    reset() {
      this.store.$reset();
    },
    set,
    getValue,
  },
};
</script>

<template>
  <form style="display: grid; gap: 8px; width: 100%">
    <table>
      <thead>
        <tr>
          <th>Context</th>
          <th v-if="hasNotes()">
            Notes
          </th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(value, key) in options"
          :key="key"
        >
          <td>
            <label
              :for="`field-${key}`"
              style="display: block"
            >
              {{ value.label }}
            </label>
          </td>

          <td v-if="hasNotes()">
            {{ value?.notes }}
          </td>

          <td>
            <InputComponent
              :the-key="key"
              :value="value"
              @set="set"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>
