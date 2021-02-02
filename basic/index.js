import { createApp } from "vue/dist/vue.esm-browser.js";

const Hello = {
  template: `
      <h3>hello from component</h3>
    `,
};

const app = createApp({
  components: {
    Hello,
  },
  template: `
        <hello />
        <button v-on:click="increment(1)">increment</button>
        <button v-on:click="decrement()">decrement</button>
        <p>{{ count }}</p>

        <div v-if="isEven(count)">
          Even
        </div>
        <div v-else>
          Odd
        </div>
        <div v-for="number in numbers">
          <div :class="getClass(number)" :title="number">
            {{ number }}
          </div>
        </div>

        <input type="checkbox" v-model="value" value="a" />
        <input type="checkbox" v-model="value" value="b" />
        {{ value }}
        <div v-if="error">{{ error }}</div>

    `,
  computed: {
    evenList() {
      return this.numbers.filter((num) => {
        return this.isEven(num);
      });
    },
    error() {
      if (this.value.length < 7) {
        return "Too short";
      }
    },
  },
  data() {
    return {
      //   msg: "world",
      //   person: {
      //     name: "koji",
      //     age: 100,
      //   },
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: ["a"],
    };
  },
  methods: {
    input($evt) {
      this.value = $evt.target.value;
    },
    getClass(number) {
      if (this.isEven(number)) {
        return "red";
      }
      return "blue";
    },
    increment(val) {
      this.count += val;
    },
    isEven(number) {
      return number % 2 === 0;
    },
    decrement() {
      this.count -= 1;
    },
  },
}).mount("#app");

window.app = app;
