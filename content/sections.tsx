import { Section } from "@/components/Section";
import { CommandBlock } from "@/components/CommandBlock";
import { Jargon } from "@/components/Jargon";
import { FakeTerminal } from "@/components/FakeTerminal";
import { StuckPanel, StuckItem } from "@/components/StuckPanel";
import { Illustration } from "@/components/Illustration";
import { PlanPicker } from "@/components/PlanPicker";
import { SectionMeta } from "@/components/Sidebar";

export const sectionsMeta: SectionMeta[] = [
  { id: "what-is-this", number: 1, title: "What is this?" },
  { id: "terminal", number: 2, title: "Set up your terminal" },
  { id: "editor", number: 3, title: "Install a code editor" },
  { id: "nodejs", number: 4, title: "Install Node.js" },
  { id: "git", number: 5, title: "Install Git" },
  { id: "github", number: 6, title: "Create a GitHub account" },
  { id: "claude", number: 7, title: "Get a Claude subscription" },
  { id: "install", number: 8, title: "Install Mastra Code" },
  { id: "login", number: 9, title: "Log in to Mastra Code" },
  { id: "first-project", number: 10, title: "Your first project" },
  { id: "modes", number: 11, title: "Plan mode vs Build mode" },
  { id: "save-to-github", number: 12, title: "Save your work to GitHub" },
  { id: "deploy", number: 13, title: "Deploy to Vercel" },
  { id: "now-what", number: 14, title: "Now what?" },
];

