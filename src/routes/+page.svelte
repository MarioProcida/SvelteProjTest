<script>
    import { onMount } from 'svelte';
    import { fetchData } from '$lib/api.js';
    
    /**
	 * @type {string | any[]}
	 */
    let data = [];
    
    onMount(async () => {
      try {
        data = await fetchData('posts'); // o 'users' per MockAPI
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
    </script>
    
    <main>
        <a href="/about">
            About
        </a>
      <h1>Dati dall'API</h1>
      
      {#if data.length > 0}
        <ul>
            <li class="flex ml-10 mr-10"><div class="pr-5"></div><div class="pl-5">{data.length}</div></li>
          {#each data as item}
            <li class="flex ml-10 mr-10"><div class="pr-5">{item.id}</div><div class="pl-5">{item.title || item.name}</div></li>
          {/each}
        </ul>
      {:else}
        <p>Caricamento dati...</p>
      {/if}
    </main>