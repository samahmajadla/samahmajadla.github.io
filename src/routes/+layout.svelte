<script>import { page } from '$app/stores';

</script>
<aside class="sidebar">
    <nav class="nav">
        <ul>
            <li class:active={$page.url.pathname === '/'}><a href="/">Home</a></li>
            <li class:active={$page.url.pathname === '/about'}><a href="../about">About</a></li>
            <li class:active={$page.url.pathname === '/mentorship'}><a href="../mentorship">Mentorship</a></li>
            <li class:active={$page.url.pathname === '/community'}><a href="../community">Habibi Code - Join Our Community</a></li>
        </ul>
    </nav>
    </aside>
    
    <slot></slot>

    <style>
        
        .sidebar{
            font-family: 'Advent';
            position:fixed;
            width: 100%;
            text-align: center;
            min-height: 30px;
            left: 0;
            top: 0;
            z-index: 1;
            background-color: white;
            
            
        }   
    
        ul {
            list-style: none;
            padding-inline-start: 0;

        }
    
        li {
           display: inline;
           padding-left: 5pt;
           padding-right: 5pt;
        }
        li.active a{
            color: rgb(0, 0, 0);
            font-weight:bold;
        }
    
        li:not(.active){
            opacity:.4;
        }
    
        li:not(.active):hover a {
            color: rgba(0, 194, 0, 0.66);
        }
        a {
            color: rgb(0, 0, 0);
            transition: all ease-out 300ms;
            font-size: medium;
        }
    
    
    
    
    
    </style>

    