<script>
  import { slide } from "svelte/transition";
  import { quintInOut } from "svelte/easing";

  const books = [
    {
      title: "Contruire un feu",
      author: "Jack London",
      media: "book",
      finished: true
    },
    {
      title: "Origin",
      author: "Dan Brown",
      media: "book",
      finished: true
    },
    {
      title: "La voix de la terre",
      author: "Bernard Werber",
      media: "audio",
      finished: true
    },
    {
      title: "Les fourmis",
      author: "Bernard Werber",
      media: "audio",
      finished: true
    },
    {
      title: "L'empire des anges",
      author: "Bernard Werber",
      media: "audio",
      finished: true
    },
    {
      title: "Le livre du voyage",
      author: "Bernard Werber",
      media: "book",
      finished: true
    },
    {
      title: "Brèves réponses aux grandes questions",
      author: "Stephen Hawking",
      media: "book",
      finished: true
    },
    {
      title: "Dans la combi de Thomas Pesquet",
      author: "Marion Montaigne",
      media: "book",
      finished: true
    },
    {
      title: "La servante écarlate",
      author: "Margaret Atwood",
      media: "book",
      finished: true
    },
    {
      title: "Soumission",
      author: "Michel Houellebecq",
      media: "book",
      finished: true
    },
    {
      title: "Pensées à moi-même",
      author: "Marc Aurèle",
      media: "audio",
      finished: true
    },
    {
      title: "Mémoires Vives",
      author: "Edward Snowden",
      media: "book",
      finished: true
    },
    {
      title: "Le pouvoir de la confiance en soi",
      author: "Brian Tracy",
      media: "book",
      finished: true
    },
    {
      title: "Le procès",
      author: "Franz Kafka",
      media: "book",
      finished: true
    },
    {
      title: "De la providence",
      author: "Sénèque",
      media: "book",
      finished: true
    },
    {
      title: "De la constance du sage",
      author: "Sénèque",
      media: "book",
      finished: false
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      media: "book",
      finished: false
    }
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

<div transition:slide={{ delay: 0, duration: 250, easing: quintInOut }}>

  <h1>My 2019 reading list</h1>

  <ul>
    {#each books as { title, author, media, finished }}
      <li class:finished>
        <h2>{title}</h2>
        <p>
          <i>From: {author}</i>
        </p>
        <p>Media: {media}</p>
      </li>
    {/each}
  </ul>

</div>
