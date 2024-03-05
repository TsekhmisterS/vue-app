<template>
  <div class="w-screen h-screen flex gap-px">
    <aside class="w-[400px] h-full">
      <div class="h-[50px] bg-gray-900 flex justify-center items-center">
        <h3 class="text-white font-bold text-xl">Admin panel</h3>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-600 text-white">
        <div class="flex flex-col gap-3 px-[20px] py-[10px]">
          <router-link to="/home" class="hover:bg-gray-900 transition-all duration-500">
            <div class="flex gap-3">
              <svg
                width="20px"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
              <p>Home</p>
            </div>
          </router-link>
          <router-link to="/profile" class="hover:bg-gray-900 transition-all duration-500">
            <div class="flex gap-3">
              <svg
                width="20px"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                />
              </svg>
              <p>Profile</p>
            </div>
          </router-link>
        </div>
      </div>
    </aside>
    <main class="w-full h-full">
      <div class="h-[50px] bg-gray-600 flex justify-center items-center">
        <h3 class="text-white">Content</h3>

      </div>
      <div class="bg-white">
        <router-view class="h-[calc(100vh-50px)]"/>
      </div>
    </main>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped></style>
