<script>
  import { createEventDispatcher } from "svelte";
  import meetups from "../stores/meetups";
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";
  import { isEmpty, isEmail } from "../helpers/validation";

  let title = "",
    subtitle = "",
    contactEmail = "",
    address = "",
    description = "",
    imageUrl = "";

  // validation deductions
  $: validTitle = !isEmpty(title);
  $: validSubtitle = !isEmpty(subtitle);
  $: validAddress = !isEmpty(address);
  $: validDescription = !isEmpty(description);
  $: validImage = !isEmpty(imageUrl);
  $: validEmail = !isEmpty(contactEmail) && isEmail(contactEmail);
  $: validForm =
    validTitle &&
    validSubtitle &&
    validAddress & validDescription &&
    validImage &&
    validEmail;

  const dispatch = createEventDispatcher();

  function close() {
    dispatch("close");
  }

  function submit() {
    meetups.newMeetup(
      title,
      subtitle,
      contactEmail,
      address,
      description,
      imageUrl
    );
    close();
  }
</script>

<style>
  form {
    width: 100%;
  }
</style>

<Modal title="Edit Meetup" on:close>
  <!-- Form shit -->
  <form on:submit|preventDefault={submit}>
    <TextInput
      id="title"
      label="Title"
      bind:value={title}
      isValid={validTitle} />
    <TextInput
      id="subtitle"
      label="Subtitle"
      bind:value={subtitle}
      isValid={validSubtitle} />
    <TextInput
      id="address"
      label="Address"
      bind:value={address}
      isValid={validAddress} />
    <TextInput
      id="imageUrl"
      label="Image URL"
      bind:value={imageUrl}
      isValid={validImage} />
    <TextInput
      inputType="email"
      id="email"
      label="Email"
      bind:value={contactEmail}
      isValid={validEmail}
      errorMessage="Please enter a valid email address" />
    <TextInput
      inputType="textarea"
      rows="3"
      id="description"
      label="Description"
      bind:value={description}
      isValid={validDescription} />
  </form>
  <div slot="footer">
    <Button mode="outline" on:click={close}>Cancel</Button>
    <Button on:click={submit} disabled={!validForm}>Save</Button>
  </div>
</Modal>
