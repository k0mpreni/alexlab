<script>
  import { slide } from "svelte/transition";
  import { sineOut } from "svelte/easing";

  const books = [
    {
      title: "1Q84 - Tome 1",
      author: "Haruki Murakami",
      media: "book",
      finished: true
    },
    {
      title: "1Q84 - Tome 2",
      author: "Haruki Murakami",
      media: "book",
      finished: true
    },
    {
      title: "La mort est mon métier",
      author: "Robert Merle",
      media: "book",
      finished: true
    },
    {
      title: "Ubik",
      author: "Philip K Dick",
      media: "book",
      finished: true
    },
    {
      title: "Dans la dèche à Paris et à Londres",
      author: "George Orwell",
      media: "book",
      finished: true
    },
    {
      title: "Un bonheur insoutenable",
      author: "Ira Levin",
      media: "book",
      finished: true
    },
    {
      title: "Flow",
      author: "Mihaly Csikszentmihalyi",
      media: "audio",
      finished: true
    },
    {
      title: "Le courage des autres",
      author: "Hugo Boris",
      media: "book",
      finished: true
    },
    {
      title: "Taqawan",
      author: "Éric Plamonfon",
      media: "book",
      finished: true
    },
    {
      title: "Tu mourras moins bête 1",
      author: "Marion Montaigne",
      media: "book",
      finished: true
    },
    {
      title: "Ravage",
      author: "René Barjavel",
      media: "book",
      finished: true
    },
    {
      title: "Demain c'est loin",
      author: "Jacky Schwartzmann",
      media: "book",
      finished: true
    },
  ];
</script>

<style>
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1rem;
    justify-content: stretch;
    align-items: stretch;
  }

  li {
    -webkit-box-shadow: 10px 10px 5px -4px rgba(0, 0, 0, 0.14);
    -moz-box-shadow: 10px 10px 5px -4px rgba(0, 0, 0, 0.14);
    box-shadow: 10px 10px 5px -4px rgba(0, 0, 0, 0.14);
    padding: 0.8rem;
    border: 1px solid #ed174b;
    text-align: center;
  }

  .finished {
    border: 1px solid #04dbb0;
  }

  h2 {
    text-align: center;
  }
</style>

<div transition:slide={{ delay: 0, duration: 250, easing: sineOut }}>

  <h1>My 2019 reading list</h1>

  <ul>
    {#each books as { title, author, media, finished }}
      <li class:finished>
        <h2>{title}</h2>
        <p>
          <i>From: {author}</i>
        </p>
        {#if media}
          <p>Media: {media}</p>
        {/if}
      </li>
    {/each}
  </ul>

</div>
