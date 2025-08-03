<!-- src/routes/rawthoughts/+page.svelte -->
<script>
	export let data;
    $: rawNotes = data.posts.filter(post => post.meta.category === "personal");
</script>

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








