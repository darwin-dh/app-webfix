<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import Swal from "sweetalert2";
import axios from "axios";
import animationData from "@/components/widgets/msoeawqm.json";
import animationData1 from "@/components/widgets/gsqxdxog.json";
import Lottie from "@/components/widgets/lottie.vue";

export default {
  page: {
    title: "List View",
    meta: [
      {
        name: "description",
       
      },
    ],
  },
  data() {
    return {
      //getDATA
      ListUser: [],
      ListaPerfiles: [],
      //form
      Nombre: "darw0001",
      Apellido: "quishpe001",
      Email: "",
      Password: "",
      Perfil: "",
      Estado: "",
      title: "List View",
      items: [
        {
          text: "Tasks",
          href: "/",
        },
        {
          text: "List View",
          active: true,
        },
      ],
      date3: null,
      rangeDateconfig: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "d M, Y",
        mode: "range",
      },
      config: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "d M, Y",
      },
      timeConfig: {
        enableTime: false,
        dateFormat: "d M, Y",
      },
      filterdate: null,
      filterdate1: null,
      filtervalue: "All",
      filtervalue1: "All",
      filtersearchQuery1: null,
      date: null,
      allTask: [
        {
          id: 1,
          taskId: "#VLZ632",
          project: "Velzon - v1.0.0",
          task: "Error message when placing an orders?",
          creater: "Robert McMahon",
          subItem: [
            {
              id: 1,
              img: require("@/assets/images/users/avatar-1.jpg"),
            },
            {
              id: 2,
              img: require("@/assets/images/users/avatar-1.jpg"),
            },
          ],
          dueDate: "Administrador",
          status: "Inprogress",
          statusClass: "secondary",
          priority: "High",
          priorityClass: "danger",
        },
        {
          id: 2,
          taskId: "#VLZ453",
          project: "Skote - v1.0.0",
          task: "Profile Page Satructure",
          creater: "Mary Cousar",
          subItem: [
            {
              id: 1,
              img: require("@/assets/images/users/avatar-1.jpg"),
            },
            {
              id: 2,
              img: require("@/assets/images/users/avatar-1.jpg"),
            },
            {
              id: 3,
              img: require("@/assets/images/users/avatar-1.jpg"),
            },
          ],
          dueDate: "Administrador",
          status: "New",
          statusClass: "info",
          priority: "Low",
          priorityClass: "success",
        },
        {
          id: 3,
          taskId: "#VLZ454",
          project: "Skote - v2.3.0",
          task: "Apologize for shopping Error!",
          creater: "Nathan Cole",
          subItem: [
            {
              id: 1,
              img: require("@/assets/images/users/avatar-1.jpg"),
            },
            {
              id: 2,
              img: require("@/assets/images/users/avatar-1.jpg"),
            },
            {
              id: 3,
              img: require("@/assets/images/users/avatar-1.jpg"),
            },
            {
              id: 4,
              img: require("@/assets/images/users/avatar-1.jpg"),
            },
          ],
          dueDate: "Administrador",
          status: "Completed",
          statusClass: "success",
          priority: "Medium",
          priorityClass: "warning",
        },
        {
          id: 4,
          taskId: "#VLZ455",
          project: "Minia - v1.4.0",
          task: "Post launch reminder/ post list",
          creater: "Joseph Parker",
          subItem: [
            {
              id: 1,
              img: require("@/assets/images/users/avatar-1.jpg"),
            },
          ],
          dueDate: "Administrador",
          status: "Pending",
          statusClass: "warning",
          priority: "High",
          priorityClass: "danger",
        },
      ],
      searchQuery: null,
      page: 1,
      perPage: 8,
      pages: [],
      defaultOptions: {
        animationData: animationData,
      },
      defaultOptions1: {
        animationData: animationData1,
      },
    };
  },
  components: {
    lottie: Lottie,
    Multiselect,
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.allTask);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.taskId.toLowerCase().includes(search) ||
            data.task.toLowerCase().includes(search) ||
            data.project.toLowerCase().includes(search) ||
            data.creater.toLowerCase().includes(search) ||
            data.dueDate.toLowerCase().includes(search) ||
            data.status.toLowerCase().includes(search) ||
            data.priority.toLowerCase().includes(search)
          );
        });
      } else if (this.filterdate !== null) {
        console.log(this.filterdate);
        if (this.filterdate !== null) {
          var date1 = this.filterdate.split(" to ")[0];
          var date2 = this.filterdate.split(" to ")[1];
        }
        return this.displayedPosts.filter((data) => {
          if (
            new Date(data.dueDate.slice(0, 12)) >= new Date(date1) &&
            new Date(data.dueDate.slice(0, 12)) <= new Date(date2)
          ) {
            return data;
          } else {
            return null;
          }
        });
      } else if (this.filtervalue !== null) {
        return this.displayedPosts.filter((data) => {
          console.log(this.filtervalue);
          if (data.status === this.filtervalue || this.filtervalue == "All") {
            return data;
          } else {
            return null;
          }
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {
    allTask() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
    this.getUser();
    this.getPerfiles();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },

  methods: {
    async getUser() {
      const result = await axios.get(
        "/api/lista-Usuarios"
      );
      const data = result.data.data;
      this.ListUser = data;
      console.log(data);
    },
    SearchData() {
      this.searchQuery = this.filtersearchQuery1;
      this.filterdate = this.filterdate1;
      this.filtervalue = this.filtervalue1;
    },
    editdata(data) {
      document.getElementById("exampleModalLabel").innerHTML = "Editar Usuario";
      document.getElementById("id").value = data._id;
      document.getElementById("projectName").value = data.project;
      document.getElementById("tasksTitle").value = data.task;
      document.getElementById("createName").value = data.creater;
      document.getElementById("date").value = data.dueDate;
      this.value1 = data.status;
      this.value3 = data.priority;
      document.getElementById("edit-btn").style.display = "block";
      document.getElementById("add-btn").style.display = "none";
    },
    updateorder() {
      let result = this.allTask.findIndex(
        (o) => o._id == document.getElementById("id").value
      );

      this.allTask[result].project =
        document.getElementById("projectName").value;
      this.allTask[result].task = document.getElementById("tasksTitle").value;
      this.allTask[result].creater =
        document.getElementById("createName").value;
      this.allTask[result].dueDate = document.getElementById("date").value;
      this.allTask[result].status = this.value1;
      this.allTask[result].priority = this.value3;
      document.getElementById("closemodal").click();
      axios
        .patch(
          `https://api-node.themesbrand.website/apps/task/${this.allTask[result]._id}`,
          this.allTask[result]
        )
        .then(() => {})
        .catch((er) => {
          console.log(er);
        });
    },
    deletedata(event) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#f46a6a",
        confirmButtonColor: "#34c38f",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.allTask.splice(this.allTask.indexOf(event), 1);
          axios
            .delete(
              `https://api-node.themesbrand.website/apps/task/${event._id}`
            )
            .then(() => {})
            .catch((er) => {
              console.log(er);
            });
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    deleteMultiple() {
      let ids_array = [];
      var items = document.getElementsByName("chk_child");
      items.forEach(function (ele) {
        if (ele.checked == true) {
          var trNode = ele.parentNode.parentNode.parentNode;
          var id = trNode.querySelector(".id a").innerHTML;
          ids_array.push(id);
        }
      });
      if (typeof ids_array !== "undefined" && ids_array.length > 0) {
        if (confirm("Are you sure you want to delete this?")) {
          var cusList = this.allTask;
          ids_array.forEach(function (id) {
            cusList = cusList.filter(function (allTask) {
              return allTask.taskId != id;
            });
          });
          this.allTask = cusList;
          document.getElementById("checkAll").checked = false;
          var itemss = document.getElementsByName("chk_child");
          itemss.forEach(function (ele) {
            if (ele.checked == true) {
              ele.checked = false;
              ele.closest("tr").classList.remove("table-active");
            }
          });
        } else {
          return false;
        }
      } else {
        Swal.fire({
          title: "Please select at least one checkbox",
          confirmButtonClass: "btn btn-info",
          buttonsStyling: false,
          showCloseButton: true,
        });
      }
    },
    addorder() {
      var id = this.allTask.length + 1;
      var project = document.getElementById("projectName").value;
      var task = document.getElementById("tasksTitle").value;
      var creater = document.getElementById("createName").value;
      var dueDate = document.getElementById("date").value;
      var status = "Inprogress";
      var priority = "High";
      var statusClass = "secondary";
      var priorityClass = "danger";

      var data = {
        id: id,
        taskId: "#VZ1D24",
        project: project,
        task: task,
        creater: creater,
        dueDate: dueDate,
        status: status,
        priority: priority,
        statusClass: statusClass,
        priorityClass: priorityClass,
        subItem: [
          {
            id: 1,
            img: require("@/assets/images/users/avatar-1.jpg"),
          },
          {
            id: 2,
            img: require("@/assets/images/users/avatar-1.jpg"),
          },
        ],
      };
      this.allTask.push(data);
      axios
        .post(`https://api-node.themesbrand.website/apps/task`, data)
        .then(() => {})
        .catch((er) => {
          console.log(er);
        });
      document.getElementById("closemodal").click();
      document.getElementById("addform").reset();
    },
    async save() {
        console.log(this.Perfil);
      const data = {
        email: this.Email,
        nombre: this.Nombre,
        apellido: this.Apellido,
        contrasena: this.Password,
        perfil: this.Perfil,
        estado: this.Estado,
      };

      try {
        const result = await axios.post(
          "/api/registro",
          data
        );
        if (result.data.mesage === "YES") {
          this.getUser();
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getPerfiles() {
      const result = await axios.get(
        "/api/lista-Perfiles"
      );
      const data = result.data.data;
      this.ListaPerfiles = data;
    },
    addnew() {
      document.getElementById("addform").reset();
      document.getElementById("exampleModalLabel").innerHTML = "Nuevo Usuario";
      document.getElementById("add-btn").style.display = "block";
      document.getElementById("edit-btn").style.display = "none";
    },
    setPages() {
      let numberOfPages = Math.ceil(this.allTask.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(allTask) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return allTask.slice(from, to);
    },
  },
  mounted() {
    var checkAll = document.getElementById("checkAll");
    if (checkAll) {
      checkAll.onclick = function () {
        var checkboxes = document.querySelectorAll(
          '.form-check-all input[type="checkbox"]'
        );
        if (checkAll.checked == true) {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
            checkbox.closest("tr").classList.add("table-active");
          });
        } else {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
            checkbox.closest("tr").classList.remove("table-active");
          });
        }
      };
    }
  },
};
</script>

<template>
  <!--end row-->
<div>
  
    <div class="row">
      <div class="col-lg-12">
        <div class="card" id="tasksList">
<!--           <div class="card-header border-0 bg-danger">
            <div class="d-flex align-items-center">
              <h5 class="card-title mb-0 flex-grow-1 ">Lista Usuarios</h5>
              <div class="flex-shrink-0">
                <button class="btn btn-soft-danger me-1" @click="deleteMultiple">
                  <i class="ri-delete-bin-2-line"></i>
                </button>
                <button
                  class="btn btn-primary add-btn rounded-pill "
                  data-bs-toggle="modal"
                  href="#showmodal"
                  @click="addnew"
                >
                  <i class="ri-add-line align-bottom me-1 "></i> Nuevo Usuario
                </button>
              </div>
            </div>
          </div> -->
          <!--end card-body-->
          <div class="card-body">
            <div class="table-responsive table-card mb-4">
              <table class="table align-middle table-nowrap mb-0" id="tasksTable">
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
                    <th class="sort" data-sort="id">ID</th>
                    <th class="sort" data-sort="project_name">Nombre</th>
                    <th class="sort" data-sort="tasks_name">Correo</th>
                    <th class="sort" data-sort="client_name">Perfil</th>
                    <th class="sort" data-sort="assignedto">Estado</th>
                    <th class="sort" data-sort="due_date">Acciones</th>
                  </tr>
                </thead>
                <tbody class="list form-check-all">
                  <tr v-for="(users, index) in ListUser" :key="index">
                    <th scope="row">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="chk_child"
                          value="option1"
                        />
                      </div>
                    </th>
  
                    <td class="id">
                      {{ users.id }}
                    </td>
                    <td class="project_name">
                      {{ users.nombre }}
                    </td>
  
                    <td class="client_name">{{ users.email }}</td>
  
                    <td class="due_date">{{ users.perfil }}</td>
  
                    <td class="priority">
                      <span
                        class="badge text-uppercase"
                        :class="{
                          'bg-danger': users.estado == 'inactivo',
                          'bg-success': users.estado == 'activo',
                        }"
                        >{{ users.estado }}</span
                      >
                    </td>
                    <td>
                      <i class="ri-eye-fill align-bottom me-2 text-muted"></i>
                      <li
                        class="list-inline-item"
                        data-bs-toggle="modal"
                        href="#showmodal"
                        @click="editdata(user)"
                      >
                        <a href="#"
                          ><i
                            class="ri-pencil-fill align-bottom me-2 text-info"
                          ></i
                        ></a>
                      </li>
                      <li class="list-inline-item text-danger">
                        <a class="remove-item-btn" @click="deletedata(user)">
                          <i
                            class="
                              ri-delete-bin-fill
                              align-bottom
                              me-2
                              text-danger
                            "
                          ></i>
                        </a>
                      </li>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!--end table-->
              <div class="noresult" style="display: none">
                <div class="text-center">
                  <lottie
                    colors="primary:#121331,secondary:#08a88a"
                    :options="defaultOptions"
                    :height="75"
                    :width="75"
                  />
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
                <a
                  class="page-item pagination-prev disabled"
                  href="#"
                  v-if="page != 1"
                  @click="page--"
                >
                  Previous
                </a>
                <ul class="pagination listjs-pagination mb-0">
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
                </ul>
                <a
                  class="page-item pagination-next"
                  href="#"
                  @click="page++"
                  v-if="page < pages.length"
                >
                  Next
                </a>
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
            <lottie
              colors="primary:#405189,secondary:#f06548"
              :options="defaultOptions1"
              :height="90"
              :width="90"
            />
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
                  <label for="projectName-field" class="form-label">Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="Nombre"
                    required
                  />
                </div>
                <!--end col-->
                <div class="col-lg-12">
                  <div>
                    <label for="tasksTitle-field" class="form-label"
                      >Apellido</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      v-model="Apellido"
                      required
                    />
                  </div>
                </div>
                <!--end col-->
                <div class="col-lg-12">
                  <label for="createName-field" class="form-label">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="Email"
                    required
                  />
                </div>
                <div class="col-lg-12">
                  <label for="createName-field" class="form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    v-model="Password"
                    placeholder="*******"
                    required
                  />
                </div>
  
                <div class="col-lg-12">
                  <label for="priority-field" class="form-label">Perfil</label>
                  <Multiselect
                    v-model="Perfil"
                    :close-on-select="true"
                    :searchable="true"
                    :create-option="true"
                    :options="ListaPerfiles"
                  />       
                </div>
  
                <div class="col-lg-12">
                  <label for="priority-field" class="form-label">Estado</label>
                  <Multiselect
                    id="priority"
                    v-model="Estado"
                    :close-on-select="true"
                    :searchable="true"
                    :create-option="true"
                    :options="[
                      { value: 'inactivo', label: 'Inactivo' },
                      { value: 'activo', label: 'Activo' },
                    ]"
                  />
                </div>
                <!--end col-->
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
                  Cerrar
                </button>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  class="btn btn-primary"
                  id="add-btn"
                  @click.prevent="save"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  class="btn btn-success"
                  id="edit-btn"
                  @click="updateorder()"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--end modal-->
</div>
</template>