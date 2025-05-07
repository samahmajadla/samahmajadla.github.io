<script>
	import { CollapsibleCard } from 'svelte-collapsible'

	import MentorBioCard from './mentor-bio-card.svelte'

	const page_sections = [{
			title: "Overview",
			content: `<p><a href="/community">Habibi Code</a> hosts a mentorship program with three-month long mentorship
		cycles for individuals who identify as a minority in the tech industry (women, BIPOC, Latinx, LGBTQ+
		individuals, formerly incarcerated, low socio-economic background, non-traditional educational background,
		etc). As a participant in this program, you will get one on one time with mentors that can be used
		in whatever ways best suit your needs. You can read more about the program below!</p><p style="color:darkgreen"><b><i>The mentorship program is currently on pause.</i></b></p>`},
		// {
		// 	title: "Important Dates",
		// 	content: `<ul style="text-align:left;; text-align: left"><li style="margin-bottom:5px;">Dec 07, 2023: Spring 2024 Mentorship Program Application form opens.</li><li style="margin-bottom:5px;"><b>Jan 07, 2024: Application closes.</b></li><li style="margin-bottom:5px;">Feb 15, 2024: Mentorship pairings announced.</li><li style="margin-bottom:5px;">Mar 01, 2024:    Mentorship cycle begins! </li><li style="margin-bottom:5px;">May 31, 2024: Mentorship cycle ends.</li></ul>`
		// },
		// {
		// 	title: "Program",
		// 	content: `<i>You can use this program for whatever best suits your needs, including but not limited to:</i>	<ul style="padding-inline:20%; text-align: left">		<li>Guidance or discussion on education or career</li><li>Resume review</li>		<li>Practice giving or receiving feedback</li>		<li>Interview prep</li>		<li>Support in learning a new tool or technology</li>		<li>Goals discussions</li>	<li>Reflection or review (of specific scenarios, behavior, writing, presentations, ideas, projects, etc)</li>	</ul>	You may request to focus on other topics or ideas during the 1:1 time, however mentors reserve the	right to decline to focus on any topic for any reason. All participants in the program will be invited to a Kickoff event and will receive a mentorship guidebook.`
		// },
		// {
		// 	title: "Current Mentors",
		// 	content: "hh"
		// },
		// {
		// 	title: "Qualifications",
		// 	content: `In order to qualify for this opportunity, you should:	<ul style="text-align: left;padding-inline:20%;">		<li>Identify as a minority in the tech industry.</li>		<li>			Be able to commit to meeting with your mentor every two weeks for 30 minutes.		</li>	</ul>`
		// },
		// {
		// 	title: "Expectations and Further Details",
		// 	content: `<p>		If you are chosen to be a part of this program, you are expected to commit to the following:	</p>	<ul style="text-align: left;padding-inline:20%;">		<li>1:1 meeting every 2 weeks (half hour)</li></ul>	<p>	 Other		information:	</p>	<ul style="text-align: left;padding-inline:20%;"><li>You are encouraged to join our <a href="../community">Habibi Code</a> events, including at least one Mentor Q&A Panel (45 minutes, dates TBD)</li>			<li>You will coordinate with your mentor on your meeting times.</li>		<li>			You will have access to private channels to communicate with your mentor and the mentorship community.		</li>	</ul>`
		// },
		// {
		// 	title: "Interested? Application and Next Steps",
		
		// 	content: `The application form for the Spring 2024 cycle is closed. Check back in for the Summer cycle in April/May.<br><br>There will be no interviews as a part of the application process for the upcoming cycle. Applicants will receive updates and further communications from Samah starting on January 8th, 2024 and will be informed of their application result by February 15th, 2024.`
		// },
		{
			title: "Past Mentors"
		}

	]

	const currentMentors = [
		
		{
		name: "Amber Salome",
		current: false,
		img: "amber.jpeg",
		alt: "Amber smiling for camera",
		bio: "My name is Amber Salome and I am based out of Chicago, Illinois. I studied Computer Science and Biology at Kalamazoo College, and focused on the intersection of these two fields. After college I spent a year as a software engineer, then transitioned to being a Solutions Architect. I now focus on observability/monitoring, devops, and computer infrastructure. My favorite things to work on are kubernetes/helm and building intuitive dashboards. In my free time I love riding my bike and cooking new recipes!"
	},
{
		name: "Carrie Wallace",
		current: false,
		img: "carrie.jpeg",
		alt: "Carrie smiling brightly at the camera",
		bio: "Carrie Wallace, graduated from Michigan with a degree in Classical Archaeology, took a 6 mo coding course and now work in Salesforce. Currently working on a Lightning Migration/CRM upgrade for NextGear Capital, a division of Cox Auto. I really love the flexibility Salesforce offers to all levels of tech understanding. I’m passionate about leading with compassion and understanding rather than micromanaging and fear mongering.  Can’t wait to help someone transform their career the way I was able to!"
	},

	{
			name: "Cole Wyman",
			current: false,
			img: "coal.jpeg",
			alt: "Cole smiling over breakfast at a restaurant",
			bio: `I studied Materials Science & Engineering and Computer Science at
			University of Michigan for a few years before deciding to leave college and begin working. I
			bopped around between freelance jobs doing frontend and mobile web development to varying
			degrees of success before finally landing my first software engineering role at a consultancy.
			In the years since, I’ve been able to grow a lot in my role and hone my skills in distributed
			systems, code cleanliness, and frontend development.

			As someone whose career was made possible by the willingness of my friends and colleagues to give
			me a chance despite a lack of formal accreditation, mentorship has always been an important means
			for me to give back to the community and lift up other talented, hard-working individuals that
			haven’t had that same fortune of circumstance. I believe anyone with drive and desire can succeed
			in this field and I hope to be able to help elevate new technologists in their career goals.
		
			Outside of work, I’m a fan of food, artsy stuff, and comedy. As a Detroiter living in NYC, I have
			great access to all three, and I love getting the chance to bring my friends and family around
			for Broadway shows and Korean BBQ.`
		},
	
		{
		name: "DeShayla Cisero",
		current: false,
		img: "DeShayla.JPG",
		alt: "DeShayla smiling at the camera",
		bio: `I have a Bachelor of Arts in Communication and Marketing, certified Software
			Developer (Java), and Certified Scrum Product Owner. I am a professional Coach and Owner of Joy
			Code and an Agile Product Manager. Currently interested in growing my knowledge and skills in Artificial
			Intelligence and learning new ways tech can improve our quality of life. Passionate about leaving
			people greater than I found them!`
		},

		{
		name: "Diana Richardson",
		current: false,
		img: "diana.JPG",
		alt: "Carrie smiling brightly at the camera",
		bio: "Diana Richardson, University of Mississippi - Management Information Systems, Management, Computer Science. Senior level product/project manager with experience as BA, QA. Currently working as Principal Technical Product Manager - creating next gen applications and managing team success. Interested in employee volunteerism and charitable contributions, giving back. Wife, Mother to many tiny humans, I do CrossFit occasionally"
	},
	{
		name: "Elise Griffiths",
		current: false,
		img: "elise.png",
		alt: "Elise smiling for the camera",
		bio: "Hi, I'm Elise! I was one of those kids who went through a bunch of different majors in college, settled on Mechanical Engineering, and then wound up back in software somehow! I was recently promoted to manage a software engineering team called FordLabs (check us out! www.fordlabs.com). These days I'm still working on learning about the usual things that come with management, leadership strategies, a bit of bureaucracy, and figuring out how to best help my team. When I get to jump in the code, I love experimenting with little ideas that can help make the big idea go. Sometimes I just experiment with huge ideas for the fun of it. On my off time I love getting out and doing things. I have niche hobbies like ballroom dance and speedskating, but also enjoy more typical things like art, running, and watching sports (go blue!)."
	},
		{
		name: "Grace Wingo",
		current: false,
		img: "grace.jpeg",
		alt: "Grace smiling brightly into the camera",
		bio: "grace wingo currently works as a software engineer at Vox Media where they work primarily on ad tech. they have a masters in educational psychology and a b.a in theatre. in their free time they enjoy playing guitar, running, reading, hiking, and exploring new places and meeting new people. they're passionate about inclusion, slow living, and rest."
	},

	{
		name: "Jaimie Black",
		current: false,
		img: "jaimie.jpg",
		alt: "Jaimie posing with her hand on her face",
		bio: "My name is Jaimie (they/them!) and I am a self-taught backend developer with about 2 years of work experience. Currently, I build Python microservices. I do a lot of API design and documentation work as well-- good documentation is a HUGE passion of mine! On the side, I do the occasional fullstack project, so I know my way around CSS and Javascript."
	},
		
		{
		name: "Supraja Kalva",
		current: false,
		img: "supraja.JPG",
		alt: "Supraja smiling at the camera",
		bio: `Supraja (she/her/hers) graduated from Eastern Michigan University as a Presidential
		Scholar with a Bachelor of Science in Computer Science (Applied) and Neuroscience Interdisciplinary,
		along with University Honors, Departmental Honors in both majors, and Highest Honors. She is currently
		working at General Motors as a Speech Certification Test Engineer. She is very interested in the
		neurotechnology and neuroengineering space, hoping to get a PhD in the related fields in the future.
		She loves hiking, learning about new cultures and languages, and a fellow art enthusiast.`
	},{
			name: "Vaughn Walker",
			current: false,
			img: "vaughn.jpeg",
			alt: "Vaughn smiling for the camera",
			bio: `Career background: I have 4 years of engineering experience with the
			last 3.5 years at the company Integral. My current role is senior software engineer. I've
			spent the majority of my time doing projects related to the automotive space. Outside of that,
			I have a side business of selling printed product labels which is adjacent to my old line of
			work in the printing industry where I spent 14 years operating a printing press before making
			the career switch to IT.<br /><br />When I'm not working I enjoy spending time with my family, riding my one wheel, traveling, and
			building my new vinyl record collection.`
		},
	{
		name: `Vera Reynolds`,
		current: false,
		img: "vera.png",
		alt: "Vera is drawn as a caricature bee, holding her two cats",
		bio: `Hi! I'm Vera. I have a BA in Psychology and a BS in Computer Science. I've
				been a software engineer since 2012. Over the years I worked at a number of companies, from small
				consulting firms to large organizations. I currently work at a startup called Honeycomb that provides
				a monitoring platform for other software engineers. I'm very much a generalist when it comes to
				languages and frameworks, but my competency is mostly around web technologies. I'm interested in
				digital rights and privacy, open-source, and developer tooling. Oh, and cats :)`
	},
	
	{
		name: "Wael Rabadi",
		current: false,
		img: "wael.png",
		alt: "Wael looking at a computer screen off camera",
		bio: "My name is Wael Rabadi and I've been in the software development professional track since for over 20 years. My current position is a Senior Technical Solution Architect at VMware. I focus on building business application that run on modern cloud native architecture. I focus on highly available and scalable solutions. I enjoy working on all aspects of the application and enjoy thinking about the process and logic. In my spare time, I enjoy looking into IoT and microprocessor programming."
	},
	{
		name: "Alex Ewings",
		current: false,
		img: "alex.png",
		alt: "Alex is sitting on a railing at the beach, with sunglasses on.",
		bio: "My name is Alex Ewings, throughout college I changed my major about 5 times before deciding on pursuing a career in IT. I now have over 9 years of experience across several different information technology roles (primarily on the platform side of IT). I'm currently a Solutions Architect, with a focus on Kubernetes, observability/monitoring, CI/CD, and computer infrastructure. My favorite things to work on are Kubernetes and building intuitive dashboards through Grafana/Prometheus. Outside of work I enjoy tinkering on my car, flying general aviation aircraft recreationally, traveling (going to different beaches), exercising and helping struggling nonprofit companies with different IT related issues theyre dealing with."
	},
	{
			name: "Alex Reynolds",
			current: false,
			img: "alex_reynolds.jpg",
			alt: "Alex is lounging behind his cat, wearing a white shirt. Both Alex and cat are looking at the camera, Alex with a big smile.",
			bio: "I’ve always been an auto-didact, which has worked out well now that I have ~10 years experience in web / application development. I generally prefer the backend side of the stack, and also have lots of interest in security and privacy topics. Hobbies include disc golf, D&D, and travel. A perfect day is often something as simple as a hammock in a shady spot next to the lake, with my latest novel in hand."
		},
		
	
	{
			name: "Ellis Parker",
			current: false,
			img: "ellis.jpg",
			alt: "Ellis smiling at the camera",
			bio: `(they/them/theirs) - Education: M.S. from Wayne State in Computer Science/Artificial
			Intelligence; B.S. from Eastern Michigan University in Computer Science Career: Current Software
			Developer at General Motors (since 2019) in Financial Analytics IT Working on: An application for
			transactional level forecasting - I design and build databases Interested in: AI, data science,
			machine learning, SQL, DEI, community volunteering Likes: Music, food, drag, matcha lattes Dislikes:
			Dunkin Doughnuts, transphobia, bad drivers`
		},
		
		{
			name: "Jenni",
			current: false,
			img: "jenni.png",
			alt: "Jenni, a person with peach/pink colored hair, black glasses, and a hat is smiling next to a yellow slug.",
			bio: "Howdy, it's Jenni! I'm currently a cybersecurity analyst that specializes in response / defense (e.g. finding the attackers and helping my clients stop them, and prevent such things from happening in the future), with about 8 years in IT / security at this point. My favorite things to do work-wise are working on incidents and helping teach/mentor new analysts! I have a maths degree which I got as a personal joke (because I'm terrible at math) and am primarily self-taught when it comes to IT/security. In my free time, I still enjoy discussing security and also like poetry / spiders / biology (pic is me with a pacific banana slug). In a few years I'll probably work in some sort of leadership capacity and am preparing myself so that I can be a good human in that capacity."
		},

		{
			name: "Mari",
			current: false,
			img: "mari.jpg",
			alt: "",
			bio: `Hello! My name is Mari and I work in game development. My current role is a Product Manager for mobile games, with a specialization in live operations. Never heard of it? You can learn more about it <a href="https://videohub.inspiring-girls.com/en/videos/mari-yalong">here!</a> <br> While seemingly an odd concoction of backgrounds, they all somehow led me here, to my dream job in an industry very near and dear to my life. Both during and after college, I worked various roles in hospitality and marketing, while pursuing my degree in economics. Weirdly enough, that’s exactly the skill set needed in live operations: analysis, a curiosity of human behavior, and event and monetization planning. <br> I work with an array of teams across development, design, art, QA, community, and more, while looking at data tools to determine the best plans of action moving forward. <br> <br> While I’m not sitting at my desk, I enjoy sitting at my other desk to play Minecraft or sitting at the living room playing couch co-op games like Army of Two. <br> <br> When I’m not sitting, I’m playing volleyball, lifting at the gym, bowling, or going on random walks that always end up in a foodie trip.`
		},
	
	{
			name: "Samah Majadla",
			current: false,
			img: "samah_headshot_small.jpeg",
			alt: "Samah smiling for the camera",
			bio: `You can learn more
			<a href="/about">about me and my background here.</a><br>
			In my free time, I like art/to make things (painting, drawing, robotics, beaded jewelry, nails), being active (paddleboarding,
			going to the ocean, hiking, exploring cities, dancing, moving), and spending time with those I love.`
		},

		

]
</script>
<div id="mentorship" class="details container">
	<img style="padding-top:2%; width:30%" src="habibi-1.png" alt="Habibi Code logo with a heart instead of the 'o' in 'code'">

	{#each page_sections as item}
		{#if item.title === 'Current Mentors' || item.title === 'Past Mentors'}
			<CollapsibleCard open={false}>
				<h3 slot="header" class="card-title">
					{ item.title }
				</h3>
				<div class="mentor" slot="body">
					<p style="flex-basis: 100%;">Click on a mentor image to see their bio.</p>
					{#each currentMentors.filter(m => item.title == 'Current Mentors' ? m.current : !m.current) as current_mentor}
						<MentorBioCard 
							name={current_mentor.name}
							img={current_mentor.img}
							alt={current_mentor.alt}
							bio={current_mentor.bio}>
						</MentorBioCard>
					{/each}
				</div>
			</CollapsibleCard>
		{:else}
			<CollapsibleCard open={item.title == 'Overview' || item.title == 'Important Dates' || item.title == 'Current Mentors'}>
				<h3 slot='header' class="card-title" id={item.title}>{item.title}</h3>
				<div class="card-content" slot='body'>{@html item.content}</div>
			</CollapsibleCard>
		{/if}
	{/each}

	

</div>

<style>
	#mentorship {
		padding-top: 35px;
		padding-inline: .5em;
		width: 95%;
		height: 100%;
	}

	.mentor {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: row wrap;
		gap: 0.5em;
		max-width: 90vw;
		background-color: rgba(208, 233, 241, 0.183);
		margin: 5px;
		font-size: 12pt;
	}
	.mentor img {
		width: 35%;
		margin: 5px;
	}
	.card-title:hover{
		background-color: bisque;
	}
	
	.card-title{
		display: inline-block;
		/* padding-inline: 10em; */
	}
	h3 {
		margin-bottom: 0;
	}
	.card-content{
		margin: auto;
		text-align: center;
	}
	li {
		margin-bottom:200px; 
	}
</style>
