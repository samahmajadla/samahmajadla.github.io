import{S as B,i as T,s as q,B as N,k as _,a as C,l as w,m as I,h as p,c as j,n as f,C as F,b as A,D as b,J as ie,K as de,E as Q,F as U,G as K,L as ue,f as k,t as S,M as he,N as ge,O as me,P as fe,I as z,A as P,d as ae,Q as oe,e as X,g as re,v as O,w as V,x as L,y as J,q as W,r as G,p as pe}from"../../../chunks/index-11ae60a6.js";function ye(n,e){e=Object.assign({open:!0,duration:.2,easing:"ease"},e);const t=()=>{};let i=t,s=t;const l=n.addEventListener("transitionend",()=>{i(),i=t,s=t});async function h(){return new Promise((u,M)=>{i=u,s=M})}async function o(){return new Promise(requestAnimationFrame)}function r(){return`height ${e.duration}s ${e.easing}`}n.style.overflow="hidden",n.style.transition=r(),n.style.height=e.open?"auto":"0px";async function m(){n.style.height=n.scrollHeight+"px";try{await h(),n.style.height="auto"}catch{}}async function g(){n.style.height==="auto"?(n.style.transition="none",await o(),n.style.height=n.scrollHeight+"px",n.style.transition=r(),await o(),n.style.height="0px"):(s(),n.style.height="0px")}function d(u){e=Object.assign(e,u),e.open?m():g()}function c(){n.removeEventListener("transitionend",l)}return{update:d,destroy:c}}const be=n=>({}),Z=n=>({}),ve=n=>({}),$=n=>({});function _e(n){let e,a,t,i,s,l,h,o;const r=n[5].header,m=N(r,n,n[4],$),g=n[5].body,d=N(g,n,n[4],Z);return{c(){e=_("div"),a=_("div"),m&&m.c(),t=C(),i=_("div"),d&&d.c(),this.h()},l(c){e=w(c,"DIV",{class:!0,"aria-expanded":!0});var u=I(e);a=w(u,"DIV",{class:!0});var M=I(a);m&&m.l(M),M.forEach(p),t=j(u),i=w(u,"DIV",{class:!0});var E=I(i);d&&d.l(E),E.forEach(p),u.forEach(p),this.h()},h(){f(a,"class","card-header svelte-yon7im"),f(i,"class","card-body"),f(e,"class","card"),f(e,"aria-expanded",n[0]),F(e,"open",n[0])},m(c,u){A(c,e,u),b(e,a),m&&m.m(a,null),b(e,t),b(e,i),d&&d.m(i,null),l=!0,h||(o=[ie(a,"click",n[3]),de(s=ye.call(null,i,{open:n[0],duration:n[1],easing:n[2]}))],h=!0)},p(c,[u]){m&&m.p&&(!l||u&16)&&Q(m,r,c,c[4],l?K(r,c[4],u,ve):U(c[4]),$),d&&d.p&&(!l||u&16)&&Q(d,g,c,c[4],l?K(g,c[4],u,be):U(c[4]),Z),s&&ue(s.update)&&u&7&&s.update.call(null,{open:c[0],duration:c[1],easing:c[2]}),(!l||u&1)&&f(e,"aria-expanded",c[0]),(!l||u&1)&&F(e,"open",c[0])},i(c){l||(k(m,c),k(d,c),l=!0)},o(c){S(m,c),S(d,c),l=!1},d(c){c&&p(e),m&&m.d(c),d&&d.d(c),h=!1,he(o)}}}function we(n,e,a){let{$$slots:t={},$$scope:i}=e,{open:s=!0}=e,{duration:l=.2}=e,{easing:h="ease"}=e;const o=ge();function r(){a(0,s=!s),o(s?"open":"close")}return n.$$set=m=>{"open"in m&&a(0,s=m.open),"duration"in m&&a(1,l=m.duration),"easing"in m&&a(2,h=m.easing),"$$scope"in m&&a(4,i=m.$$scope)},[s,l,h,r,i,t]}class le extends B{constructor(e){super(),T(this,e,we,_e,q,{open:0,duration:1,easing:2})}}function Ie(n){let e,a,t,i,s,l,h,o,r,m,g,d,c,u,M,E,D,R;return{c(){e=_("article"),a=_("div"),i=C(),s=_("span"),h=C(),o=_("div"),r=_("span"),m=_("strong"),g=C(),d=new me(!1),c=C(),u=_("img"),this.h()},l(v){e=w(v,"ARTICLE",{class:!0});var y=I(e);a=w(y,"DIV",{class:!0}),I(a).forEach(p),i=j(y),s=w(y,"SPAN",{class:!0});var se=I(s);se.forEach(p),h=j(y),o=w(y,"DIV",{class:!0});var Y=I(o);r=w(Y,"SPAN",{class:!0});var H=I(r);m=w(H,"STRONG",{});var ce=I(m);ce.forEach(p),g=j(H),d=fe(H,!1),H.forEach(p),Y.forEach(p),c=j(y),u=w(y,"IMG",{src:!0,alt:!0,class:!0}),y.forEach(p),this.h()},h(){f(a,"class","overlay svelte-1q5l537"),a.hidden=t=!n[0],f(s,"class","card-name svelte-1q5l537"),s.hidden=l=!n[0],d.a=null,f(r,"class","bio svelte-1q5l537"),r.hidden=n[0],f(o,"class","bioHolder svelte-1q5l537"),o.hidden=n[0],z(u.src,M=n[2])||f(u,"src",M),f(u,"alt",n[4]),u.hidden=E=!n[0],f(u,"class","svelte-1q5l537"),f(e,"class","svelte-1q5l537")},m(v,y){A(v,e,y),b(e,a),b(e,i),b(e,s),s.innerHTML=n[1],b(e,h),b(e,o),b(o,r),b(r,m),m.innerHTML=n[1],b(r,g),d.m(n[3],r),b(e,c),b(e,u),D||(R=ie(e,"click",n[5]),D=!0)},p(v,[y]){y&1&&t!==(t=!v[0])&&(a.hidden=t),y&2&&(s.innerHTML=v[1]),y&1&&l!==(l=!v[0])&&(s.hidden=l),y&2&&(m.innerHTML=v[1]),y&8&&d.p(v[3]),y&1&&(r.hidden=v[0]),y&1&&(o.hidden=v[0]),y&4&&!z(u.src,M=v[2])&&f(u,"src",M),y&16&&f(u,"alt",v[4]),y&1&&E!==(E=!v[0])&&(u.hidden=E)},i:P,o:P,d(v){v&&p(e),D=!1,R()}}}function ke(n,e,a){let{name:t}=e,{img:i}=e,{bio:s}=e,{alt:l}=e,{bioHidden:h=!0}=e;const o=()=>{a(0,h=!h)};return n.$$set=r=>{"name"in r&&a(1,t=r.name),"img"in r&&a(2,i=r.img),"bio"in r&&a(3,s=r.bio),"alt"in r&&a(4,l=r.alt),"bioHidden"in r&&a(0,h=r.bioHidden)},[h,t,i,s,l,o]}class Se extends B{constructor(e){super(),T(this,e,ke,Ie,q,{name:1,img:2,bio:3,alt:4,bioHidden:0})}}function x(n,e,a){const t=n.slice();return t[3]=e[a],t}function ee(n,e,a){const t=n.slice();return t[6]=e[a],t}function Me(n){let e,a;return e=new le({props:{open:n[3].title=="Overview"||n[3].title=="Important Dates"||n[3].title=="Current Mentors",$$slots:{body:[Ae],header:[je]},$$scope:{ctx:n}}}),{c(){O(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){L(e,t,i),a=!0},p(t,i){const s={};i&512&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){S(e.$$.fragment,t),a=!1},d(t){J(e,t)}}}function Ce(n){let e,a;return e=new le({props:{open:!1,$$slots:{body:[Pe],header:[Ee]},$$scope:{ctx:n}}}),{c(){O(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){L(e,t,i),a=!0},p(t,i){const s={};i&512&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){S(e.$$.fragment,t),a=!1},d(t){J(e,t)}}}function je(n){let e,a=n[3].title+"",t;return{c(){e=_("h3"),t=W(a),this.h()},l(i){e=w(i,"H3",{slot:!0,class:!0,id:!0});var s=I(e);t=G(s,a),s.forEach(p),this.h()},h(){f(e,"slot","header"),f(e,"class","card-title svelte-qnnxpj"),f(e,"id",n[3].title)},m(i,s){A(i,e,s),b(e,t)},p:P,d(i){i&&p(e)}}}function Ae(n){let e,a=n[3].content+"";return{c(){e=_("div"),this.h()},l(t){e=w(t,"DIV",{class:!0,slot:!0});var i=I(e);i.forEach(p),this.h()},h(){f(e,"class","card-content svelte-qnnxpj"),f(e,"slot","body")},m(t,i){A(t,e,i),e.innerHTML=a},p:P,d(t){t&&p(e)}}}function Ee(n){let e,a=n[3].title+"",t,i;return{c(){e=_("h3"),t=W(a),i=C(),this.h()},l(s){e=w(s,"H3",{slot:!0,class:!0});var l=I(e);t=G(l,a),i=j(l),l.forEach(p),this.h()},h(){f(e,"slot","header"),f(e,"class","card-title svelte-qnnxpj")},m(s,l){A(s,e,l),b(e,t),b(e,i)},p:P,d(s){s&&p(e)}}}function te(n){let e,a;return e=new Se({props:{name:n[6].name,img:n[6].img,alt:n[6].alt,bio:n[6].bio}}),{c(){O(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){L(e,t,i),a=!0},p:P,i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){S(e.$$.fragment,t),a=!1},d(t){J(e,t)}}}function Pe(n){let e,a,t,i,s,l;function h(...g){return n[2](n[3],...g)}let o=n[1].filter(h),r=[];for(let g=0;g<o.length;g+=1)r[g]=te(ee(n,o,g));const m=g=>S(r[g],1,1,()=>{r[g]=null});return{c(){e=_("div"),a=_("p"),t=W("Click on a mentor image to see their bio."),i=C();for(let g=0;g<r.length;g+=1)r[g].c();s=C(),this.h()},l(g){e=w(g,"DIV",{class:!0,slot:!0});var d=I(e);a=w(d,"P",{style:!0});var c=I(a);t=G(c,"Click on a mentor image to see their bio."),c.forEach(p),i=j(d);for(let u=0;u<r.length;u+=1)r[u].l(d);s=j(d),d.forEach(p),this.h()},h(){pe(a,"flex-basis","100%"),f(e,"class","mentor svelte-qnnxpj"),f(e,"slot","body")},m(g,d){A(g,e,d),b(e,a),b(a,t),b(e,i);for(let c=0;c<r.length;c+=1)r[c].m(e,null);b(e,s),l=!0},p(g,d){if(n=g,d&3){o=n[1].filter(h);let c;for(c=0;c<o.length;c+=1){const u=ee(n,o,c);r[c]?(r[c].p(u,d),k(r[c],1)):(r[c]=te(u),r[c].c(),k(r[c],1),r[c].m(e,s))}for(re(),c=o.length;c<r.length;c+=1)m(c);ae()}},i(g){if(!l){for(let d=0;d<o.length;d+=1)k(r[d]);l=!0}},o(g){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)S(r[d]);l=!1},d(g){g&&p(e),oe(r,g)}}}function ne(n){let e,a,t,i;const s=[Ce,Me],l=[];function h(o,r){return o[3].title==="Current Mentors"||o[3].title==="Past Mentors"?0:1}return e=h(n),a=l[e]=s[e](n),{c(){a.c(),t=X()},l(o){a.l(o),t=X()},m(o,r){l[e].m(o,r),A(o,t,r),i=!0},p(o,r){a.p(o,r)},i(o){i||(k(a),i=!0)},o(o){S(a),i=!1},d(o){l[e].d(o),o&&p(t)}}}function He(n){let e,a,t=n[0],i=[];for(let l=0;l<t.length;l+=1)i[l]=ne(x(n,t,l));const s=l=>S(i[l],1,1,()=>{i[l]=null});return{c(){e=_("div");for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){e=w(l,"DIV",{id:!0,class:!0});var h=I(e);for(let o=0;o<i.length;o+=1)i[o].l(h);h.forEach(p),this.h()},h(){f(e,"id","mentorship"),f(e,"class","details container svelte-qnnxpj")},m(l,h){A(l,e,h);for(let o=0;o<i.length;o+=1)i[o].m(e,null);a=!0},p(l,[h]){if(h&3){t=l[0];let o;for(o=0;o<t.length;o+=1){const r=x(l,t,o);i[o]?(i[o].p(r,h),k(i[o],1)):(i[o]=ne(r),i[o].c(),k(i[o],1),i[o].m(e,null))}for(re(),o=t.length;o<i.length;o+=1)s(o);ae()}},i(l){if(!a){for(let h=0;h<t.length;h+=1)k(i[h]);a=!0}},o(l){i=i.filter(Boolean);for(let h=0;h<i.length;h+=1)S(i[h]);a=!1},d(l){l&&p(e),oe(i,l)}}}function De(n){return[[{title:"Overview",content:`<p><a href="/community">Habibi Code</a> hosts a mentorship program with three-month long mentorship
		cycles for individuals who identify as a minority in the tech industry (women, BIPOC, Latinx, LGBTQ+
		individuals, formerly incarcerated, low socio-economic background, non-traditional educational background,
		etc). As a participant in this program, you will get one on one time with mentors that can be used
		in whatever ways best suit your needs. You can read more about the program, as well as our mentors,
		below!</p><p style="color:darkgreen"><b><i>Applications for the Spring 2023: March - May cycle are closed. Applications for the Summer cycle will open in May. </i></b></p>`},{title:"Important Dates",content:'<ul style="text-align:left;; text-align: left"><li><b>Jan 06, 2023: Application form closes.</b></li><li>Jan 07, 2023: Interviews begin</li><li>Jan 31, 2023: Interviews end</li><li>Feb 11, 2023: Applicants notified of decision</li><li>Mar 01, 2023:  Mentorship cycle begins! </li><li>May 31, 2023: Mentorship cycle ends.</li></ul>'},{title:"Program",content:'<i>You can use this program for whatever best suits your needs, including but not limited to:</i>	<ul style="padding-inline:20%; text-align: left">		<li>Advice and guidance on education</li>		<li>Advice and guidance on career</li>		<li>Resume review</li>		<li>Brainstorming support (technical or product)</li>		<li>Interview prep</li>		<li>Support in learning a new tool or technology</li>		<li>Reviewing and further exloring computer science and/or software engineering concepts</li>		<li>			Troubleshooting, debugging, or code review (note: mentors will help point you in the right			direction as opposed to providing a solution)		</li>	</ul>	You may request to focus on other topics or ideas during the 1:1 time, however mentors reserve the	right to decline to focus on any topic for any reason.'},{title:"Current Mentors",content:"hh"},{title:"Qualifications",content:'In order to qualify for this opportunity, you should:	<ul style="text-align: left;padding-inline:20%;">		<li>Identify as a minority in the tech industry.</li>		<li>			Be able to commit to meeting for 30 minutes every two weeks, and 45 minutes every month.		</li>	</ul>'},{title:"Expectations and Further Details",content:'<p>		If you are chosen to be a part of this program, you are expected to commit to the following:	</p>	<ul style="text-align: left;padding-inline:20%;">		<li>1:1 meeting every 2 weeks (half hour)</li>		<li>You are encouraged to join the two Panel and Q&A style group meetings (45 minutes, dates TBD)</li>	</ul>	<p>		You will also be invited to join all of our <a href="../community">Habibi Code</a> events. Other		information:	</p>	<ul style="text-align: left;padding-inline:20%;">		<li>You will coordinate with your mentor on your meeting times.</li>		<li>			You will have access to private channels to communicate with your mentor and the mentorship community.		</li>	</ul>'},{title:"Interested? Application and Next Steps",content:"Unfortunately, applications are closed at this time. Please check back with us in May 2023."},{title:"Past Mentors"}],[{name:"Cole Wyman",current:!0,img:"coal.jpeg",alt:"Cole smiling over breakfast at a restaurant",bio:`I studied Materials Science & Engineering and Computer Science at
			University of Michigan for a few years before deciding to leave college and begin working. I
			bopped around between freelance jobs doing frontend and mobile web development to varying
			degrees of success before finally landing my first software engineering role at a consultancy.
			In the years since, I\u2019ve been able to grow a lot in my role and hone my skills in distributed
			systems, code cleanliness, and frontend development.

			As someone whose career was made possible by the willingness of my friends and colleagues to give
			me a chance despite a lack of formal accreditation, mentorship has always been an important means
			for me to give back to the community and lift up other talented, hard-working individuals that
			haven\u2019t had that same fortune of circumstance. I believe anyone with drive and desire can succeed
			in this field and I hope to be able to help elevate new technologists in their career goals.
		
			Outside of work, I\u2019m a fan of food, artsy stuff, and comedy. As a Detroiter living in NYC, I have
			great access to all three, and I love getting the chance to bring my friends and family around
			for Broadway shows and Korean BBQ.`},{name:"Ellis Parker",current:!0,img:"ellis.jpg",alt:"Ellis smiling at the camera",bio:`(they/them/theirs) - Education: M.S. from Wayne State in Computer Science/Artificial
			Intelligence; B.S. from Eastern Michigan University in Computer Science Career: Current Software
			Developer at General Motors (since 2019) in Financial Analytics IT Working on: An application for
			transactional level forecasting - I design and build databases Interested in: AI, data science,
			machine learning, SQL, DEI, community volunteering Likes: Music, food, drag, matcha lattes Dislikes:
			Dunkin Doughnuts, transphobia, bad drivers`},{name:"Samah Majadla",current:!0,img:"samah_headshot_small.jpeg",alt:"Samah smiling for the camera",bio:`I have a Bachelor of Arts in Computer Science and Studio Art, and
			Masters of Science in Computer Science. I am a Product Manager at VMware, where I help clients
			with implementation and maturation of their cloud infrastructure. I am currently working on a
			full-stack application for Prison Books Collective, a non-profit that sends free books to
			individuals incarcerated in North Carolina and Alabama; the app is being developed using Java,
			Spring Boot, Hibernate/JPA, MySQL, SvelteKit, HTML, Javascript, and CSS. <br><br>You can learn more
			<a href="/about">about my background here.</a><br>
			In my free time, I like to make things (robotics, beaded jewelry, nails), being active (paddleboarding,
			going to the ocean, hiking, exploring cities, dancing, kickboxing), and spending time with those
			I love.`},{name:"Vaughn Walker",current:!0,img:"vaughn.jpeg",alt:"Vaughn smiling for the camera",bio:`Career background: I have 4 years of engineering experience with the
			last 3.5 years at the company Integral. My current role is senior software engineer. I've
			spent the majority of my time doing projects related to the automotive space. Outside of that,
			I have a side business of selling printed product labels which is adjacent to my old line of
			work in the printing industry where I spent 14 years operating a printing press before making
			the career switch to IT.<br /><br />When I'm not working I enjoy spending time with my family, riding my one wheel, traveling, and
			building my new vinyl record collection.`},{name:"DeShayla Cisero <br/> Winter 2022",current:!1,img:"DeShayla.JPG",alt:"DeShayla smiling at the camera",bio:`I have a Bachelor of Arts in Communication and Marketing, certified Software
			Developer (Java), and Certified Scrum Product Owner. I am a professional Coach and Owner of Joy
			Code and an Agile Product Manager. Currently interested in growing my knowledge and skills in Artificial
			Intelligence and learning new ways tech can improve our quality of life. Passionate about leaving
			people greater than I found them!`},{name:"Supraja Kalva <br/> Winter 2022",current:!1,img:"supraja.JPG",alt:"Supraja smiling at the camera",bio:`Supraja (she/her/hers) graduated from Eastern Michigan University as a Presidential
	Scholar with a Bachelor of Science in Computer Science (Applied) and Neuroscience Interdisciplinary,
	along with University Honors, Departmental Honors in both majors, and Highest Honors. She is currently
	working at General Motors as a Speech Certification Test Engineer. She is very interested in the
	neurotechnology and neuroengineering space, hoping to get a PhD in the related fields in the future.
	She loves hiking, learning about new cultures and languages, and a fellow art enthusiast.`},{name:"Vera Reynolds <br/> Winter 2022",current:!1,img:"vera.png",alt:"Vera is drawn as a caricature bee, holding her two cats",bio:`Hi! I'm Vera. I have a BA in Psychology and a BS in Computer Science. I've
			been a software engineer since 2012. Over the years I worked at a number of companies, from small
			consulting firms to large organizations. I currently work at a startup called Honeycomb that provides
			a monitoring platform for other software engineers. I'm very much a generalist when it comes to
			languages and frameworks, but my competency is mostly around web technologies. I'm interested in
			digital rights and privacy, open-source, and developer tooling. Oh, and cats :)`},{name:"Amber Salome",current:!0,img:"amber.jpeg",alt:"Amber smiling for camera",bio:"My name is Amber Salome and I am based out of Chicago, Illinois. I studied Computer Science and Biology at Kalamazoo College, and focused on the intersection of these two fields. After college I spent a year as a software engineer, then transitioned to being a Solutions Architect. I now focus on observability/monitoring, devops, and computer infrastructure. My favorite things to work on are kubernetes/helm and building intuitive dashboards. In my free time I love riding my bike and cooking new recipes!"},{name:"Elise Griffiths",current:!0,img:"elise.png",alt:"Elise smiling for the camera",bio:"Hi, I'm Elise! I was one of those kids who went through a bunch of different majors in college, settled on Mechanical Engineering, and then wound up back in software somehow! I was recently promoted to manage a software engineering team called FordLabs (check us out! www.fordlabs.com). These days I'm still working on learning about the usual things that come with management, leadership strategies, a bit of bureaucracy, and figuring out how to best help my team. When I get to jump in the code, I love experimenting with little ideas that can help make the big idea go. Sometimes I just experiment with huge ideas for the fun of it. On my off time I love getting out and doing things. I have niche hobbies like ballroom dance and speedskating, but also enjoy more typical things like art, running, and watching sports (go blue!)."},{name:"Jaimie Black",current:!0,img:"jaimie.jpg",alt:"Jaimie posing with her hand on her face",bio:"My name is Jaimie (they/them!) and I am a self-taught backend developer with about 2 years of work experience. Currently, I build Python microservices. I do a lot of API design and documentation work as well-- good documentation is a HUGE passion of mine! On the side, I do the occasional fullstack project, so I know my way around CSS and Javascript."},{name:"Grace Wingo",current:!0,img:"https://unsplash.it/200/200",alt:"placeholder",bio:"grace wingo currently works as a software engineer at Vox Media where they work primarily on ad tech. they have a masters in educational psychology and a b.a in theatre. in their free time they enjoy playing guitar, running, reading, hiking, and exploring new places and meeting new people. they're passionate about inclusion, slow living, and rest."},{name:"Wael Rabadi",current:!0,img:"wael.png",alt:"Wael looking at a computer screen off camera",bio:"My name is Wael Rabadi and I've been in the software development professional track since for over 20 years. My current position is a Senior Technical Solution Architect at VMware. I focus on building business application that run on modern cloud native architecture. I focus on highly available and scalable solutions. I enjoy working on all aspects of the application and enjoy thinking about the process and logic. In my spare time, I enjoy looking into IoT and microprocessor programming."}],(i,s)=>i.title=="Current Mentors"?s.current:!s.current]}class Te extends B{constructor(e){super(),T(this,e,De,He,q,{})}}export{Te as default};