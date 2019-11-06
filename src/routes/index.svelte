<script>
  import { send, receive } from "../crossfade";
</script>

<style>
  .wrapper {
    line-height: 2rem;
  }
</style>

<svelte:head>
  <title>Alex Lab</title>
</svelte:head>

<main>
  <h1 out:send="{{key: 'title'}}" in:receive="{{key: 'title'}}">Test</h1>

  <div class="wrapper">
    <p>🇫🇷 French and german 🇩🇪 developer here ! 🤖</p>
    <p>
      🎓I did a Higher National Diploma in International Business in sandwich
      courses.
    </p>
    <p>
      💡I could develop competences like customer relationship, project
      management and team bulding
    </p>
    <p>
      💻 I wanted to increase my competences so I followed an intensive training
      to be a fullstack javascript web developer.
    </p>
    <p>
      🎓 I challenged myself to learn to develop and I'm now diplomed of a
      Associate Degree in Software Development.
    </p>
    <p>
      ⌨️ Now I apply those competences in an agile work environment based on
      open communication, kindness, learning to perform.
    </p>
    <p>
      🗝 I currently learn a lot by myself about computer science and related
      topics especially cybersecurity.
    </p>

  </div>
</main>
