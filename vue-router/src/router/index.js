import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Job from "../views/job/Job.vue"
import JobDetails from '../views/job/JobDetails.vue'
import NotFound from '../views/NotFound.vue'
const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/about',
  name: 'About',
  component: About
}, {  
  path: '/contact',
  name: 'Contact',
  component: Contact
},
{
  path: '/job/',
  name: 'Job',
 component: Job
},{
  path: '/job/:id',
  name: 'Jobs',
 component: JobDetails,
// 
 props : true
},
{
  // redirect url
  path: '/jobs',
  redirect: { name: 'Job' } // Redirect to the Job component
  // you can check it by going to /jobs
  // it will redirect to /job/
  // and show the Job component
},
{
  // catch all route which are not defined (404)
  path: '/:catchAll(.*)',
  name: 'NotFound',
  component: NotFound
}
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // ✅ this should refer to the actual array you defined
})


export default router
