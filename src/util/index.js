let Vue;
class Store {
  constructor(options = {}) {
    this.state = new Vue({
      data: options.state
    });
    this.mutations = options.mutations || {};
    this.actions = options.actions || {};
  }
  commit = (type, arg)=>{
    console.log(this.mutations);
    console.log(`this.mutations[${type}](${this.state},${arg})`);
    if (!this.mutations[type]) {
      console.log("不合法的mutation");
      return;
    }
    this.mutations[type](this.state,arg)
  }
  dispatch(type, arg) {
    this.actions[type](
      {
        commit: this.commit,
        state: this.state
      },
      arg
    );
  }
}
function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      const options = this.$options;
      if (options.store) {
        this.$store =
          typeof options.store === "function" ? options.store() : options.store;
      } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store;
      }
    }
  });
}
export default {
  Store,
  install
};
