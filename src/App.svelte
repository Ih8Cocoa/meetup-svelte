<script>
  import Header from "./UI/Header.svelte";
  import Grid from "./Meetups/Grid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";

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

  let title = "",
    subtitle = "",
    contactEmail = "",
    address = "",
    description = "",
    imageUrl = "";

  function submit() {
    meetups = [
      {
        id: Math.random().toString(),
        title,
        subtitle,
        description,
        imageUrl,
        address,
        contactEmail
      },
      ...meetups
    ];
  }

  function toggleFavorite({ detail }) {
    const meetup = meetups.find(m => m.id === detail);
    meetup.isFavorite = !meetup.isFavorite;

    // force value refresh
    meetups = meetups;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<Header />

<main>
  <!-- Form shit -->
  <form on:submit|preventDefault={submit}>
    <TextInput id="title" label="Title" bind:value={title} />
    <TextInput id="subtitle" label="Subtitle" bind:value={subtitle} />
    <TextInput id="address" label="Address" bind:value={address} />
    <TextInput id="imageUrl" label="Image URL" bind:value={imageUrl} />
    <TextInput
      inputType="email"
      id="email"
      label="Email"
      bind:value={contactEmail} />
    <TextInput
      inputType="textarea"
      rows="3"
      id="description"
      label="Description"
      bind:value={description} />
    <Button type="submit">Save</Button>
  </form>
  <Grid {meetups} on:togglefavorite={toggleFavorite} />
</main>