export function AllSections() {
  return (
    <>
      {/* Section 1 */}
      <Section id="what-is-this" number={1} title="What is this?">
        <p>
          You&apos;re about to install a tool called <strong>Mastra Code</strong> that lets you build real websites
          by typing what you want in plain English. No coding experience needed.
        </p>
        <p>
          Instead of learning a programming language, you&apos;ll describe what you want — like
          &quot;build me a portfolio website with a contact form&quot; — and Mastra Code writes all the code for you,
          creates the files, and even runs the commands to get it working.
        </p>
        <p>
          This tutorial will walk you through every step from scratch. We assume you&apos;ve never
          opened a{" "}
          <Jargon term="terminal">
            A terminal is a text-based way to talk to your computer. Instead of clicking buttons,
            you type commands. It looks like a black (or white) window with text in it. Don&apos;t
            worry — we&apos;ll show you exactly what to type.
          </Jargon>
          , never heard of{" "}
          <Jargon term="GitHub">
            GitHub is a website where developers store their code online. Think of it like Google
            Drive, but specifically designed for code. It lets you save your work, share it, and
            deploy websites from it.
          </Jargon>
          , and have no idea what a &quot;repo&quot; is. That&apos;s perfect — let&apos;s go.
        </p>
      </Section>

      {/* Section 2 */}
      <Section id="terminal" number={2} title="Set up your terminal">
        <p>
          A{" "}
          <Jargon term="terminal">
            A program on your computer where you type text commands instead of clicking buttons.
            It&apos;s how developers talk to their computers. Every computer already has one built in.
          </Jargon>{" "}
          is how you&apos;ll interact with Mastra Code. It&apos;s just a text window where you type commands and press Enter.
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">How to open it</h3>
        <CommandBlock
          title="Mac"
          command={{ mac: "Press Cmd+Space, type 'Terminal', press Enter" }}
        />
        <CommandBlock
          title="Windows"
          command={{ windows: "Press Win key, type 'Terminal' or 'PowerShell', press Enter" }}
        />
        <CommandBlock
          title="Linux"
          command={{ linux: "Press Ctrl+Alt+T" }}
        />

        <p className="mt-4">
          You should see a window that looks something like this:
        </p>

        <FakeTerminal
          command="echo 'Hello!'"
          output="Hello!"
          title="Your first terminal command"
        />

        <p>
          See the <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">$</code> sign? That&apos;s called the{" "}
          <Jargon term="prompt">
            The prompt is the symbol (usually $ or &gt;) that appears when your terminal is ready
            for you to type. When this tutorial shows a command with $ at the start, don&apos;t type the
            $ — it&apos;s just showing you where the command starts.
          </Jargon>
          . It means &quot;I&apos;m ready for you to type something.&quot; When you see commands in this tutorial
          with a <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">$</code> in front, don&apos;t type the $ — just type what comes after it.
        </p>

        <StuckPanel>
          <StuckItem
            problem="I can't find Terminal on my Mac"
            fix="Open Finder → Applications → Utilities → Terminal. Or press Cmd+Space and type 'Terminal'."
          />
          <StuckItem
            problem="PowerShell looks different from the screenshots"
            fix="That's fine! PowerShell and Command Prompt both work. Just type the same commands."
          />
        </StuckPanel>
      </Section>

      {/* Section 3 */}
      <Section id="editor" number={3} title="Install a code editor">
        <p>
          A{" "}
          <Jargon term="code editor">
            A code editor is like Microsoft Word, but designed for writing code. It color-codes
            different parts of the code so it&apos;s easier to read. You can also use it to browse
            your project files. The most popular one is VS Code — it&apos;s free.
          </Jargon>{" "}
          is a program for viewing and editing code files. Even though Mastra Code writes the code
          for you, you&apos;ll want an editor to see what it created and make small tweaks.
        </p>
        <p>
          We recommend <strong>Visual Studio Code</strong> (VS Code) — it&apos;s free and works on
          Mac, Windows, and Linux.
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">Install VS Code</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Go to{" "}
            <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              code.visualstudio.com
            </a>
          </li>
          <li>Click the big download button (it detects your operating system automatically)</li>
          <li>Open the downloaded file and follow the installer</li>
          <li>Open VS Code to make sure it works</li>
        </ol>

        <Illustration label="VS Code download page" caption="The download button is right on the homepage" />

        <StuckPanel>
          <StuckItem
            problem="Mac says the app is from an unidentified developer"
            fix="Right-click the app → Open → Click 'Open' in the dialog. You only need to do this once."
          />
        </StuckPanel>
      </Section>

      {/* Section 4 */}
      <Section id="nodejs" number={4} title="Install Node.js">
        <p>
          <Jargon term="Node.js">
            Node.js is a program that lets your computer run JavaScript — the language that
            websites are built with. You need it installed so that Mastra Code (and the websites it
            builds) can actually run. Think of it as the engine under the hood.
          </Jargon>{" "}
          is required for Mastra Code to work. It&apos;s a one-time install.
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">Install it</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Go to{" "}
            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              nodejs.org
            </a>
          </li>
          <li>Download the <strong>LTS</strong> version (the one that says &quot;Recommended for most users&quot;)</li>
          <li>Run the installer — click Next/Continue through everything, use all the defaults</li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">Verify it worked</h3>
        <p>Open your terminal and type:</p>
        <CommandBlock command="node -v" />
        <p>You should see a version number like <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">v22.x.x</code>. If you do, it worked!</p>

        <FakeTerminal command="node -v" output="v22.15.0" title="Checking Node version" />

        <p>Also check that{" "}
          <Jargon term="npm">
            npm stands for &quot;Node Package Manager.&quot; It&apos;s a tool that comes with Node.js and lets you
            install other programs and tools (like Mastra Code) with a single command. Think of it
            as an app store for developer tools.
          </Jargon>{" "}
          was installed too:</p>
        <CommandBlock command="npm -v" />

        <StuckPanel>
          <StuckItem
            problem="'node' is not recognized as a command"
            fix="Close your terminal completely and open a new one. The terminal needs to restart to see new programs."
          />
          <StuckItem
            problem="I see an old version like v16 or v18"
            fix="That's probably fine! Mastra Code works with Node 18+. But if you want the latest, re-download from nodejs.org."
          />
        </StuckPanel>
      </Section>

      {/* Section 5 */}
      <Section id="git" number={5} title="Install Git">
        <p>
          <Jargon term="Git">
            Git is a tool that saves snapshots of your code over time. If you break something, you
            can go back to a working version. It also lets you upload your code to GitHub (step 6)
            so you can share it and deploy websites from it.
          </Jargon>{" "}
          is a tool for tracking changes to your code. You&apos;ll need it to save your work and
          deploy your website later.
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">Mac</h3>
        <p>Open your terminal and type:</p>
        <CommandBlock command={{ mac: "git --version" }} />
        <p>
          If Git is already installed, you&apos;ll see a version number. If not, your Mac will automatically
          offer to install it for you — just click &quot;Install&quot; and follow the prompts.
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">Windows</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Go to{" "}
            <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              git-scm.com
            </a>
          </li>
          <li>Download the installer for Windows</li>
          <li>Run the installer — use all the default options (just keep clicking Next)</li>
          <li>Close and reopen your terminal</li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">Verify</h3>
        <CommandBlock command="git --version" />

        <FakeTerminal command="git --version" output="git version 2.45.2" title="Checking Git version" />

        <StuckPanel>
          <StuckItem
            problem="Mac says I need to install Xcode Command Line Tools"
            fix="Click 'Install' when prompted. This is normal — it installs Git along with some other developer tools."
          />
          <StuckItem
            problem="'git' is not recognized on Windows"
            fix="Make sure you close and reopen your terminal after installing Git. If it still doesn't work, restart your computer."
          />
        </StuckPanel>
      </Section>

      {/* Section 6 */}
      <Section id="github" number={6} title="Create a GitHub account">
        <p>
          <Jargon term="GitHub">
            GitHub is a website where your code lives online. You upload your project there, and
            then services like Vercel can read it from GitHub to turn it into a live website.
            It&apos;s free to use.
          </Jargon>{" "}
          is where your code will live online. You need an account to save your work and deploy
          websites.
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">Sign up</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Go to{" "}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              github.com
            </a>
          </li>
          <li>Click &quot;Sign up&quot;</li>
          <li>Pick a username, enter your email, create a password</li>
          <li>Verify your email when they send you a confirmation</li>
        </ol>

        <Illustration label="GitHub signup page" caption="github.com — click the 'Sign up' button in the top right" />

        <p className="mt-4">
          That&apos;s it! You don&apos;t need to do anything else on GitHub right now. We&apos;ll come back to it
          later when it&apos;s time to save your project.
        </p>

        <StuckPanel>
          <StuckItem
            problem="What username should I pick?"
            fix="Anything you want! Your real name, a nickname, or something creative. You can change it later."
          />
        </StuckPanel>
      </Section>

      {/* Section 7 */}
      <Section id="claude" number={7} title="Get a Claude subscription">
        <p>
          Mastra Code is powered by{" "}
          <Jargon term="Claude">
            Claude is an AI assistant made by Anthropic. It&apos;s the &quot;brain&quot; behind
            Mastra Code — when you describe what you want to build, Claude figures out what code to
            write. You need a Claude account for Mastra Code to work.
          </Jargon>
          . You need a Claude account to use it.
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">Which plan should you get?</h3>
        <p>Use this quick quiz to figure out the best plan for you:</p>

        <PlanPicker />

        <h3 className="font-semibold text-lg mt-6 mb-2">Sign up</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Go to{" "}
            <a href="https://claude.com/pricing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              claude.com/pricing
            </a>
          </li>
          <li>Click &quot;Get started&quot; on your chosen plan</li>
          <li>Create an account with your email or Google</li>
          <li>Enter payment info if you chose a paid plan</li>
        </ol>

        <div className="mt-4 p-4 rounded-lg bg-accent/5 border border-accent/20">
          <p className="text-sm">
            <strong>💡 Tip:</strong> If you&apos;re not sure, start with <strong>Pro ($20/mo)</strong>. It&apos;s enough for most beginners
            and you can upgrade later if you need more usage.
          </p>
        </div>

        <StuckPanel>
          <StuckItem
            problem="What are 'usage limits'?"
            fix="Claude limits how many messages you can send in a time window. Pro resets every 5 hours. If you hit the limit, just wait a bit and it'll reset."
          />
          <StuckItem
            problem="Can I use the free plan?"
            fix="Yes, but you'll hit limits very quickly — possibly within one coding session. It's good for trying it out, but not for building real projects."
          />
        </StuckPanel>
      </Section>

      {/* Section 8 */}
      <Section id="install" number={8} title="Install Mastra Code">
        <p>
          Now for the main event! Open your terminal and run this single command:
        </p>

        <CommandBlock command="npm install -g mastracode" title="Install Mastra Code globally" />

        <p>
          The <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">-g</code> means
          &quot;install globally&quot; — so you can use it from any folder on your computer.
        </p>

        <FakeTerminal
          command="npm install -g mastracode"
          output={`added 1 package in 3s\n\n1 package is looking for funding\n  run \`npm fund\` for details`}
          title="Installing Mastra Code"
        />

        <h3 className="font-semibold text-lg mt-6 mb-2">Verify it worked</h3>
        <CommandBlock command="mastracode --version" />

        <StuckPanel>
          <StuckItem
            problem="Permission denied / EACCES error"
            fix="On Mac/Linux, try: sudo npm install -g mastracode (you'll need to enter your computer password)"
          />
          <StuckItem
            problem="'npm' is not recognized"
            fix="Go back to Step 4 and make sure Node.js is installed. Close and reopen your terminal after installing."
          />
        </StuckPanel>
      </Section>

      {/* Section 9 */}
      <Section id="login" number={9} title="Log in to Mastra Code">
        <p>
          The first time you run Mastra Code, it needs to connect to your Claude account.
        </p>

        <ol className="list-decimal list-inside space-y-2">
          <li>Open your terminal</li>
          <li>
            Type{" "}
            <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">mastracode</code>{" "}
            and press Enter
          </li>
          <li>It will open your web browser automatically</li>
          <li>Log in with the Claude account you created in Step 7</li>
          <li>Click &quot;Allow&quot; to give Mastra Code permission</li>
          <li>Go back to your terminal — it should say you&apos;re logged in</li>
        </ol>

        <Illustration label="Browser login flow" caption="Your browser will open a page asking you to log in to Claude" />

        <StuckPanel>
          <StuckItem
            problem="The browser didn't open automatically"
            fix="Copy the URL shown in the terminal and paste it into your browser manually."
          />
          <StuckItem
            problem="It says my account doesn't have access"
            fix="Make sure you have a Claude Pro, Max, or Team plan. The free plan may have limited Mastra Code access."
          />
        </StuckPanel>
      </Section>

      {/* Section 10 */}
      <Section id="first-project" number={10} title="Your first project">
        <p>Let&apos;s build something! Here&apos;s what to do:</p>

        <h3 className="font-semibold text-lg mt-6 mb-2">1. Create a project folder</h3>
        <CommandBlock
          command={{
            mac: "mkdir my-first-website && cd my-first-website",
            windows: "mkdir my-first-website && cd my-first-website",
            linux: "mkdir my-first-website && cd my-first-website",
          }}
        />
        <p className="text-sm text-muted">
          <code className="bg-surface px-1 py-0.5 rounded font-mono">mkdir</code> = &quot;make
          directory&quot; (creates a folder).{" "}
          <code className="bg-surface px-1 py-0.5 rounded font-mono">cd</code> = &quot;change
          directory&quot; (go into that folder).
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">2. Start Mastra Code</h3>
        <CommandBlock command="mastracode" />

        <h3 className="font-semibold text-lg mt-6 mb-2">3. Tell it what to build</h3>
        <p>
          Mastra Code will show you a text prompt where you can type. Try something like:
        </p>

        <div className="p-4 bg-surface rounded-lg border border-border space-y-3 my-4">
          <p className="font-medium text-sm text-muted">Example prompts to try:</p>
          <div className="space-y-2">
            {[
              "Build me a personal portfolio website with a dark theme, an about me section, and a contact form",
              "Create a simple landing page for a coffee shop called 'Bean There' with a menu section",
              "Make a birthday countdown page that shows how many days until December 25th",
            ].map((prompt, i) => (
              <div key={i} className="flex items-start gap-2 p-3 bg-background rounded border border-border">
                <span className="text-accent font-mono text-sm flex-shrink-0">&gt;</span>
                <span className="text-sm">{prompt}</span>
              </div>
            ))}
          </div>
        </div>

        <p>
          After you type your prompt and press Enter, Mastra Code will start working. You&apos;ll see it
          creating files, writing code, and running commands. Just sit back and watch!
        </p>

        <FakeTerminal
          command="mastracode"
          output={`Welcome to Mastra Code!\n\nI'll help you build your project. What would you like to create?\n\n> `}
          title="Starting Mastra Code"
        />

        <div className="mt-4 p-4 rounded-lg bg-accent/5 border border-accent/20">
          <p className="text-sm">
            <strong>💡 Tip:</strong> Be specific! Instead of &quot;make a website,&quot; say &quot;make a portfolio website
            with a dark purple theme, my name John Smith at the top, and sections for About, Projects,
            and Contact.&quot; The more detail you give, the better the result.
          </p>
        </div>

        <StuckPanel>
          <StuckItem
            problem="It says 'command not found: mastracode'"
            fix="Go back to Step 8 and reinstall. Make sure to close and reopen your terminal."
          />
          <StuckItem
            problem="It's been running for a long time"
            fix="Building a project can take 2-5 minutes. If it's been more than 10 minutes, press Ctrl+C to cancel and try a simpler prompt."
          />
        </StuckPanel>
      </Section>

      {/* Section 11 */}
      <Section id="modes" number={11} title="Plan mode vs Build mode">
        <p>
          Mastra Code has two modes. Think of them like &quot;thinking&quot; and &quot;doing&quot;:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-lg border border-border">
            <div className="font-bold text-lg mb-2">📋 Plan mode</div>
            <p className="text-sm text-muted">
              Mastra Code <strong>thinks and plans</strong> but doesn&apos;t change any files. It reads your
              code, analyzes what needs to happen, and shows you a plan. You review the plan and
              approve it.
            </p>
            <div className="mt-3">
              <CommandBlock command="/mode plan" />
            </div>
          </div>
          <div className="p-4 rounded-lg border border-border">
            <div className="font-bold text-lg mb-2">🔨 Build mode</div>
            <p className="text-sm text-muted">
              Mastra Code <strong>actually makes changes</strong>. It creates files, writes code, runs
              commands, installs packages — everything needed to build what you asked for.
            </p>
            <div className="mt-3">
              <CommandBlock command="/mode build" />
            </div>
          </div>
        </div>

        <h3 className="font-semibold text-lg mt-6 mb-2">When to use each</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Starting a new project?</strong> Just use Build mode (the default). Let it rip.
          </li>
          <li>
            <strong>Making changes to existing code?</strong> Switch to Plan mode first, review the plan,
            then approve it to switch to Build mode.
          </li>
          <li>
            <strong>Not sure what to do?</strong> Use Plan mode to ask Mastra Code for suggestions.
          </li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Other useful commands</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">/clear</code> — Start a fresh conversation
          </li>
          <li>
            <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">/help</code> — See all available commands
          </li>
        </ul>
      </Section>

      {/* Section 12 */}
      <Section id="save-to-github" number={12} title="Save your work to GitHub">
        <p>
          Now let&apos;s save your project to{" "}
          <Jargon term="GitHub">
            Remember, GitHub is where your code lives online. Saving your code there means you
            won&apos;t lose it, and you can deploy it as a website in the next step.
          </Jargon>
          . The easiest way? Just ask Mastra Code to do it for you!
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">1. Create a new repository on GitHub</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Go to{" "}
            <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              github.com/new
            </a>
          </li>
          <li>Type a name for your project (like <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">my-first-website</code>)</li>
          <li>Make sure &quot;Public&quot; is selected</li>
          <li>Don&apos;t check any boxes (no README, no .gitignore, etc.)</li>
          <li>Click &quot;Create repository&quot;</li>
          <li>Copy the URL it gives you (it&apos;ll look like <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">https://github.com/yourname/my-first-website.git</code>)</li>
        </ol>

        <Illustration label="GitHub 'Create new repository' page" caption="Leave all the checkboxes unchecked — just name it and click Create" />

        <h3 className="font-semibold text-lg mt-6 mb-2">2. Ask Mastra Code to push your code</h3>
        <p>In your Mastra Code session, type something like:</p>

        <div className="p-4 bg-surface rounded-lg border border-border my-4">
          <p className="font-mono text-sm">
            &gt; Commit all my changes and push them to https://github.com/yourname/my-first-website.git
          </p>
        </div>

        <p>
          Mastra Code will handle the{" "}
          <Jargon term="git commands">
            Git commands are instructions like &quot;git add&quot;, &quot;git commit&quot;, and
            &quot;git push&quot; that save your code and upload it. You don&apos;t need to learn
            these — Mastra Code runs them for you.
          </Jargon>{" "}
          for you. It&apos;ll set up the connection to GitHub and upload all your files.
        </p>

        <StuckPanel>
          <StuckItem
            problem="Git asks for my username and password"
            fix="GitHub no longer accepts passwords. You'll need to set up a Personal Access Token or SSH key. Ask Mastra Code: 'Help me set up GitHub authentication'."
          />
          <StuckItem
            problem="'Permission denied' when pushing"
            fix="You might not be logged into GitHub from your terminal. Ask Mastra Code: 'Help me log in to GitHub from the terminal'."
          />
        </StuckPanel>
      </Section>

      {/* Section 13 */}
      <Section id="deploy" number={13} title="Deploy to Vercel">
        <p>
          <Jargon term="Deploy">
            Deploying means putting your website on the internet so anyone with the link can see
            it. Right now your website only exists on your computer. After deploying, it&apos;ll have a
            real URL like yourproject.vercel.app that anyone can visit.
          </Jargon>{" "}
          means putting your website on the internet so anyone can see it. We&apos;ll use{" "}
          <Jargon term="Vercel">
            Vercel is a company that hosts websites for free. It reads your code from GitHub and
            turns it into a live website with a real URL. It&apos;s how most Next.js websites get
            deployed.
          </Jargon>{" "}
          — it&apos;s free and takes about 2 minutes.
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">Steps</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Go to{" "}
            <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              vercel.com/new
            </a>
          </li>
          <li>Sign up with your GitHub account (click &quot;Continue with GitHub&quot;)</li>
          <li>You&apos;ll see a list of your GitHub repositories — find your project and click &quot;Import&quot;</li>
          <li>Leave all the settings as-is and click &quot;Deploy&quot;</li>
          <li>Wait about 60 seconds...</li>
          <li>🎉 Your website is live! Vercel will show you the URL.</li>
        </ol>

        <Illustration label="Vercel import page" caption="Find your repo in the list, click Import, then Deploy" />

        <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50">
          <p className="text-sm text-green-800 dark:text-green-200">
            <strong>🎉 Congratulations!</strong> You just deployed your first website. Share that URL
            with anyone — they can see your site right now.
          </p>
        </div>

        <StuckPanel>
          <StuckItem
            problem="I don't see my repository on Vercel"
            fix="You might need to grant Vercel access to your GitHub repos. Click 'Adjust GitHub App Permissions' at the bottom of the import page."
          />
          <StuckItem
            problem="The deploy failed"
            fix="Click on the deployment to see the error logs. Common fixes: make sure your project builds locally with 'npm run build' first."
          />
        </StuckPanel>
      </Section>

      {/* Section 14 */}
      <Section id="now-what" number={14} title="Now what?">
        <p>
          You did it! You went from zero to a deployed website. Here are some things to try next:
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">Ideas to try</h3>
        <div className="space-y-2">
          {[
            "Add a blog section to my website",
            "Make the design more modern with animations",
            "Add a dark mode toggle",
            "Create a page that shows the current weather",
            "Add a gallery section with my photos",
            "Make the site work better on mobile phones",
          ].map((idea, i) => (
            <div key={i} className="flex items-start gap-2 p-3 bg-surface rounded border border-border">
              <span className="text-accent font-mono text-sm flex-shrink-0">&gt;</span>
              <span className="text-sm">{idea}</span>
            </div>
          ))}
        </div>

        <h3 className="font-semibold text-lg mt-6 mb-2">Helpful tips</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Commit often.</strong> After each change you like, ask Mastra Code to &quot;commit my changes.&quot;
            This saves a snapshot you can go back to.
          </li>
          <li>
            <strong>Use Plan mode for big changes.</strong> If you want to restructure your site,
            switch to Plan mode first and review what Mastra Code wants to do.
          </li>
          <li>
            <strong>Don&apos;t edit code manually (yet).</strong> Let Mastra Code handle it. If something
            looks wrong, describe the problem and ask it to fix it.
          </li>
          <li>
            <strong>Push to GitHub after good changes.</strong> Ask Mastra Code to &quot;push to GitHub.&quot;
            Vercel will automatically redeploy with your changes.
          </li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Helpful links</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://docs.mastra.ai/docs/mastra-code/overview" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Mastra Code documentation
            </a>
          </li>
          <li>
            <a href="https://claude.com/pricing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Claude pricing &amp; plans
            </a>
          </li>
          <li>
            <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Next.js docs
            </a>{" "}
            (the framework Mastra Code often uses)
          </li>
          <li>
            <a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Vercel docs
            </a>
          </li>
        </ul>

        <div className="mt-8 p-6 rounded-lg bg-accent/5 border border-accent/20 text-center">
          <p className="text-lg font-bold mb-2">You&apos;re a web developer now. 🚀</p>
          <p className="text-muted">
            Seriously — you just built and deployed a website. Most people never get this far.
            Keep experimenting, keep building, and have fun!
          </p>
        </div>
      </Section>
    </>
  );
}
