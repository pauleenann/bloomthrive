import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//router
import router from './routes/route'

//fontawesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faMagnifyingGlass,
    faBagShopping, 
    faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

library.add(
    faMagnifyingGlass,
    faBagShopping,
    faCircleUser,
    faFacebook,
    faInstagram,
    faTiktok
);

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
