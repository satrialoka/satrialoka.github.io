<!-- src/routes/rawthoughts/+page.svelte -->
<script>
	export let data;
    $: rawNotes = data.posts.filter(post => post.meta.category === "personal");
</script>

<h1>🚧 Under Construction 🚧</h1>
<article> 
    <h2>Running</h2>
    here you can find my profesional works

    <h2>Travelling and Food</h2>

    <h2>PC Games</h2>
</article>

<article>
    <section>
        <h2>Raw Thoughts</h2>
        <ul>
            {#each rawNotes as post}
            <li>
                <div class="blog-post-container">
                    <a  href={post.path} class="blog-post-link">{post.meta.title}</a>
                    <div class="post-meta">{post.meta.date}</div>
                </div>
            </li>
            {/each}
        </ul>
    </section>
</article>








