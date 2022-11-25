<script >
import PagerSearchBtn from '@/components/Funtions/Pager-Search-Btn.vue'
export default {
  components:{PagerSearchBtn},
  props: {
    items: {
      type: Object,
    },
    fields: {
      type: Object,
    },
  },
  data() {
    return {
      page: 1,
      perPage: 2,
      pages: [],
      data: [
        {
          id: 1,
          name: "Janathan",
          email: "jonathan@example.com",
          position: "Senior Implementation Architect",
          company: "Koelpin - Goldner",
          country: "Vanuatu",
        },
        {
          id: 2,
          name: "Harold",
          email: "harold@example.com",
          position: "Forward Creative Coordinator",
          company: "Feeney, Langworth and Tremblay",
          country: "Niger",
        },
        {
          id: 3,
          name: "Shannan",
          email: "shannon@example.com",
          position: "Legacy Functionality Associate",
          company: "Streich Group",
          country: "Niue",
        },
        {
          id: 4,
          name: "Robert",
          email: "robert@example.com",
          position: "Product Accounts Technician",
          company: "Ebert, Schamberger and Johnston",
          country: "Mexico",
        },
        {
          id: 5,
          name: "Noel",
          email: "noel@example.com",
          position: "Customer Data Director",
          company: "Raynor, Rolfson and Daugherty",
          country: "Qatar",
        },
        {
          id: 6,
          name: "Tracl",
          email: "traci@example.com",
          position: "Corporate Identity Director",
          company: "Hauck Inc",
          country: "Holy See",
        },
        {
          id: 7,
          name: "Kerry",
          email: "kerry@example.com",
          position: "Lead Applications Associate",
          company: "Metz Inc",
          country: "Iran",
        },
        {
          id: 8,
          name: "Patsy",
          email: "patsy@example.com",
          position: "Dynamic Assurance Director",
          company: "Zemlak Group",
          country: "South Georgia",
        },
        {
          id: 9,

          name: "Cathy",
          email: "cathy@example.com",
          position: "Customer Data Director",
          company: "Hoeger",
          country: "San Marino",
        },
        {
          id: 10,
          name: "Tyrone",
          email: "yrone@example.com",
          position: "Senior Response Liaison",
          company: "Howell - Rippin",
          country: "Germany",
        },
      ],
    };
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.data.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(data) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return data.slice(from, to);
    },
  },
  watch: {
    posts() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
};
</script>

<template>
  <PagerSearchBtn/>
  <div class="row">
    <div class="col-lg-12 table-responsive">
      <table class="table align-right mb-0 table-hover table-striped ">
        <thead class=" text-white text-bold text-uppercase border tabla-color">
          <tr >
            <th v-for="(item, index) in fields" :key="index">
              {{ item.key }}
            </th>
          </tr>
        </thead>
        <tbody class="rounded-pill bg-white">
          <slot />
        </tbody>
      </table>
    </div>
    <div class="d-flex justify-content-start mt-3">
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
</template>

