<script lang="ts">
    export let name
    export let img
    export let bio
</script>

<article>
    <div class="overlay"></div>
    <span class="card-name">{@html name }</span>
    <!-- <span>{ bio }</span> -->
    <img src={ img } alt={ `Image of ${ name }` }/>
</article>

<style>
    article {
        position: relative;
        display: grid;
        transition-duration: 0.3s;
    }

    article:hover {
        cursor: pointer;
        transform: translateX(-0.1em) translateY(-0.1em);
        box-shadow: 2px 2px 10px rgb(0 0 0 / 0.3);
    }

    .overlay {
        background: linear-gradient(to bottom, rgb(0 0 0 / 0) 60%, rgb(0 0 0 / 0.8));
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .card-name {
        position: absolute;
        font-weight: bold;
        color: white;
        bottom: 1em;
        width: 100%;
    }

    img {
        width: 200px;
        height: 200px; 
        max-width: min(300px, 90vw);
        max-height: min(300px, 90vw);
        object-fit: cover;
        object-position: center;
    }
</style>