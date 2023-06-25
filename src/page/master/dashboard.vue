<template>

  <div class="w-screen h-screen flex">
    <!--side bar-->
    <div class="w-[400px] h-full bg-gray-200 text-white">
      <div class="h-[50px] bg-gray-900 flex justify-start items-center">
        <div class="px-[20px]">
          <h3 class="font-bold text-xl">Admin Dashboard </h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
        <div class="flex flex-col justify-between h-full px-[20px]">
          <div class=" flex flex-col justify-between space-y-[10px] ">
              <router-link to="/home" class="inline-flex relative items-start py-[10px] w-full text-white">
                <svg aria-hidden="true" class="mr-2 w-[23px] h-[23px] full-current"  fill="currentColor">
                  <path fill-rule="evenodd" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg> 
                Home
              </router-link>

              <router-link to="/profile" class="inline-flex relative items-start py-[10px] w-full text-white">
                <svg aria-hidden="true" class="mr-2 w-[23px] h-[23px] full-current"  fill="currentColor">
                  <path fill-rule="evenodd"  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"></path>
                </svg> 
                profile
              </router-link>


              <router-link to="/message" class="inline-flex relative items-start py-[10px] w-full text-white">
                <svg aria-hidden="true" class="mr-2 w-[23px] h-[23px] full-current"  fill="currentColor">
                  <path fill-rule="evenodd" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"></path>
                </svg> 
                message
              </router-link>

              <router-link to="/download" class="inline-flex relative items-start py-[10px] w-full text-white">
                <svg aria-hidden="true" class="mr-2 w-[23px] h-[23px] full-current"  fill="currentColor">
                  <path fill-rule="evenodd"  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                </svg> 
                download
              </router-link>
          </div>
        </div>
        <div class="h-[50px]">
          <div class="  ">
            <router-link to="/setting" class="inline-flex relative items-start py-[10px] w-full text-white">
              <svg aria-hidden="true" class="mr-2 w-[23px] h-[23px] full-current"  fill="currentColor">
                <path fill-rule="evenodd" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg> 
              setting
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full bg-gray-400">
      <div class="h-[50px] bg-gray-900">
        silder
      </div>
      <div class="h-[calc(100vh-50px)] bg-white">
        menus
      </div>
    </div>
  </div>
</template>

<script>



export default {


}

</script>

<style scoped>
 
</style>
