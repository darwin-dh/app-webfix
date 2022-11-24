<script >
export default {
  props: {
    verModal: {
      type: Boolean,
    },
  },
  data(props) {
    return {
      visible: false,
      verModal1: props.verModal,
    };
  },
  methods: {
    showModal() {
      console.log(this.verModal1);
      this.visible = this.verModal1;
    },
    handleOk(e) {
      console.log(e);
      this.verModal1 = false;
    },
  },
};
</script>
<template>
  <a-modal :visible="verModal" title="Basic Modal" class="modal1" @ok="handleOk">
    <input type="text" class="from" />
    <input type="text" class="from" />
    <input type="text" class="from" />
    <input type="text" class="from" />
    <input type="text" class="from" />
  </a-modal>

</template>
<style scoped>
.ant-modal-content{
    z-index: 1060!important;
}
</style>