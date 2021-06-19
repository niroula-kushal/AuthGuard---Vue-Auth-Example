import {createRouter, createWebHashHistory} from "vue-router";

import Posts from "./pages/Posts.vue";
import Login from './pages/Login.vue';
import useAuth from "./auth/AuthHandler";

const routes = [
    {path: '/', component: Posts, meta: {auth: true}},
    {path: '/login', component: Login, name: "Login"}
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
const auth = useAuth();
router.beforeEach(x => {
    if (x.meta.auth && !auth.IsLoggedIn.value) {
        router.push('/login');
    } else if (x.name == "Login" && auth.IsLoggedIn.value) {
        alert("Already Logged In")
        router.push('/');
    }
});

export default router;