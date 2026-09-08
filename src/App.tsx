import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  GitCommitHorizontal,
  GitGraph,
  GitMerge,
  ShieldCheck,
  Terminal,
} from 'lucide-react';

const dailyFlow = [
  { label: 'Sjekk', command: 'git status' },
  { label: 'Hent', command: 'git pull' },
  { label: 'Jobb', command: 'VS Code' },
  { label: 'Se endringer', command: 'git diff' },
  { label: 'Stage', command: 'git add .' },
  { label: 'Lagre', command: 'git commit' },
  { label: 'Send', command: 'git push' },
  { label: 'Kontroller', command: 'git status' },
];

const commandGroups = [
  {
    title: 'Vanlig arbeid',
    commands: ['git status', 'git pull', 'git diff', 'git add .', 'git push'],
  },
  {
    title: 'Repository',
    commands: ['git clone <url>', 'git remote -v', 'git log --oneline'],
  },
  {
    title: 'Branches',
    commands: ['git branch', 'git switch <branch>', 'git switch -c <ny-branch>'],
  },
];

function Command({ children }: { children: React.ReactNode }) {
  return <code className="command">{children}</code>;
}

export default function App() {
  return (
    <main className="page-shell">
      <article className="sheet" aria-labelledby="page-title">
        {/* Introduksjon: viser tema og verktøy uten unødvendig navigasjon. */}
        <header className="hero">
          <div className="hero-mark" aria-hidden="true">
            <GitBranch size={29} strokeWidth={2.3} />
          </div>
          <div>
            <p className="eyebrow">Git Bash · Visual Studio Code · GitHub</p>
            <h1 id="page-title">Git og GitHub - trygg arbeidsflyt</h1>
            <p className="lead">
              En fast rutine reduserer risikoen for konflikter, feil branch og tap av arbeid.
            </p>
          </div>
          <GitGraph className="hero-github" size={44} aria-hidden="true" />
        </header>

        {/* Hovedflyten er den viktigste delen av cheat sheet-et. */}
        <section className="workflow" aria-labelledby="workflow-title">
          <div className="section-heading workflow-heading">
            <div>
              <p className="section-kicker">Hver arbeidsøkt</p>
              <h2 id="workflow-title">Pull → jobb → commit → push</h2>
            </div>
            <p className="clean-state">
              <CheckCircle2 size={17} aria-hidden="true" /> Avslutt med en ren working tree
            </p>
          </div>

          <ol className="flow-list">
            {dailyFlow.map((step, index) => (
              <li className="flow-step" key={`${step.label}-${step.command}`}>
                <span className="step-number">{index + 1}</span>
                <span className="step-label">{step.label}</span>
                <Command>{step.command}</Command>
                {index < dailyFlow.length - 1 && (
                  <ArrowRight className="flow-arrow" size={16} aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </section>

        <div className="content-grid">
          <section className="panel setup-panel" aria-labelledby="setup-title">
            <div className="section-heading compact-heading">
              <span className="icon-chip blue" aria-hidden="true"><Terminal size={18} /></span>
              <div>
                <p className="section-kicker">På en ny PC</p>
                <h2 id="setup-title">Første gangs oppsett</h2>
              </div>
            </div>

            <ol className="numbered-list">
              <li>
                <span>1</span>
                <div>
                  <strong>Registrer navn og e-post</strong>
                  <Command>git config --global user.name &quot;Ola Nordmann&quot;</Command>
                  <Command>git config --global user.email &quot;ola@example.com&quot;</Command>
                </div>
              </li>
              <li>
                <span>2</span>
                <div>
                  <strong>Bruk main som standard</strong>
                  <Command>git config --global init.defaultBranch main</Command>
                </div>
              </li>
              <li>
                <span>3</span>
                <div>
                  <strong>Opprett på GitHub, klon og åpne riktig mappe</strong>
                  <Command>git clone &lt;adresse-fra-github&gt;</Command>
                  <Command>cd prosjekt &amp;&amp; code .</Command>
                  <small>Ikke bruk <code>git init</code> etter <code>git clone</code>.</small>
                </div>
              </li>
            </ol>
          </section>

          <section className="panel checks-panel" aria-labelledby="checks-title">
            <div className="section-heading compact-heading">
              <span className="icon-chip cyan" aria-hidden="true"><ShieldCheck size={18} /></span>
              <div>
                <p className="section-kicker">Før du redigerer</p>
                <h2 id="checks-title">Kontroller prosjektet</h2>
              </div>
            </div>

            <dl className="check-list">
              <div>
                <dt><Command>git status</Command></dt>
                <dd>Riktig branch og status på filene.</dd>
              </div>
              <div>
                <dt><Command>git remote -v</Command></dt>
                <dd>Riktig repository på GitHub.</dd>
              </div>
              <div>
                <dt><Command>git branch</Command></dt>
                <dd>Stjernen viser branchen du står på.</dd>
              </div>
            </dl>

            <div className="verify-strip">
              <strong>Tre steder skal stemme:</strong>
              <span>Git Bash</span><span>VS Code</span><span>GitHub</span>
            </div>
          </section>

          <section className="panel branch-panel" aria-labelledby="branch-title">
            <div className="section-heading compact-heading">
              <span className="icon-chip purple" aria-hidden="true"><GitMerge size={18} /></span>
              <div>
                <p className="section-kicker">Når branches trengs</p>
                <h2 id="branch-title">Branch og merge</h2>
              </div>
            </div>

            <div className="branch-route" aria-label="Arbeidsflyt for branch og merge">
              <div><span>1</span><Command>git switch -c login</Command></div>
              <div><span>2</span><Command>git add . &amp;&amp; git commit -m &quot;Lag innlogging&quot;</Command></div>
              <div><span>3</span><Command>git push -u origin login</Command></div>
              <div><span>4</span><Command>git switch main &amp;&amp; git pull</Command></div>
              <div><span>5</span><Command>git merge login &amp;&amp; git push</Command></div>
            </div>
          </section>

          <section className="panel safety-panel" aria-labelledby="safety-title">
            <div className="section-heading compact-heading">
              <span className="icon-chip amber" aria-hidden="true"><AlertTriangle size={18} /></span>
              <div>
                <p className="section-kicker">Når noe går galt</p>
                <h2 id="safety-title">Konflikt og sikkerhet</h2>
              </div>
            </div>

            <ul className="safety-list">
              <li><strong>Merge conflict:</strong> Les begge endringene. Velg Current, Incoming eller Both i VS Code. Avslutt med <Command>git add .</Command>, commit og push.</li>
              <li><strong>.gitignore tidlig:</strong> <Command>node_modules/</Command> <Command>.env</Command> <Command>*.log</Command></li>
              <li><strong>Aldri push passord:</strong> Bytt nøkkelen hvis den allerede finnes i historikken.</li>
              <li className="danger"><strong>Ikke bruk som universalløsning:</strong> <Command>git reset --hard</Command> <Command>git push --force</Command> <Command>rm -rf .git</Command></li>
            </ul>
          </section>
        </div>

        {/* Referansedelen samler kommandoene uten å gjenta forklaringene. */}
        <section className="reference" aria-labelledby="reference-title">
          <div className="section-heading reference-heading">
            <div>
              <p className="section-kicker">Hurtigreferanse</p>
              <h2 id="reference-title">Kommandoene du trenger</h2>
            </div>
            <GitCommitHorizontal size={24} aria-hidden="true" />
          </div>

          <div className="command-columns">
            {commandGroups.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <div className="command-cloud">
                  {group.commands.map((command) => <Command key={command}>{command}</Command>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="rules">
          <strong>Tre regler som bør sitte:</strong>
          <span>Pull før du begynner.</span>
          <span>Commit og push før du avslutter.</span>
          <span>Når noe er galt: <code>git status</code> først.</span>
        </footer>
      </article>
    </main>
  );
}
