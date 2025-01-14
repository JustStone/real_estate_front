import {createRouter, createWebHashHistory} from "vue-router";
import LoginPage from "@/components/Pages/LoginPage";
import RegPage from "@/components/Pages/RegPage";
import MainPage from "@/components/Pages/MainPage";
import ClientPage from "@/components/Pages/ClientPage";
import RieltorsPage from "@/components/Pages/RieltorsPage";
import ObjectsPage from "@/components/Pages/ObjectsPage.vue";
import MyObjects from "@/components/Pages/MyObjects";

export default createRouter({
    history:createWebHashHistory(),
    routes: [
        {path: '/', component: MainPage},
        {path: '/object', component: MyObjects},
        {path: '/login', component:LoginPage},
        {path: '/reg', component: RegPage},
        {path: '/clients', component: ClientPage},
        {path: '/rieltors', component: RieltorsPage},
        {path: '/objects', component: ObjectsPage},
    ]
})