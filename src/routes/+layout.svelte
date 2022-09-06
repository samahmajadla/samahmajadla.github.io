<script>import { page } from '$app/stores';
</script>
<aside class="sidebar">
    <nav class="nav">
        <ul>
            <li class:active={$page.url.pathname === '/'}><a href="/">Home</a></li>
            <li class:active={$page.url.pathname === '/about'}><a href="../about">About</a></li>
            <li class:active={$page.url.pathname === '/mentorship'}><a href="../mentorship">Mentorship</a></li>
            <li class:active={$page.url.pathname === '/community'}><a href="../community">Join Our Community</a></li>
        </ul>
    </nav>
    </aside>
    
    <slot></slot>

    <style>
        
        .sidebar{
            font-family: 'Advent';
            position:fixed;
            top:0;
            left:0;
            width:15vw;
            height:100vh;
            background: lightblue;
            text-align: right;
            display:block;
        }   
    
        ul {
            list-style: none;
            margin: 15px 15px 0 0;
        }
    
        li.active a{
            color: white;
        }
    
        li:not(.active){
            opacity:.4;
        }
    
        li:not(.active):hover a {
            color: rgb(189, 104, 0);
        }
        a {
            color: white;
            transition: all ease-out 300ms;
            font-size: 1.5vw;
        }
    
    
    
    
    
    </style>

    