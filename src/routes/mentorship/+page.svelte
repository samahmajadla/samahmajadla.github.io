<script>
	import { CollapsibleCard } from 'svelte-collapsible'

	import MentorBioCard from './mentor-bio-card.svelte'

	const page_sections = [{
			title: "Overview",
			content: `<p><a href="/community">Habibi Code</a> hosts a mentorship program with three-month long mentorship
		cycles for individuals who identify as a minority in the tech industry (women, BIPOC, Latinx, LGBTQ+
		individuals, formerly incarcerated, low socio-economic background, non-traditional educational background,
		etc). As a participant in this program, you will get one on one time with mentors that can be used
		in whatever ways best suit your needs. You can read more about the program, as well as our mentors,
		below!</p><p style="color:darkgreen"><b><i>Applications for the Summer 2023: July - September cycle are closed. </i></b></p>`},
		{
			title: "Important Dates",
			content: `<ul style="text-align:left;; text-align: left"><li style="margin-bottom:5px;"><b>May 17, 2023: Application form closes.</b></li><li style="margin-bottom:5px;">May 28, 2023: Applicants notified of interview decision.</li><li style="margin-bottom:5px;">Jun 11, 2023: Interviews end.</li><li style="margin-bottom:5px;">Jun 16, 2023: Applicants notified of final decision.</li><li style="margin-bottom:5px;">Jul 01, 2023:    Mentorship cycle begins! </li><li style="margin-bottom:5px;">Sep 31, 2023: Mentorship cycle ends.</li></ul>`
		},
		{
			title: "Program",
			content: `<i>You can use this program for whatever best suits your needs, including but not limited to:</i>	<ul style="padding-inline:20%; text-align: left">		<li>Advice and guidance on education</li>		<li>Advice and guidance on career</li>		<li>Resume review</li>		<li>Brainstorming support (technical or product)</li>		<li>Interview prep</li>		<li>Support in learning a new tool or technology</li>		<li>Reviewing and further exloring computer science and/or software engineering concepts</li>		<li>			Troubleshooting, debugging, or code review (note: mentors will help point you in the right			direction as opposed to providing a solution)		</li>	</ul>	You may request to focus on other topics or ideas during the 1:1 time, however mentors reserve the	right to decline to focus on any topic for any reason.`
		},
		{
			title: "Current Mentors",
			content: "hh"
		},
		{
			title: "Qualifications",
			content: `In order to qualify for this opportunity, you should:	<ul style="text-align: left;padding-inline:20%;">		<li>Identify as a minority in the tech industry.</li>		<li>			Be able to commit to meeting for 30 minutes every two weeks, and 45 minutes every month.		</li>	</ul>`
		},
		{
			title: "Expectations and Further Details",
			content: `<p>		If you are chosen to be a part of this program, you are expected to commit to the following:	</p>	<ul style="text-align: left;padding-inline:20%;">		<li>1:1 meeting every 2 weeks (half hour)</li>		<li>You are encouraged to join the two Panel and Q&A style group meetings (45 minutes, dates TBD)</li>	</ul>	<p>		You will also be invited to join all of our <a href="../community">Habibi Code</a> events. Other		information:	</p>	<ul style="text-align: left;padding-inline:20%;">		<li>You will coordinate with your mentor on your meeting times.</li>		<li>			You will have access to private channels to communicate with your mentor and the mentorship community.		</li>	</ul>`
		},
		{
			title: "Interested? Application and Next Steps",
		
			content: `Applications are closed for the Summer cycle.`
		},
		{
			title: "Past Mentors"
		}

	]

	const currentMentors = [
		{
			name: "Cole Wyman",
			current: true,
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
			name: "Ellis Parker",
			current: true,
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
			name: "Samah Majadla",
			current: true,
			img: "samah_headshot_small.jpeg",
			alt: "Samah smiling for the camera",
			bio: `I have a Bachelor of Arts in Computer Science and Studio Art, and
			Masters of Science in Computer Science. I am a Product Manager at VMware, where I help clients
			with implementation and maturation of their cloud infrastructure. I am currently working on a
			full-stack application for Prison Books Collective, a non-profit that sends free books to
			individuals incarcerated in North Carolina and Alabama; the app is being developed using Java,
			Spring Boot, Hibernate/JPA, MySQL, SvelteKit, HTML, Javascript, and CSS. <br><br>You can learn more
			<a href="/about">about my background here.</a><br>
			In my free time, I like to make things (robotics, beaded jewelry, nails), being active (paddleboarding,
			going to the ocean, hiking, exploring cities, dancing, kickboxing), and spending time with those
			I love.`
		},
		{
			name: "Vaughn Walker",
			current: true,
			img: "vaughn.jpeg",
			alt: "Vaughn smiling for the camera",
			bio: `Career background: I have 4 years of engineering experience with the
			last 3.5 years at the company Integral. My current role is senior software engineer. I've
			spent the majority of my time doing projects related to the automotive space. Outside of that,
			I have a side business of selling printed product labels which is adjacent to my old line of
			work in the printing industry where I spent 14 years operating a printing press before making
			the career switch to IT.<br /><br />When I'm not working I enjoy spending time with my family, riding my one wheel, traveling, and
			building my new vinyl record collection.`
		},{
		name: "DeShayla Cisero <br/> Winter 2022",
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
		name: "Supraja Kalva <br/> Winter 2022",
		current: false,
		img: "supraja.JPG",
		alt: "Supraja smiling at the camera",
		bio: `Supraja (she/her/hers) graduated from Eastern Michigan University as a Presidential
		Scholar with a Bachelor of Science in Computer Science (Applied) and Neuroscience Interdisciplinary,
		along with University Honors, Departmental Honors in both majors, and Highest Honors. She is currently
		working at General Motors as a Speech Certification Test Engineer. She is very interested in the
		neurotechnology and neuroengineering space, hoping to get a PhD in the related fields in the future.
		She loves hiking, learning about new cultures and languages, and a fellow art enthusiast.`
	},
	{
		name: `Vera Reynolds <br/> Winter 2022`,
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
		name: "Amber Salome",
		current: true,
		img: "amber.jpeg",
		alt: "Amber smiling for camera",
		bio: "My name is Amber Salome and I am based out of Chicago, Illinois. I studied Computer Science and Biology at Kalamazoo College, and focused on the intersection of these two fields. After college I spent a year as a software engineer, then transitioned to being a Solutions Architect. I now focus on observability/monitoring, devops, and computer infrastructure. My favorite things to work on are kubernetes/helm and building intuitive dashboards. In my free time I love riding my bike and cooking new recipes!"
	},
	{
		name: "Elise Griffiths",
		current: true,
		img: "elise.png",
		alt: "Elise smiling for the camera",
		bio: "Hi, I'm Elise! I was one of those kids who went through a bunch of different majors in college, settled on Mechanical Engineering, and then wound up back in software somehow! I was recently promoted to manage a software engineering team called FordLabs (check us out! www.fordlabs.com). These days I'm still working on learning about the usual things that come with management, leadership strategies, a bit of bureaucracy, and figuring out how to best help my team. When I get to jump in the code, I love experimenting with little ideas that can help make the big idea go. Sometimes I just experiment with huge ideas for the fun of it. On my off time I love getting out and doing things. I have niche hobbies like ballroom dance and speedskating, but also enjoy more typical things like art, running, and watching sports (go blue!)."
	},
	{
		name: "Jaimie Black",
		current: true,
		img: "jaimie.jpg",
		alt: "Jaimie posing with her hand on her face",
		bio: "My name is Jaimie (they/them!) and I am a self-taught backend developer with about 2 years of work experience. Currently, I build Python microservices. I do a lot of API design and documentation work as well-- good documentation is a HUGE passion of mine! On the side, I do the occasional fullstack project, so I know my way around CSS and Javascript."
	},
	{
		name: "Grace Wingo",
		current: true,
		img: "grace.jpeg",
		alt: "Grace smiling brightly into the camera",
		bio: "grace wingo currently works as a software engineer at Vox Media where they work primarily on ad tech. they have a masters in educational psychology and a b.a in theatre. in their free time they enjoy playing guitar, running, reading, hiking, and exploring new places and meeting new people. they're passionate about inclusion, slow living, and rest."
	},
	{
		name: "Wael Rabadi",
		current: true,
		img: "wael.png",
		alt: "Wael looking at a computer screen off camera",
		bio: "My name is Wael Rabadi and I've been in the software development professional track since for over 20 years. My current position is a Senior Technical Solution Architect at VMware. I focus on building business application that run on modern cloud native architecture. I focus on highly available and scalable solutions. I enjoy working on all aspects of the application and enjoy thinking about the process and logic. In my spare time, I enjoy looking into IoT and microprocessor programming."
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
