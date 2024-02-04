export default function Home() {
  return (
    <main className="main">
      <div className="section eclipse-banner" id="eclipse">
        <span className="eclipse-header">Eclipse</span>
        <div className="eclipse-text">
          <span className="eclipse-slogan"><b>Your</b> operating system.</span>
          <span className="eclipse-info">A completely new GNU/Linux distro being developed by <b>one person.</b></span>
        </div>
      </div>

      <div className="section intro" id="hi">
        <div className="content">
          <span className="intro-text">Hi, I'm <a id="me" href="#me">Sheerapi</a></span>
          <p className="intro-para">
            I'm a <b>programmer</b> that likes to do both web, and low-level applications,<br/>
            such as, I don't know, compilers, game engines, systems and such. I also like<br/>
            to make pretty designs and then make them with things like React or Vue.<br/>

            <br/>

            I love web technologies and their architecture itself, they're just so organized!<br/>

            <br/>

            But anyways, here are some facts about me:<br/>
            <p className="facts">
              - I speak <b>2 languages</b> fluently (<b>English</b>, and <b>Spanish</b>)<br/>
              - I'm from <a href="https://en.wikipedia.org/wiki/Santiago">Santiago, Chile</a>&nbsp;&nbsp;&nbsp;&nbsp;<span>alright chile...</span><br/>
              - I used to <a href="https://unity3d.com">make games with Unity</a> actually, did you know that?<br/>
              - I have a little organization called <a href="https://github.com/EclipseLinux">Eclipse</a><br/>
              - Most of <a href="https://github.com/sheerapi">my Github</a> repos are private lol<br/>
              - I've been programming for about <b>4 or 5 years</b>, I can't really remember<br/>
              - I use most of my stuff in <b>English</b>, even though I <b>speak Spanish natively</b>&nbsp;&nbsp;&nbsp;<span>ironic...</span><br/>
              - I tend to leave a lot of projects <b>unfinished</b>, check out the <a href="#graveyard">Project Graveyard</a><br/>
              - <b>this effect is acc pretty lol</b>
            </p>
          </p>
        </div>
        <div className="avatar-panel"><div className="avatar"></div>^ thats me fr</div>
      </div>
    </main>
  );
}
