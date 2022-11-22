<script>
import { required, email, helpers } from "@vuelidate/validators";
import appConfig from "../../../app.config";
import { loginAuth } from "@/state/porfiles";

export default {
  page: {
    title: "Login",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      email: "admin@gmail.com",
      password: "1234",
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
    };
  },
  validations: {
    email: {
      required: helpers.withMessage("Email is required", required),
      email: helpers.withMessage("Please enter valid email", email),
    },
    password: {
      required: helpers.withMessage("Password is required", required),
    },
  },
  computed: {},
  methods: {
    ...loginAuth,
    login() {
      this.loginUser({
        email: this.email,
        contrasena: this.password,
      });
    },
  },
};
</script>

<template>
  <div class="auth-page-wrapper bg-light pt-5">
    <!-- auth page bg -->
    <!-- auth page content -->
    <div class="auth-page-content">
      <div class="container">
        <!-- end row -->

        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card mt-4">
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <!--       <h5 class="text-primary">Welcome Back !</h5>
                  <p class="text-muted">Sign in to continue to Velzon.</p> -->
                  <div class="text-center mb-1">
                    <div>
                      <img
                        src="@/assets/images/logo-dark-g.png"
                        alt=""
                        height="75"
                        width="100"
                      />
                    </div>
                  </div>
                </div>
                <div class="p-2 mt-4">
                  <b-alert
                    v-model="authError"
                    variant="danger"
                    class="mt-3"
                    dismissible
                    >{{ authError }}</b-alert
                  >
                  <h1>{{ authError }}</h1>
                  <div></div>

                  <form>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        v-model="email"
                      />
                    </div>

                    <div class="mb-3">
                      <div class="float-end">
                        <router-link to="/forgot-password" class="text-muted"
                          >Olvidaste tu Contraseña?</router-link
                        >
                      </div>
                      <label class="form-label" for="password-input"
                        >Password</label
                      >
                      <div class="position-relative auth-pass-inputgroup mb-3">
                        <input
                          type="password"
                          v-model="password"
                          class="form-control pe-5"
                        />
                        <div class="invalid-feedback">
                          Example invalid select feedback
                        </div>
                        <button
                          class="
                            btn btn-link
                            position-absolute
                            end-0
                            top-0
                            text-decoration-none text-muted
                          "
                          type="button"
                          id="password-addon"
                        >
                          <i class="ri-eye-fill align-middle"></i>
                        </button>
                        <div class="invalid-feedback">
                          <span></span>
                        </div>
                      </div>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="auth-remember-check"
                      />
                      <label class="form-check-label" for="auth-remember-check"
                        >Recordarme</label
                      >
                    </div>

                    <div class="mt-4">
                      <button
                        class="btn btn-primary w-100"
                        type="submit"
                        @click.prevent="login"
                      >
                        Iniciar Sesión
                      </button>
                    </div>

             <!--        <div class="mt-4 text-center">
                      <div class="signin-other-title">
                        <h5 class="fs-13 mb-4 title">Iniciar con</h5>
                      </div>
                      <div>
                        <button
                          type="button"
                          class="
                            btn btn-primary btn-icon
                            waves-effect waves-light
                          "
                        >
                          <i class="ri-facebook-fill fs-16"></i>
                        </button>
                        <button
                          type="button"
                          class="
                            btn btn-danger btn-icon
                            waves-effect waves-light
                            ms-1
                          "
                        >
                          <i class="ri-google-fill fs-16"></i>
                        </button>
                        <button
                          type="button"
                          class="
                            btn btn-dark btn-icon
                            waves-effect waves-light
                            ms-1
                          "
                        >
                          <i class="ri-github-fill fs-16"></i>
                        </button>
                        <button
                          type="button"
                          class="
                            btn btn-info btn-icon
                            waves-effect waves-light
                            ms-1
                          "
                        >
                          <i class="ri-twitter-fill fs-16"></i>
                        </button>
                      </div>
                    </div> -->
                  </form>
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
    <!-- end auth page content -->

    <!-- footer -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <p class="mb-0 text-muted">
                &copy; {{ new Date().getFullYear() }} WebFix.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- end Footer -->
  </div>
  <!-- end auth-page-wrapper -->
</template>