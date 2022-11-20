<script>
import { CountTo } from "vue3-count-to";
export default {
  components: {
    CountTo,
  },
};
</script>

<template>
  <div class="row">
    <div class="col-xl-3 col-md-6">
      <div class="card card-animate shadow-lg bg-body">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="flex-grow-1 overflow-hidden">
              <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                Total Sucursales
              </p>
            </div>
          </div>
          <div class="d-flex align-items-start justify-content-between mt-4">
            <div>
              <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                $<count-to
                  :startVal="0"
                  :endVal="559"
                  :duration="5000"
                ></count-to
                >k
              </h4>
            </div>
            <div class="avatar-sm">
              <span class="avatar-title bg-soft-success rounded-3 fs-3">
                <i class="bx bx-dollar-circle text-success"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card card-animate shadow-lg bg-body">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="flex-grow-1 overflow-hidden">
              <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                Total Sucursales
              </p>
            </div>
          </div>
          <div class="d-flex align-items-start justify-content-between mt-4">
            <div>
              <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                $<count-to
                  :startVal="0"
                  :endVal="1000"
                ></count-to
                >k
              </h4>
            </div>
            <div class="avatar-sm">
              <span class="avatar-title bg-soft-success rounded-3 fs-3">
                <i class="bx bx-dollar-circle text-success"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card card-animate shadow-lg bg-body">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="flex-grow-1 overflow-hidden">
              <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                Total Sucursales
              </p>
            </div>
          </div>
          <div class="d-flex align-items-start justify-content-between mt-4">
            <div>
              <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                $<count-to
                  :startVal="0"
                  :endVal="559"
                  :duration="5000"
                ></count-to
                >k
              </h4>
            </div>
            <div class="avatar-sm">
              <span class="avatar-title bg-soft-success rounded-3 fs-3">
                <i class="bx bx-dollar-circle text-success"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card card-animate shadow-lg bg-body">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="flex-grow-1 overflow-hidden">
              <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                Total Sucursales
              </p>
            </div>
          </div>
          <div class="d-flex align-items-start justify-content-between mt-4">
            <div>
              <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                $<count-to
                  :startVal="0"
                  :endVal="559"
                  :duration="5000"
                ></count-to
                >k
              </h4>
            </div>
            <div class="avatar-sm">
              <span class="avatar-title bg-soft-success rounded-3 fs-3">
                <i class="bx bx-dollar-circle text-success"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>