<script>
  import Header from "./UI/Header.svelte";
  import Grid from "./Meetups/Grid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import meetups from "./stores/meetups";
  import Details from "./Meetups/Details.svelte";

  let editMode = null;
  let currentPage = "overview";
  let id = null;
  let editedId;

  function close() {
    resetMode();
  }

  function showDetails({ detail }) {
    id = detail;
  }

  function deleteId() {
    id = null;
  }

  function edit({ detail }) {
    editedId = detail;
    editMode = true;
  }

  function resetMode() {
    editMode = null;
    editedId = null;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />

<main>
  {#if id === null}
    {#if editMode}
      <EditMeetup on:close={close} id={editedId} />
    {/if}
    <Grid meetups={$meetups} on:showdetails={showDetails} on:edit={edit} />
  {:else}
    <Details {id} on:close={deleteId} />
  {/if}
</main>
