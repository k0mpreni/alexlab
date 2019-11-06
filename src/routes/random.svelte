<script>
  import { send, receive } from "../crossfade";
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>
<main>
  <h1 out:send="{{key: 'title'}}" in:receive="{{key: 'title'}}">Random stuff</h1>

  <ul>
    <li>
      <a href="readings">My 2019 readings</a>
    </li>
  </ul>
</main>
