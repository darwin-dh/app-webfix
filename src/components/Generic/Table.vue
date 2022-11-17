<script >
export default {
  props: {
    items: {
      type: Object,
    },
    fields: {
      type: Object,
    },
  },
};
</script>

<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card" id="tasksList">
          <div class="card-header border-0">
            <div class="d-flex align-items-center">
              <h5 class="card-title mb-0 flex-grow-1">Lista Usuarios</h5>
              <div class="flex-shrink-0">
                <button class="btn btn-soft-danger me-1">
                  <i class="ri-delete-bin-2-line"></i>
                </button>
                <button
                  class="btn btn-primary add-btn"
                  data-bs-toggle="modal"
                  href="#showmodal"
                >
                  <i class="ri-add-line align-bottom me-1"></i> Nuevo Usuario
                </button>
              </div>
            </div>
          </div>
          <!--end card-body-->
          <div class="card-body">
            <div class="table-responsive table-card mb-4">
              <table
                class="table align-middle table-nowrap mb-0"
                id="tasksTable"
              >
                <thead class="table-light text-muted">
                  <tr>
                    <th scope="col" style="width: 40px">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="checkAll"
                          value="option"
                        />
                      </div>
                    </th>
                    <th v-for="(item, index) in fields" :key="index">
                      {{ item.key }}
                    </th>
                  </tr>
                </thead>
                <tbody class="list form-check-all">
                  <slot />
                </tbody>
              </table>
              <!--end table-->
              <div class="noresult" style="display: none">
                <div class="text-center">
                  <h5 class="mt-2">Sorry! No Result Found</h5>
                  <p class="text-muted mb-0">
                    We've searched more than 200k+ tasks We did not find any
                    tasks for you search.
                  </p>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-3">
              <div class="pagination-wrap hstack gap-2"></div>
            </div>
          </div>
          <!--end card-body-->
        </div>
        <!--end card-->
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div
      class="modal fade flip"
      id="deleteOrder"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body p-5 text-center">
            <lottie colors="primary:#405189,secondary:#f06548" />
            <div class="mt-4 text-center">
              <h4>You are about to delete a task ?</h4>
              <p class="text-muted fs-14 mb-4">
                Deleting your task will remove all of your information from our
                database.
              </p>
              <div class="hstack gap-2 justify-content-center remove">
                <button
                  class="
                    btn btn-link btn-ghost-success
                    fw-medium
                    text-decoration-none
                  "
                  data-bs-dismiss="modal"
                >
                  <i class="ri-close-line me-1 align-middle"></i> Close
                </button>
                <button class="btn btn-danger" id="delete-record">
                  Yes, Delete It
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end  moddeleteal -->
    <!-- modal-->

    <!--end modal-->
  </div>
</template>