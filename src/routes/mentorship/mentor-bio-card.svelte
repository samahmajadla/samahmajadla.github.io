<script lang="ts">
    export let name
    export let img
    export let bio
    export let alt
    export let bioHidden = true

    const toggleVisibilityOfBio = () => {
        bioHidden = !bioHidden
    }
</script>

<article on:click={toggleVisibilityOfBio}>
    <div class="overlay" hidden={!bioHidden}></div>
    <span class="card-name" hidden={!bioHidden}>{@html name }</span>
    <div class="bioHolder" hidden={bioHidden}>
        <span class="bio" hidden={bioHidden}><strong>{@html name}</strong> {@html bio}</span>
    </div>
    <img src={ img } alt={ alt } hidden={!bioHidden}/>
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

    img{
        width: 250px;
        height: 250px; 
        max-width: min(300px, 90vw);
        max-height: min(300px, 90vw);
        object-fit: cover;
        object-position: center;
    }

    .bioHolder {
        width: 250px;
        height: 250px; 
        overflow-y: scroll;
        text-align: center;
    }

    .bio {
        font-size: .8em;
        line-height: normal;
display: inline-flex;
justify-content: center;
flex-direction: column;
height: 250px;
padding:.5em;
    }
</style>