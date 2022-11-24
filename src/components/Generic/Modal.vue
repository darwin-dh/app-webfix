<script>
export default {
  components: {},
  data() {
    return {
      showModal: false,
      target:""
    };
  },
  methods: {
    abrirModal() {
      console.log("object");
      this.showModal = true;
    },
  },
};
</script>

<template>
  <div>
    <button
      type="button"
      class="btn btn-info btn-rounded"
      style="float: right"
      @click="abrirModal()"
    >
      Nuevo Usuario
    </button>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#myModal"
      @click="abrirModal()"
    >
      Standard Modal
    </button>
    <div
      id="myModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
      style="display: none"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="myModalLabel">Modal Heading</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h5 class="fs-15">Overflowing text to show scroll behavior</h5>
            <p class="text-muted">
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin. He lay on
              his armour-like back, and if he lifted his head a little he could
              see his brown belly, slightly domed and divided by arches into
              stiff sections.
            </p>
            <p class="text-muted">
              The bedding was hardly able to cover it and seemed ready to slide
              off any moment. His many legs, pitifully thin compared with the
              size of the rest of him, waved about helplessly as he looked.
              "What's happened to me?" he thought.
            </p>
            <p class="text-muted">
              It wasn't a dream. His room, a proper human room although a little
              too small, lay peacefully between its four familiar walls.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary">Save Changes</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
  </div>
</template>