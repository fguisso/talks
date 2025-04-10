<template>
  <footer
      class="mt-auto flex justify-between items-center w-full text-primary dark:text-white z-10 my--15"
    >
      <div class="mb-0 flex items-center py-15" v-if="$page == 1">
        <div class="flex items-center -space-x-4">
          <img
            :src="$slidev.themeConfigs.avatar"
            class="w-13 h-13 rounded-full object-contain"
          />
          <img
            :src="$slidev.themeConfigs.photo"
            class="w-13 h-13 rounded-full object-contain -z-40"
          />
          
        </div>
      </div>
      <div class="w-15 px-0 py-8 top-0" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 849.6 329.92" >
          <g id="logo">
              <text transform="translate(5.52 250.66)">guisso</text>
              <polygon points="60.34 198.02 84.8 150.91 107.45 198.02 60.34 198.02"></polygon>
              <polygon points="741.17 161.02 765.63 208.13 788.28 161.02 741.17 161.02"></polygon>
          </g>
      </svg>
    </div>
    <a
      :href="$slidev.themeConfigs.websiteUrl"
      target="_blank"
    >{{ $slidev.themeConfigs.websiteUrl }}</a>
    </footer>
</template>

<style scoped>
a, a:hover {
    text-decoration: none;
    border-style: none;
    font-size: 0.8em;
}
</style>