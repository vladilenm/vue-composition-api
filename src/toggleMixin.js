export default {
  data: () => ({
    visible: false
  }),
  methods: {
    toggle() {
      this.visible = !this.visible
    }
  }
}
