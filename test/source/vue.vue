<template>
	<template>
  <!-- ✓ GOOD -->
  <my-component v-slot="data">
    {{ data }}
  </my-component>
  <my-component>
    <template v-slot:default>
      default
    </template>
    <template v-slot:one>
      one
    </template>
    <template v-slot:two>
      two
    </template>
  </my-component>

  <!-- ✗ BAD -->
  <div v-slot="data">
    {{ data }}
  </div>
  <div>
    <template v-slot:one>
      one
    </template>
  </div>

  <my-component v-slot:one="data">
    {{ data }}
  </my-component>
  <my-component v-slot="data">
    {{ data }}
    <template v-slot:one>
      one
    </template>
  </my-component>

  <my-component v-slot:one v-slot:two>
    one and two
  </my-component>
  <my-component>
    <template v-slot:one>
      one 1
    </template>
    <template v-slot:one>
      one 2
    </template>
  </my-component>

  <my-component>
    <template v-slot:[data]="data">
      dynamic?
    </template>
  </my-component>

  <my-component v-slot.mod="data">
    {{ data }}
  </my-component>

  <my-component v-slot>
    content
  </my-component>
</template>

</template>

<script setup lang="ts">
// Should indicate that no value is returned (void)
function test() {
  return;
}

// Should indicate that a number is returned
var fn = function () {
  return 1;
};

// Should indicate that a string is returned
var arrowFn = () => 'test';

class Test {
  // Should indicate that no value is returned (void)
  method() {
    return;
  }
}
</script>

<style scoped>

</style>