<script>
  import Header from "./UI/Header.svelte";
  import Grid from "./Meetups/Grid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import meetups from "./stores/meetups";
  import Details from "./Meetups/Details.svelte";

  let editMode = "";
  let currentPage = "overview";
  let id = null;

  function close() {
    editMode = "";
  }

  function showDetails({ detail }) {
	id = detail;
  }

  function deleteId() {
	  id = null;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-control {
    margin: 1rem;
  }
</style>

<Header />

<main>
  {#if id === null}
    {#if editMode === 'add'}
      <EditMeetup on:close={close} />
    {:else}
      <div class="meetup-control">
        <Button
          on:click={() => {
            editMode = 'add';
          }}>
          New Meetup
        </Button>
      </div>
    {/if}
    <Grid meetups={$meetups} on:showdetails={showDetails} />
  {:else}
	<Details {id} on:close={deleteId} />
  {/if}
</main>
