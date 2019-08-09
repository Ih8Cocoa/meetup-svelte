<script>
  import { createEventDispatcher } from "svelte";
  import Item from "./Item.svelte";
  import Filter from "./Filter.svelte";
  import Button from "../UI/Button.svelte";

  export let meetups;

  const dispatch = createEventDispatcher();

  let favsOnly = false;

  $: filteredMeetups = favsOnly ? meetups.filter(m => m.isFavorite) : meetups;

  function setFilter({ detail }) {
    favsOnly = detail === 1;
  }

  function edit() {
    dispatch("edit");
  }
</script>

<style>
  #meetups {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    #meetups {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  #meetup-controls {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
  }
</style>

<section id="meetup-controls">
  <Filter on:select={setFilter} />
  <div class="meetup-control">
    <Button on:click={edit}>New Meetup</Button>
  </div>
</section>

<section id="meetups">
  {#each filteredMeetups as meetup}
    <Item {...meetup} on:showdetails on:edit />
  {/each}
</section>
