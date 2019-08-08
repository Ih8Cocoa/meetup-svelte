<script>
  import Header from "./UI/Header.svelte";
  import Grid from "./Meetups/Grid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";

  // meetups
  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn in 2 hours",
      description: "Yeetus Deletus",
      imageUrl:
        "https://i2.wp.com/www.animemaru.com/wp-content/uploads/2018/02/catgirls_nation_research.jpg?resize=640%2C360&ssl=1",
      address: "8 Nirvana Street",
      contactEmail: "code@test.com"
    },
    {
      id: "m2",
      title: "Swimming Catgirls",
      subtitle: "Let's fricking go",
      description: "Yeetus Deletus 2",
      imageUrl:
        "https://www.wallpaperup.com/uploads/wallpapers/2014/07/01/383259/0e6ce91ca8a334ea9636315ac2c94995-700.jpg",
      address: "8 Nirvana Street",
      contactEmail: "swim@test.com"
    }
  ];

  let editMode = "";

  function add({ detail }) {
    meetups = [
      {
        id: Math.random().toString(),
        ...detail
      },
      ...meetups
    ];
    editMode = "";
  }

  function toggleFavorite({ detail }) {
    const meetup = meetups.find(m => m.id === detail);
    meetup.isFavorite = !meetup.isFavorite;

    // force value refresh
    meetups = meetups;
  }

  function cancelEdit() {
    editMode = "";
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
  {#if editMode === 'add'}
    <EditMeetup on:save={add} on:cancel={cancelEdit} />
  {:else}
    <div class="meetup-control">
      <Button on:click={() => (editMode = 'add')}>New Meetup</Button>
    </div>
  {/if}
  <Grid {meetups} on:togglefavorite={toggleFavorite} />
</main>
