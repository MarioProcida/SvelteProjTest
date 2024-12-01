<script lang="ts">
  import { onMount } from 'svelte';

  export let posts: any[] = [];
  export let autoplay = false;
  export let interval = 5000;

  let currentIndex = 0;
  let intervalId: number | undefined;

  function next() {
    currentIndex = (currentIndex + 20) % posts.length;
  }

  function prev() {
    currentIndex = (currentIndex - 20 + posts.length) % posts.length;
  }

  function startAutoplay() {
    if (autoplay && !intervalId) {
      intervalId = setInterval(next, interval);
    }
  }

  function stopAutoplay() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = undefined;
    }
  }

  onMount(() => {
    startAutoplay();
    return stopAutoplay;
  });
</script>

<div class="relative w-full">
  <div class="overflow-hidden">
    <div class="flex transition-transform duration-500 ease-in-out" style="transform: translateX(-{(currentIndex / posts.length) * 100}%)">
      {#each posts as post}
        <div class="w-1/3 flex-shrink-0 p-2">
          <div class="h-48 flex items-center justify-center text-white text-xs font-bold rounded-lg shadow-md bg-gray-200">
          {post.title}
          </div>
        </div>
      {/each}
    </div>
  </div>

  <button
    on:click={prev}
    class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none transition-transform duration-300 hover:scale-110"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  <button
    on:click={next}
    class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none transition-transform duration-300 hover:scale-110"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>