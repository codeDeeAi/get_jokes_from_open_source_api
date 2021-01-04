<template>
  <div>
    <!-- /** Navigation  */ -->
    <nav class="bg-purple-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2  h-16">
        <div class="flex justify-start">
          <div class="flex-shrink-0 py-3">
              <img class="h-8 w-8" src="/imgs/free-logo.png" alt="Workflow">
          </div>
        </div>
        <div class="flex items-center justify-end">          
          <div class="md:block">
            <div class="ml-10 flex items-baseline justify-end space-x-4">

              <a href="#myFooter" class="text-gray-700 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </nav>
    <!-- /** Navigation Ends */ -->

    <!-- Header -->
     <header class="bg-white">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">
       Get Jokes 
      </h1>
    </div>
  </header>
  <!-- Header Ends -->

  <!-- Filter -->
  <div class=" px-8">
    <div class="flex justify-between my-4 py-2">
      <label>Select Joke type/ category</label>
    <select v-model="type" required placeholder="Select Joke Type" multiple id="Currency" name="currency" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7  md:w-full sm:w-50 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
      <option>Any</option>
      <option>Programming</option>
      <option>Misc</option>
      <option>Dark</option>
      <option>Pun</option>
      <option>Spooky</option>
      <option>Christmas</option>
    </select>
  </div>
  <div class="flex justify-between my-4 py-2">
    <label>Select the number of jokes</label>
    <input v-model="number" required type="number" min="0" max="10"  class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7  md:w-full sm:w-50 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">   
    <button class="w-44 flex items-center justify-center rounded-full bg-purple-700 text-white" type="button" @click.prevent="getJokes">Get Jokes</button>
  </div>
  </div>
<!-- Filter Ends -->

<!-- Main -->
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <!-- <div class="border-2 border-dashed border-gray-200 rounded-lg h-96 px-4 py-6 overflow-auto"> -->
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Joke
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="(joke, j) in data" :key="j">
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                {{joke.category}}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">{{joke.setup}}</div>
                          <div class="text-sm text-gray-500">{{joke.delivery}}</div>
                          <div class="text-sm text-gray-500">{{joke.joke}}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Safe
                          </span>
                        </td>
                      </tr>

                      <!-- More rows... -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      <!-- </div> -->
      <!-- /End replace -->
    </div>
  </main>
  <!-- Main Ends -->

  <!-- Footer -->
  <div id="myFooter" class="flex justify-center">
    <span>Copyright@2021 <a href="https://github.com/codeDeeAi" class="hover:font-bold" target="_blank" rel="noopener noreferrer">Bada Adeola O.</a></span>
  </div>
  <!-- Footer Ends -->
  </div>
</template>
import axios from 'axios'
<script>
export default {
  name: 'HelloWorld',
  props: {
    
  },
  data(){
    return{
      post:{},
      data:[],
      type:[],
      number:0,
    }
  },
  methods:{
    getJokes(){
        // GET /someUrl
        this.$http.get(`https://v2.jokeapi.dev/joke/${this.type}?amount=${this.number}`).then(response => {
         
          // get body data
          this.data = response.body.jokes;

        }, response => {
          // error callback
          console.log(response)
        });
    }
  },
  created(){

  },
  mounted(){
    
  }
}
</script>

<style scoped>
  
</style>
