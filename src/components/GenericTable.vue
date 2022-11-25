
<script>
export default {
  props: {
    fields: Object,
    items: Object,
  },
};
</script>

<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-header border-0">
          <b-row>
            <b-col sm="7" cols="12">
              <button class="btn btn-primary-900 add-btn fw-bolder rounded-3">
                <router-link to="link" class="nav-link custom-abc">
                  <i
                    class="ri-add-line align-bottom me-1 fw-bold text-white"
                  ></i>
                  Agregar Plan de cuentas
                </router-link>
              </button>
            </b-col>
            <b-col sm="5" cols="12" class="float-sm-end">
              <div class="form-icon right">
                <input
                  type="email"
                  class="form-control form-control-icon"
                  placeholder="BUSCAR..."
                />
                <i class="ri-search-2-line fs-5"></i>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="card-body border border-dashed border-end-0 border-start-0">
          <form>
            <div class="row g-3">
              <div class="col-xxl-5 col-sm-12">
                <div class="search-box">
                  <input
                    type="text"
                    class="form-control search bg-light border-light"
                    placeholder="Search for tasks or something..."
                  />
                  <i class="ri-search-line search-icon"></i>
                </div>
              </div>

              <div class="col-xxl-3 col-sm-4">
                <div class="input-light"></div>
              </div>
              <div class="col-xxl-1 col-sm-4">
                <button type="button" class="btn btn-primary w-100">
                  <i class="ri-equalizer-fill me-1 align-bottom"></i>
                  Filters
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="card-body">
          <div class="col-lg-12 table-responsive">
            <table class="table align-right mb-0 table-hover table-striped">
              <thead
                class="text-white text-bold text-uppercase border tabla-color"
              >
                <tr>
                  <th v-for="(item, index) in fields" :key="index">
                    {{ item.key }}
                  </th>
                </tr>
              </thead>
              <tbody class="list form-check-all">
                <tr v-for="(data, index) of items" :key="index">
                  <td class="id">{{ data.id_ctas }}</td>
                  <td class="project_name">{{ data.codcta }}</td>
                  <td class="project_name">{{ data.nomcta }}</td>

                  <td>
                    <div class="d-flex align-items-center acciones">
                      <button
                        class="
                          btn btn-outline-info
                          d-flex
                          align-items-center
                          text-info
                          px-2
                        "
                        @click="see(data)"
                      >
                        <i class="mdi mdi-eye mr-2"></i>
                        Ver
                      </button>

                      <button
                        data-bs-toggle="modal"
                        href="#showmodal"
                        class="
                          btn btn-outline-warning
                          d-flex
                          align-items-center
                          text-warning
                          px-2
                        "
                        @click="edit(data)"
                      >
                        <i class="mdi mdi-pencil-box-outline"></i> Editar
                      </button>
                      <button
                        class="
                          btn btn-outline-danger
                          d-flex
                          align-items-center
                          text-danger-900
                          px-2
                        "
                        @click="delet(data)"
                      >
                        <i class="mdi mdi-trash-can-outline"></i>Borrar
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <!--end table-->
            <div class="noresult" style="display: none">
              <div class="text-center">
                <h5 class="mt-2">Sorry! No Result Found</h5>
                <p class="text-muted mb-0">
                  We've searched more than 200k+ tasks We did not find any tasks
                  for you search.
                </p>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end mt-3">
            <div class="pagination-wrap hstack gap-2">
              <a class="page-item pagination-prev disabled" href="#">
                Previous
              </a>
              <!--           <ul class="pagination listjs-pagination mb-0">
                <li
                  :class="{
                    active: pageNumber == page,
                    disabled: pageNumber == '...',
                  }"
                  v-for="(pageNumber, index) in pages.slice(page - 1, page + 5)"
                  :key="index"
                  @click="page = pageNumber"
                >
                  <a class="page" href="#">{{ pageNumber }}</a>
                </li>
              </ul> -->
              <!--               <a
                class="page-item pagination-next"
                href="#"
                @click="page++"
                v-if="page < pages.length"
              >
                Next
              </a> -->
            </div>
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

  <div
    class="modal fade zoomIn"
    id="showmodal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0">
        <div class="modal-header p-3 bg-soft-info">
          <h5 class="modal-title" id="exampleModalLabel"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            id="close-modal"
          ></button>
        </div>
        <form id="addform">
          <div class="modal-body">
            <div class="row g-3">
              <input type="hidden" id="id" name="" />
              <div class="col-lg-12">
                <label for="projectName-field" class="form-label"
                  >Project Name</label
                >
                <input
                  type="text"
                  id="projectName"
                  class="form-control"
                  placeholder="Project name"
                  required
                />
              </div>
              <!--end col-->
              <div class="col-lg-12">
                <div>
                  <label for="tasksTitle-field" class="form-label">Title</label>
                  <input
                    type="text"
                    id="tasksTitle"
                    class="form-control"
                    placeholder="Title"
                    required
                  />
                </div>
              </div>
              <!--end col-->
              <div class="col-lg-12">
                <label for="createName-field" class="form-label"
                  >Client Name</label
                >
                <input
                  type="text"
                  id="createName"
                  class="form-control"
                  placeholder="Client name"
                  required
                />
              </div>
              <!--end col-->
              <div class="col-lg-12">
                <label class="form-label">Assigned To</label>
                <div data-simplebar style="height: 95px">
                  <ul class="list-unstyled vstack gap-2 mb-0">
                    <li>
                      <div class="form-check d-flex align-items-center">
                        <input
                          class="form-check-input me-3"
                          type="checkbox"
                          value=""
                          id="anna-adame"
                        />
                        <label
                          class="form-check-label d-flex align-items-center"
                          for="anna-adame"
                        >
                          <span class="flex-shrink-0">
                            <img
                              src=""
                              alt=""
                              class="avatar-xxs rounded-circle"
                            />
                          </span>
                          <span class="flex-grow-1 ms-2"> Anna Adame </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check d-flex align-items-center">
                        <input
                          class="form-check-input me-3"
                          type="checkbox"
                          value=""
                          id="frank-hook"
                        />
                        <label
                          class="form-check-label d-flex align-items-center"
                          for="frank-hook"
                        >
                          <span class="flex-shrink-0">
                            <img
                              src=""
                              alt=""
                              class="avatar-xxs rounded-circle"
                            />
                          </span>
                          <span class="flex-grow-1 ms-2"> Frank Hook </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check d-flex align-items-center">
                        <input
                          class="form-check-input me-3"
                          type="checkbox"
                          value=""
                          id="alexis-clarke"
                        />
                        <label
                          class="form-check-label d-flex align-items-center"
                          for="alexis-clarke"
                        >
                          <span class="flex-shrink-0">
                            <img
                              src=""
                              alt=""
                              class="avatar-xxs rounded-circle"
                            />
                          </span>
                          <span class="flex-grow-1 ms-2"> Alexis Clarke </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check d-flex align-items-center">
                        <input
                          class="form-check-input me-3"
                          type="checkbox"
                          value=""
                          id="herbert-stokes"
                        />
                        <label
                          class="form-check-label d-flex align-items-center"
                          for="herbert-stokes"
                        >
                          <span class="flex-shrink-0">
                            <img
                              src=""
                              alt=""
                              class="avatar-xxs rounded-circle"
                            />
                          </span>
                          <span class="flex-grow-1 ms-2"> Herbert Stokes </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check d-flex align-items-center">
                        <input
                          class="form-check-input me-3"
                          type="checkbox"
                          value=""
                          id="michael-morris"
                        />
                        <label
                          class="form-check-label d-flex align-items-center"
                          for="michael-morris"
                        >
                          <span class="flex-shrink-0">
                            <img
                              src=""
                              alt=""
                              class="avatar-xxs rounded-circle"
                            />
                          </span>
                          <span class="flex-grow-1 ms-2"> Michael Morris </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check d-flex align-items-center">
                        <input
                          class="form-check-input me-3"
                          type="checkbox"
                          value=""
                          id="nancy-martino"
                        />
                        <label
                          class="form-check-label d-flex align-items-center"
                          for="nancy-martino"
                        >
                          <span class="flex-shrink-0">
                            <img
                              src=""
                              alt=""
                              class="avatar-xxs rounded-circle"
                            />
                          </span>
                          <span class="flex-grow-1 ms-2"> Nancy Martino </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check d-flex align-items-center">
                        <input
                          class="form-check-input me-3"
                          type="checkbox"
                          value=""
                          id="thomas-taylor"
                        />
                        <label
                          class="form-check-label d-flex align-items-center"
                          for="thomas-taylor"
                        >
                          <span class="flex-shrink-0">
                            <img
                              src=""
                              alt=""
                              class="avatar-xxs rounded-circle"
                            />
                          </span>
                          <span class="flex-grow-1 ms-2"> Thomas Taylor </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check d-flex align-items-center">
                        <input
                          class="form-check-input me-3"
                          type="checkbox"
                          value=""
                          id="tonya-noble"
                        />
                        <label
                          class="form-check-label d-flex align-items-center"
                          for="tonya-noble"
                        >
                          <span class="flex-shrink-0">
                            <img
                              src=""
                              alt=""
                              class="avatar-xxs rounded-circle"
                            />
                          </span>
                          <span class="flex-grow-1 ms-2"> Tonya Noble </span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!--end col-->
              <div class="col-lg-6">
                <label for="duedate-field" class="form-label">Due Date</label>
                <flat-pickr
                  placeholder="Select date"
                  class="form-control flatpickr-input"
                  id="date"
                ></flat-pickr>
              </div>
            </div>
            <!--end row-->
          </div>
          <div class="modal-footer">
            <div class="hstack gap-2 justify-content-end">
              <button
                type="button"
                class="btn btn-light"
                data-bs-dismiss="modal"
                id="closemodal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-success" id="add-btn">
                Add Task
              </button>
              <button type="button" class="btn btn-success" id="edit-btn">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!--end modal-->
</template>