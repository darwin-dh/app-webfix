<script>
//import { SimpleBar } from "simplebar-vue3";

import i18n from "../i18n";


/**
 * Nav-bar Component
 */
export default {
  data() {
    return {
      languages: [
        {
          flag: require("@/assets/images/flags/us.svg"),
          language: "en",
          title: "English",
        },
        {
          flag: require("@/assets/images/flags/spain.svg"),
          language: "sp",
          title: "Española",
        },
        {
          flag: require("@/assets/images/flags/germany.svg"),
          language: "gr",
          title: "Deutsche",
        },
        {
          flag: require("@/assets/images/flags/italy.svg"),
          language: "it",
          title: "italiana",
        },
        {
          flag: require("@/assets/images/flags/russia.svg"),
          language: "ru",
          title: "русский",
        },
        {
          flag: require("@/assets/images/flags/china.svg"),
          language: "ch",
          title: "中國人",
        },
        {
          flag: require("@/assets/images/flags/french.svg"),
          language: "fr",
          title: "Français",
        },
      ],
      lan: i18n.locale,
      text: null,
      flag: null,
      value: null,
      myVar: 1,
    };
  },
  components: {

    // SimpleBar,
  },
  methods:{
    toggleHamburgerMenu() {
        var windowSize = document.documentElement.clientWidth;
  
        if (windowSize > 767)
          document.querySelector(".hamburger-icon").classList.toggle("open");
  
        //For collapse horizontal menu
        if (
          document.documentElement.getAttribute("data-layout") === "horizontal"
        ) {
          document.body.classList.contains("menu") ?
            document.body.classList.remove("menu") :
            document.body.classList.add("menu");
        }
  
        //For collapse vertical menu
        if (document.documentElement.getAttribute("data-layout") === "vertical") {
          if (windowSize < 1025 && windowSize > 767) {
            document.body.classList.remove("vertical-sidebar-enable");
            document.documentElement.getAttribute("data-sidebar-size") == "sm" ?
              document.documentElement.setAttribute("data-sidebar-size", "") :
              document.documentElement.setAttribute("data-sidebar-size", "sm");
          } else if (windowSize > 1025) {
            document.body.classList.remove("vertical-sidebar-enable");
            document.documentElement.getAttribute("data-sidebar-size") == "lg" ?
              document.documentElement.setAttribute("data-sidebar-size", "sm") :
              document.documentElement.setAttribute("data-sidebar-size", "lg");
          } else if (windowSize <= 767) {
            document.body.classList.add("vertical-sidebar-enable");
            document.documentElement.setAttribute("data-sidebar-size", "lg");
          }
        }
  
        //Two column menu
        if (document.documentElement.getAttribute("data-layout") == "twocolumn") {
          document.body.classList.contains("twocolumn-panel") ?
            document.body.classList.remove("twocolumn-panel") :
            document.body.classList.add("twocolumn-panel");
        }
      },
  },
  mounted() {
      document.addEventListener("scroll", function () {
        var pageTopbar = document.getElementById("page-topbar");
        if (pageTopbar) {
          document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ? pageTopbar.classList.add(
            "topbar-shadow") : pageTopbar.classList.remove("topbar-shadow");
        }
      });
      if (document.getElementById("topnav-hamburger-icon"))
        document
          .getElementById("topnav-hamburger-icon")
          .addEventListener("click", this.toggleHamburgerMenu);
    },
};
</script>
  
  <template>


     <header id="page-topbar" >
       <div class="layout-width">
         <div class="navbar-header ">
           <div class="d-flex ">
             <!-- LOGO -->
             <div class="navbar-brand-box horizontal-logo ">
               <router-link to="#" class="logo logo-dark">
                 <span class="logo-sm">
                   <img src="@/assets/images/logo-sm.png" alt="" height="22" />
                 </span>
                 <span class="logo-lg">
                   <img src="@/assets/images/logo-dark.png" alt="" height="17" />
                 </span>
               </router-link>
   
               <router-link to="#" class="logo logo-light">
                 <span class="logo-sm">
                   <img src="@/assets/images/logo-sm.png" alt="" height="22" />
                 </span>
                 <span class="logo-lg">
                   <img src="@/assets/images/logo-light.png" alt="" height="17" />
                 </span>
               </router-link>
             </div>
   
             <button
               type="button"
               class="
                 btn btn-sm
                 px-3
                 fs-16
                 header-item
                 vertical-menu-btn
                 topnav-hamburger
               "
               id="topnav-hamburger-icon"
             >
               <span class="hamburger-icon">
                 <span></span>
                 <span></span>
                 <span></span>
               </span>
               <i class="las lines-vertical"></i>
             </button>
           </div>
   
           <div class="d-flex align-items-center">

             <div class="dropdown ms-sm-3 header-item topbar-user bg-white" >
               <button
                 type="button"
                 class="btn"
                 id="page-header-user-dropdown"
                 data-bs-toggle="dropdown"
                 aria-haspopup="true"
                 aria-expanded="false"
               >
                 <span class="d-flex align-items-center">
                   <img
                     class="rounded-circle header-profile-user"
                     src="@/assets/images/users/avatar-1.jpg"
                     alt="Header Avatar"
                   />
                   <span class="text-start ms-xl-2">
                     <span
                       class="
                         d-none d-xl-inline-block
                         ms-1
                         fw-medium
                         user-name-text
                       "
                       >Admin</span
                     >
                     <span
                       class="
                         d-none d-xl-block
                         ms-1
                         fs-12
                         text-muted
                         user-name-sub-text
                       "
                       >Admin</span
                     >
                   </span>
                 </span>
               </button>
               <div class="dropdown-menu dropdown-menu-end">
                 <!-- item-->
                 <h6 class="dropdown-header">Welcome Admin!</h6>
                 <router-link class="dropdown-item" to="/"
                   ><i
                     class="mdi mdi-logout text-muted fs-16 align-middle me-1"
                   ></i>
                   <span class="align-middle" data-key="t-logout">Logout</span>
                 </router-link>
               </div>
             </div>

           </div>
         </div>
       </div>
     </header>


</template>