<script lang="ts">
  import Carousel from '../components/SvelteCarousel.svelte';
  import { onMount } from 'svelte';

  let posts = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Errore nel caricamento dei dati');
      }
      posts = await response.json();
    } catch (e) {
      error = e instanceof Error ? e.message : 'Si è verificato un errore sconosciuto';
    } finally {
      loading = false;
    }
  });
</script>

<main class="container mx-auto p-4">
  <h1 class="text-3xl font-bold mb-4">Carousel con Post</h1>

  <div class="w-full max-w-6xl mx-auto px-12">
    {#if loading}
      <p>Caricamento in corso...</p>
    {:else if error}
      <p class="text-red-500">{error}</p>
    {:else}
      <Carousel {posts} autoplay={false} interval={3000} />
    {/if}
  </div>
</main>