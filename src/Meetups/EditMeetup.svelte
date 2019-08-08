<script>
  import { createEventDispatcher } from "svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";

  let title = "",
    subtitle = "",
    contactEmail = "",
    address = "",
    description = "",
    imageUrl = "";

  const dispatch = createEventDispatcher();

  function submit() {
    dispatch("save", {
      title,
      subtitle,
      contactEmail,
      address,
      description,
      imageUrl
    });
  }

  function cancel() {
    dispatch("cancel");
  }
</script>

<style>
  form {
    width: 100%;
  }
</style>

<Modal title="Edit Meetup" on:cancel>
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
  </form>
  <div slot="footer">
    <Button mode="outline" on:click={cancel}>Cancel</Button>
    <Button on:click={submit}>Save</Button>
  </div>
</Modal>
