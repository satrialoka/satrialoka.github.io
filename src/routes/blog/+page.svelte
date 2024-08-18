<!-- src/routes/blog/+page.svelte -->
<script>
	export let data;
    $: technicalPosts = data.posts.filter(post => post.meta.category === "technical");
    $: personalPosts = data.posts.filter(post => post.meta.category === "personal");
</script>

<article>
    <section>
        <h2>Technical blog</h2>
        <ul>
            {#each technicalPosts as post}
            <li>
                <div class="blog-post-container">
                    <a  href={post.path} class="blog-post-link">{post.meta.title}</a>
                    <div class="post-meta">{post.meta.date}</div>
                </div>
            </li>
            {/each}
        </ul>
    </section>

    {#if personalPosts.length > 0}
        <section>
            <h2>Personal journal</h2>
            <ul>
                {#each personalPosts as post}
                <li>
                    <div class="blog-post-container">
                        <a  href={post.path} class="blog-post-link">{post.meta.title}</a>
                        <div class="post-meta">{post.meta.date}</div>
                    </div>
                </li>
                {/each}
            </ul>
        </section>
    {/if}
</article>

