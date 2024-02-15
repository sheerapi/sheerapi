import axios from 'axios';

export default async function Home() {
	const lang = await axios.get('https://wakatime.com/share/@e405e71d-4cd8-4fd0-96e1-e5f93297dcdd/954796d0-f944-4503-a8dd-810471c46726.json');
	const langChart = lang.data.data.slice(0, 5).map((language: any, i: number) => {
		return <div style={{ backgroundColor: language.color, width: language.percent + "%", boxShadow: "4px 4px 48px " + language.color }} key={i}>
			<span>{language.name}</span>
			<span className="usage">({language.percent}%)</span>
		</div>
	});

	return (
		<main className="main">
			<div className="section eclipse-banner" id="eclipse">
				<span className="eclipse-header">Eclipse</span>
				<div className="eclipse-text">
					<span className="eclipse-slogan"><b>Your</b> operating system.</span>
					<span className="eclipse-info">A completely new GNU/Linux distro being developed by <b>one person.</b></span>
				</div>
			</div>

			<div className="section info intro" id="hi">
				<div className="content">
					<span className="header">Hi, I'm <a id="me" href="#me">Sheerapi</a></span>
					<span className="para">
						I'm a <b>programmer</b> that likes to do both web, and low-level applications,<br />
						such as, I don't know, compilers, game engines, systems and such. I also like<br />
						to make pretty designs and then make them with things like React or Vue.<br />

						<br />

						I love web technologies and their architecture itself, they're just so organized!<br />

						<br />

						But anyways, here are some facts about me:<br />
						<div className="list">
							- I speak <b>2 languages</b> fluently (<b>English</b>, and <b>Spanish</b>)<br />
							- I'm from <a href="https://en.wikipedia.org/wiki/Santiago">Santiago, Chile</a>&nbsp;&nbsp;&nbsp;&nbsp;<span>alright chile...</span><br />
							- I used to <a href="https://unity3d.com">make games with Unity</a> actually, did you know that?<br />
							- I have a little organization called <a href="https://github.com/EclipseLinux">Eclipse</a><br />
							- Most of <a href="https://github.com/sheerapi">my Github</a> repos are private lol<br />
							- I've been programming for about <b>4 or 5 years</b>, I can't really remember<br />
							- I use most of my stuff in <b>English</b>, even though I <b>speak Spanish natively</b>&nbsp;&nbsp;&nbsp;<span>ironic...</span><br />
							- I tend to leave a lot of projects <b>unfinished</b>, check out the <a href="#graveyard">Project Graveyard</a><br />
							- <b>this effect is acc pretty lol</b>
						</div>
					</span>
				</div>
				<div className="avatar-panel"><div className="avatar"></div>^ thats me fr</div>
			</div>

			<div className="section info" id="langs">
				<div className="content">
					<span className="header">What <a href="#langs">Programming Languages</a> I Use</span>
					<p className="para">
						I mainly use <b>C++</b>, because my main machine is running <a href="https://archlinux.org">Arch Linux</a>,<br />
						so I can't really use things like C#, but I still know some more languages.<br />
						With <a href="https://wakatime.com">WakaTime</a> however, you can now see how much languages<br />
						I used and more insights about me.
					</p>

					<div className="container">
						<div className="column ltr">
							<span>This one is in order of <b>usage</b></span>
							<div className="chart">
								{langChart}
							</div>
						</div>

						<div className="column rtl">
							<span>And this one is in order of <b>knowledge</b></span>
							<div className="chart">
								<div style={{ backgroundColor: "#A179DC", width: "50%", boxShadow: "4px 4px 48px #A179DC" }}>
									<span>C#</span>
									<span className="usage">(50%)</span>
								</div>
								<div style={{ backgroundColor: "#f7df1e", width: "20%", boxShadow: "4px 4px 48px #f7df1e" }}>
									<span>JavaScript</span>
									<span className="usage">(20%)</span>
								</div>
								<div style={{ backgroundColor: "#044F88", width: "19%", boxShadow: "4px 4px 48px #044F88" }}>
									<span>C++</span>
									<span className="usage">(20%)</span>
								</div>
								<div style={{ backgroundColor: "#4584b6", width: "5%", boxShadow: "4px 4px 48px #4584b6" }}>
									<span>Python</span>
									<span className="usage">(5%)</span>
								</div>
								<div style={{ backgroundColor: "#CE422B", width: "5%", boxShadow: "4px 4px 48px #CE422B" }}>
									<span>Rust</span>
									<span className="usage">(4%)</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section info" id="graveyard">
				<div className="content">
					<span className="header"><a href="#graveyard">Project Graveyard</a></span>
					<p className="para">
						Here lies <b>every single project</b> that has ever come to my mind or<br />
						I have <b><i>attempted</i></b> to make possible, there are <b>lots</b> of them, trust me.<br />
						I'm just going to try and list whichever comes off the top of my head.
					</p>

					<div className="graveyard-container">
						<div>
							<span className="tomb">🪦</span>
							<span className="tomb-name">Hue</span>
							<span className="tomb-desc">A rhythm game with<br />background effects and an editor</span>
						</div>

						<div>
							<span className="tomb">🪦</span>
							<span className="tomb-name">Leaf</span>
							<span className="tomb-desc">A game engine<br />made in C#</span>
						</div>

						<div>
							<span className="tomb">🪦</span>
							<span className="tomb-name">Prism</span>
							<span className="tomb-desc">A game engine<br />made in C++ with a focus on Linux</span>
						</div>

						<div>
							<span className="tomb">🪦</span>
							<span className="tomb-name">Sheep</span>
							<span className="tomb-desc">My own Blockchain<br />and cryptocurrency</span>
						</div>

						<div>
							<span className="tomb">🪦</span>
							<span className="tomb-name">Nitro</span>
							<span className="tomb-desc">My own programming language<br />similar to C#</span>
						</div>

						<div>
							<span className="tomb">🪦</span>
							<span className="tomb-name">Unicorn</span>
							<span className="tomb-desc">A Discord<br />bot in JavaScript</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
