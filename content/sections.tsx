import { Section } from "@/components/Section";
import { CommandBlock } from "@/components/CommandBlock";
import { Jargon } from "@/components/Jargon";
import { FakeTerminal } from "@/components/FakeTerminal";
import { StuckPanel, StuckItem } from "@/components/StuckPanel";
import { Illustration } from "@/components/Illustration";
import { PlanPicker } from "@/components/PlanPicker";
import { SectionMeta } from "@/components/Sidebar";
import { OSOnly } from "@/components/OSOnly";

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
  { id: "advanced", number: 14, title: "Advanced tips" },
  { id: "now-what", number: 15, title: "Now what?" },
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

        <div className="mt-4 p-4 rounded-lg bg-accent/5 border border-accent/20">
          <p className="text-sm">
            <strong>💡 Heads up:</strong> This tutorial adapts to your operating system. Use the
            <strong> Mac / Windows / Linux </strong>
            toggle in the top-right corner to switch — every command and instruction will update automatically.
          </p>
        </div>
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

        <OSOnly os="mac">
          <ol className="list-decimal list-inside space-y-2">
            <li>Press <kbd className="px-1.5 py-0.5 bg-surface rounded border border-border text-xs font-mono">Cmd</kbd> + <kbd className="px-1.5 py-0.5 bg-surface rounded border border-border text-xs font-mono">Space</kbd> to open Spotlight</li>
            <li>Type <strong>Terminal</strong></li>
            <li>Press Enter</li>
          </ol>
          <p className="mt-2 text-sm text-muted">
            You can also find it in Finder → Applications → Utilities → Terminal.
          </p>
        </OSOnly>

        <OSOnly os="windows">
          <ol className="list-decimal list-inside space-y-2">
            <li>Press the <kbd className="px-1.5 py-0.5 bg-surface rounded border border-border text-xs font-mono">Win</kbd> key on your keyboard</li>
            <li>Type <strong>Terminal</strong> or <strong>PowerShell</strong></li>
            <li>Click the app that appears</li>
          </ol>
          <p className="mt-2 text-sm text-muted">
            On Windows 11 it&apos;s called &quot;Terminal.&quot; On Windows 10 look for &quot;Windows PowerShell.&quot;
            Both work the same way for this tutorial.
          </p>
        </OSOnly>

        <OSOnly os="linux">
          <ol className="list-decimal list-inside space-y-2">
            <li>Press <kbd className="px-1.5 py-0.5 bg-surface rounded border border-border text-xs font-mono">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-surface rounded border border-border text-xs font-mono">Alt</kbd> + <kbd className="px-1.5 py-0.5 bg-surface rounded border border-border text-xs font-mono">T</kbd></li>
          </ol>
          <p className="mt-2 text-sm text-muted">
            On most Linux distributions this shortcut opens the default terminal. You can also find it
            in your applications menu.
          </p>
        </OSOnly>

        <p className="mt-4">
          You should see a window that looks something like this:
        </p>

        <OSOnly os="mac">
          <FakeTerminal
            command="echo 'Hello!'"
            output="Hello!"
            title="Terminal — Mac"
          />
        </OSOnly>
        <OSOnly os="windows">
          <FakeTerminal
            command="echo 'Hello!'"
            output="Hello!"
            title="PowerShell — Windows"
          />
        </OSOnly>
        <OSOnly os="linux">
          <FakeTerminal
            command="echo 'Hello!'"
            output="Hello!"
            title="Terminal — Linux"
          />
        </OSOnly>

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
          <OSOnly os="mac">
            <StuckItem
              problem="I can't find Terminal on my Mac"
              fix="Open Finder → Applications → Utilities → Terminal. Or press Cmd+Space and type 'Terminal'."
            />
            <StuckItem
              problem="Should I use Terminal or iTerm?"
              fix="The built-in Terminal is perfectly fine. iTerm is a fancier alternative — both work the same way for this tutorial."
            />
          </OSOnly>
          <OSOnly os="windows">
            <StuckItem
              problem="I only see 'Command Prompt', not 'Terminal'"
              fix="Command Prompt works too! But if you want the newer Terminal app, you can install 'Windows Terminal' free from the Microsoft Store."
            />
            <StuckItem
              problem="PowerShell looks different from the screenshots"
              fix="That's fine! PowerShell and Terminal both work. Just type the same commands."
            />
          </OSOnly>
          <OSOnly os="linux">
            <StuckItem
              problem="Ctrl+Alt+T doesn't work"
              fix="Look for 'Terminal' in your applications menu (sometimes called 'Console' or 'Konsole' depending on your desktop environment)."
            />
          </OSOnly>
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
          <OSOnly os="mac">
            <li>Open the downloaded <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">.zip</code> file — it will unzip into an app</li>
            <li>Drag <strong>Visual Studio Code</strong> into your <strong>Applications</strong> folder</li>
            <li>Open VS Code from Applications</li>
          </OSOnly>
          <OSOnly os="windows">
            <li>Run the downloaded <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">.exe</code> installer</li>
            <li>Click Next through the installer — check &quot;Add to PATH&quot; if it asks</li>
            <li>Open VS Code from the Start menu</li>
          </OSOnly>
          <OSOnly os="linux">
            <li>Download the <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">.deb</code> or <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">.rpm</code> package for your distro</li>
            <li>Install it with your package manager or by double-clicking the file</li>
            <li>Open VS Code from your applications menu</li>
          </OSOnly>
        </ol>

        <Illustration label="VS Code download page" caption="The download button is right on the homepage — it detects your OS" />

        <StuckPanel>
          <OSOnly os="mac">
            <StuckItem
              problem="Mac says the app is from an unidentified developer"
              fix="Right-click the app → Open → Click 'Open' in the dialog. You only need to do this once."
            />
          </OSOnly>
          <OSOnly os="windows">
            <StuckItem
              problem="Windows SmartScreen blocks the installer"
              fix="Click 'More info' → 'Run anyway'. VS Code is safe — this warning appears for many programs."
            />
          </OSOnly>
          <OSOnly os="linux">
            <StuckItem
              problem="I can't install the .deb file"
              fix="Open a terminal and run: sudo dpkg -i ~/Downloads/code_*.deb && sudo apt-get install -f"
            />
          </OSOnly>
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

        <OSOnly os="mac">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Go to{" "}
              <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                nodejs.org
              </a>
            </li>
            <li>Download the <strong>LTS</strong> version (the button that says &quot;Recommended for most users&quot;)</li>
            <li>Open the downloaded <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">.pkg</code> file</li>
            <li>Click Continue through the installer — use all the defaults</li>
          </ol>
        </OSOnly>

        <OSOnly os="windows">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Go to{" "}
              <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                nodejs.org
              </a>
            </li>
            <li>Download the <strong>LTS</strong> version (the button that says &quot;Recommended for most users&quot;)</li>
            <li>Run the downloaded <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">.msi</code> installer</li>
            <li>Click Next through everything — use all the defaults</li>
            <li>If it asks to install &quot;Tools for Native Modules,&quot; check the box and click Next</li>
          </ol>
        </OSOnly>

        <OSOnly os="linux">
          <p>The easiest way on Linux is through your package manager:</p>
          <CommandBlock command="curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - && sudo apt-get install -y nodejs" title="Ubuntu / Debian" />
          <p className="text-sm text-muted mt-2">
            On Fedora/RHEL use <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">dnf</code> instead. Or download the installer from{" "}
            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">nodejs.org</a>.
          </p>
        </OSOnly>

        <h3 className="font-semibold text-lg mt-6 mb-2">Verify it worked</h3>
        <p>
          <OSOnly os="windows">Close your terminal, open a new one, then type:</OSOnly>
          <OSOnly os={["mac", "linux"]}>Open your terminal and type:</OSOnly>
        </p>
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
          <OSOnly os="mac">
            <StuckItem
              problem="'node' is not recognized as a command"
              fix="Close your terminal completely and open a new one. The terminal needs to restart to see new programs."
            />
          </OSOnly>
          <OSOnly os="windows">
            <StuckItem
              problem="'node' is not recognized as a command"
              fix="Close your terminal completely and open a new one. If that doesn't work, restart your computer — Windows sometimes needs a restart after installing Node."
            />
            <StuckItem
              problem="The installer asks about Chocolatey"
              fix="Just click Next. You don't need Chocolatey for this tutorial."
            />
          </OSOnly>
          <OSOnly os="linux">
            <StuckItem
              problem="'node' is not recognized as a command"
              fix="Close and reopen your terminal. If you used a package manager, make sure the install finished without errors."
            />
          </OSOnly>
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

        <h3 className="font-semibold text-lg mt-6 mb-2">Install it</h3>

        <OSOnly os="mac">
          <p>Open your terminal and type:</p>
          <CommandBlock command="git --version" />
          <p>
            If Git is already installed, you&apos;ll see a version number and you&apos;re done! If not,
            your Mac will automatically pop up a dialog offering to install it — just click
            &quot;Install&quot; and follow the prompts.
          </p>
          <Illustration label="Xcode Command Line Tools dialog" caption="If Git isn't installed, your Mac will show this dialog — just click Install" />
        </OSOnly>

        <OSOnly os="windows">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Go to{" "}
              <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                git-scm.com
              </a>
            </li>
            <li>Click the big &quot;Download for Windows&quot; button</li>
            <li>Run the installer — use all the default options (just keep clicking Next)</li>
            <li><strong>Important:</strong> Close your terminal and open a new one after installing</li>
          </ol>
        </OSOnly>

        <OSOnly os="linux">
          <p>Most Linux distros have Git available through the package manager:</p>
          <CommandBlock command="sudo apt install git" title="Ubuntu / Debian" />
          <p className="text-sm text-muted mt-2">
            On Fedora use <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">sudo dnf install git</code>.
            On Arch use <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">sudo pacman -S git</code>.
          </p>
        </OSOnly>

        <h3 className="font-semibold text-lg mt-6 mb-2">Verify it worked</h3>
        <CommandBlock command="git --version" />

        <FakeTerminal command="git --version" output="git version 2.45.2" title="Checking Git version" />

        <StuckPanel>
          <OSOnly os="mac">
            <StuckItem
              problem="Mac says I need to install Xcode Command Line Tools"
              fix="Click 'Install' when prompted. This is normal — it installs Git along with some other developer tools. It might take a few minutes."
            />
          </OSOnly>
          <OSOnly os="windows">
            <StuckItem
              problem="'git' is not recognized"
              fix="Make sure you close and reopen your terminal after installing Git. If it still doesn't work, restart your computer."
            />
          </OSOnly>
          <OSOnly os="linux">
            <StuckItem
              problem="'Permission denied' when installing"
              fix="Make sure you include 'sudo' at the start of the install command. It will ask for your password."
            />
          </OSOnly>
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
          <li>Create an account (email or Google sign-in)</li>
          <li>Choose your plan</li>
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
          <OSOnly os={["mac", "linux"]}>
            <StuckItem
              problem="Permission denied / EACCES error"
              fix="Try adding 'sudo' in front: sudo npm install -g mastracode — you'll need to enter your computer password."
            />
          </OSOnly>
          <OSOnly os="windows">
            <StuckItem
              problem="Permission denied / EACCES error"
              fix="Try opening your terminal as Administrator: right-click Terminal or PowerShell → 'Run as administrator' → then run the install command again."
            />
          </OSOnly>
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

        <OSOnly os={["mac", "linux"]}>
          <CommandBlock command="mkdir my-first-website && cd my-first-website" />
          <p className="text-sm text-muted">
            This creates a new folder called <code className="bg-surface px-1 py-0.5 rounded font-mono">my-first-website</code> on
            your computer and moves into it.{" "}
            <code className="bg-surface px-1 py-0.5 rounded font-mono">mkdir</code> = &quot;make directory&quot; (create a folder),{" "}
            <code className="bg-surface px-1 py-0.5 rounded font-mono">cd</code> = &quot;change directory&quot; (go into it).
          </p>
        </OSOnly>

        <OSOnly os="windows">
          <CommandBlock command="mkdir my-first-website; cd my-first-website" />
          <p className="text-sm text-muted">
            This creates a new folder called <code className="bg-surface px-1 py-0.5 rounded font-mono">my-first-website</code> on
            your computer and moves into it.{" "}
            <code className="bg-surface px-1 py-0.5 rounded font-mono">mkdir</code> = &quot;make directory&quot; (create a folder),{" "}
            <code className="bg-surface px-1 py-0.5 rounded font-mono">cd</code> = &quot;change directory&quot; (go into it).
            In PowerShell we use <code className="bg-surface px-1 py-0.5 rounded font-mono">;</code> instead of <code className="bg-surface px-1 py-0.5 rounded font-mono">&&</code> to chain commands.
          </p>
        </OSOnly>

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

        <h3 className="font-semibold text-lg mt-8 mb-2">3. Branches and pull requests (optional, but useful)</h3>
        <p>
          Right now all your work goes straight to{" "}
          <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">main</code> — the
          default version of your project. That&apos;s fine while you&apos;re experimenting. But
          once your site is live and you&apos;re making changes you care about, there&apos;s a
          safer pattern that pros use: <strong>branches</strong> and{" "}
          <strong>pull requests</strong>.
        </p>

        <h4 className="font-semibold mt-4 mb-2">What&apos;s a branch?</h4>
        <p>
          A{" "}
          <Jargon term="branch">
            Think of your project as a tree. The trunk is called &quot;main&quot; — that&apos;s
            the working version. A branch is a side path off the trunk where you can try things
            out without affecting main. If your experiment works, you merge the branch back into
            main. If it doesn&apos;t, you throw the branch away and main is untouched.
          </Jargon>{" "}
          is a parallel copy of your project where you can try changes without touching the main
          version. If the changes work out, you keep them. If they don&apos;t, you throw the
          branch away — your main version stays exactly how it was.
        </p>
        <p>
          You don&apos;t have to remember any git commands. Just ask Mastra Code:
        </p>
        <div className="p-4 bg-surface rounded-lg border border-border my-4">
          <p className="font-mono text-sm">
            &gt; Make a new branch called &lsquo;add-contact-form&rsquo; and switch to it
          </p>
        </div>
        <p>
          Now any changes you make happen on that branch only. Your{" "}
          <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">main</code> branch is
          frozen in its working state.
        </p>

        <h4 className="font-semibold mt-4 mb-2">What&apos;s a pull request?</h4>
        <p>
          A{" "}
          <Jargon term="pull request">
            A pull request (PR for short) is a proposal to merge your branch back into main.
            It&apos;s how teams review code before it goes live. Even when you&apos;re working
            alone, PRs are useful because they show you a clear before/after summary of every
            change, and they give Vercel a chance to deploy a preview URL so you can see your
            changes live before merging.
          </Jargon>{" "}
          (or PR) is a proposal to merge your branch into{" "}
          <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">main</code>. On
          GitHub, it shows you exactly what changed, line by line. Even working solo, PRs are
          handy because Vercel will automatically build a <strong>preview deployment</strong> for
          every PR — a live URL where you can see your changes on the real internet before they
          go to your main site.
        </p>

        <h4 className="font-semibold mt-4 mb-2">The whole flow in plain English</h4>
        <p>Once you&apos;re on a branch and happy with your changes, just say:</p>
        <div className="p-4 bg-surface rounded-lg border border-border my-4">
          <p className="font-mono text-sm">
            &gt; Push this branch to GitHub and open a pull request
          </p>
        </div>
        <p>
          Mastra Code will push the branch, then either open the PR for you (if you have the{" "}
          <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">gh</code> CLI
          installed) or give you a link to open it on GitHub.com with one click. You review the
          changes, click &quot;Merge pull request,&quot; and your work is now part of{" "}
          <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">main</code>.
        </p>

        <div className="mt-4 p-4 rounded-lg bg-accent/5 border border-accent/20">
          <p className="text-sm">
            <strong>💡 When to bother:</strong> For tiny tweaks, just commit to main like before.
            For anything bigger — a new section, a redesign, anything you&apos;re not sure
            about — use a branch and PR. It costs nothing and saves you from breaking your
            working site.
          </p>
        </div>

        <StuckPanel>
          <StuckItem
            problem="I made changes on the wrong branch"
            fix="Tell Mastra Code: 'I made changes on main but they should be on a new branch — move them.' It'll handle the git gymnastics."
          />
          <StuckItem
            problem="My PR shows merge conflicts"
            fix="Paste the conflict message into Mastra Code: 'My PR has merge conflicts, here's what GitHub says: [paste].' It'll walk you through resolving them."
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
            Vercel is a company that hosts websites for free. You connect your GitHub project to
            Vercel, and it turns your code into a live website with a real URL. Every time you
            update your code on GitHub, Vercel automatically updates the website too.
          </Jargon>{" "}
          — it&apos;s free and works beautifully with the kind of projects Mastra Code creates.
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">1. Sign up for Vercel</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Go to{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              vercel.com
            </a>
          </li>
          <li>Click &quot;Sign Up&quot;</li>
          <li>Choose &quot;Continue with GitHub&quot; (this connects your accounts)</li>
          <li>Authorize Vercel to access your GitHub</li>
        </ol>

        <Illustration label="Vercel signup — 'Continue with GitHub'" caption="Sign up with your GitHub account to connect them automatically" />

        <h3 className="font-semibold text-lg mt-6 mb-2">2. Import your project</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            After signing up, go to{" "}
            <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              vercel.com/new
            </a>
          </li>
          <li>You&apos;ll see your GitHub repositories — find <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">my-first-website</code></li>
          <li>Click &quot;Import&quot;</li>
          <li>Click &quot;Deploy&quot; (you don&apos;t need to change any settings)</li>
          <li>Wait about 1-2 minutes...</li>
          <li>🎉 Your website is live! Vercel gives you a URL like <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">my-first-website.vercel.app</code></li>
        </ol>

        <Illustration label="Vercel deploy success screen" caption="After deploying, you'll see confetti and your live URL!" />

        <div className="mt-4 p-4 rounded-lg bg-success/10 border border-success/30">
          <p className="text-sm">
            <strong>🎉 Congratulations!</strong> You just built and deployed a real website using AI — from zero.
            Share the URL with anyone and they can see your site!
          </p>
        </div>

        <StuckPanel>
          <StuckItem
            problem="I don't see my repository in Vercel"
            fix="Click 'Adjust GitHub App Permissions' in Vercel and make sure it has access to your repos."
          />
          <StuckItem
            problem="The deploy failed"
            fix="Go back to your Mastra Code session and say 'The Vercel deploy failed — here's the error: [paste error]'. It'll fix it for you."
          />
        </StuckPanel>
      </Section>

      {/* Section 14 */}
      <Section id="advanced" number={14} title="Advanced tips">
        <p>
          You&apos;ve built and deployed a site — you don&apos;t need any of this to keep going.
          But these are the features that make Mastra Code feel less like a tool and more like a
          teammate that already knows your project. Skim, pick what looks useful, skip the rest.
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">Auto memory: it remembers what you teach it</h3>
        <p>
          By default, Mastra Code quietly takes notes about your project as it works — your build
          commands, conventions you&apos;ve corrected it on, quirks of your setup — and reads those
          notes back at the start of every new session. So the next time you open it, it already knows.
        </p>
        <p>
          This feature is called{" "}
          <Jargon term="auto memory">
            Also called &quot;observational memory&quot; or just &quot;persistent memory&quot; in some
            docs — they&apos;re all the same thing. Mastra Code decides on its own what&apos;s worth
            saving (it doesn&apos;t save something every session), and loads those notes automatically
            when you start a new conversation.
          </Jargon>
          . It&apos;s on by default, but here&apos;s how to check, tweak it, and use it on purpose.
        </p>

        <h4 className="font-semibold mt-4 mb-2">Check it&apos;s on</h4>
        <p>
          Auto memory needs Mastra Code version 2.1.59 or newer. Check yours:
        </p>
        <CommandBlock command="mastracode --version" />
        <p>
          Then, inside a Mastra Code session, run:
        </p>
        <CommandBlock command="/memory" />
        <p>
          You&apos;ll see what it currently remembers and a toggle to turn auto memory on or off.
        </p>

        <h4 className="font-semibold mt-4 mb-2">Where the notes live</h4>
        <p>
          Auto memory is stored as plain text files on your computer, here:
        </p>
        <CommandBlock command="~/.claude/projects/<your-project>/memory/" />
        <p>
          Nothing leaves your machine. You can open these files in your code editor, read them,
          or delete them if it remembered something you&apos;d rather it forget. Each project gets
          its own folder.
        </p>

        <h4 className="font-semibold mt-4 mb-2">Teach it something on purpose</h4>
        <p>
          You don&apos;t have to edit anything. Just tell Mastra Code, in plain English, what you
          want it to remember:
        </p>
        <div className="space-y-2 my-4">
          {[
            "Remember that I always want Tailwind, not plain CSS",
            "Remember that my deploy command is npm run deploy",
            "Remember that I prefer dark themes for everything",
          ].map((prompt, i) => (
            <div key={i} className="flex items-start gap-2 p-3 bg-surface rounded border border-border">
              <span className="text-accent font-mono text-sm flex-shrink-0">&gt;</span>
              <span className="text-sm">{prompt}</span>
            </div>
          ))}
        </div>
        <p>
          It decides whether it&apos;s worth saving. Most of the time, things you say
          &quot;remember&quot; about will stick.
        </p>

        <StuckPanel>
          <StuckItem
            problem="I don't see a /memory command"
            fix="Run mastracode --version. If it's older than 2.1.59, upgrade by re-running the install command from Step 8. If your version is recent, auto memory may be disabled — start a session, type /memory, and flip the toggle on."
          />
          <StuckItem
            problem="It remembered something wrong"
            fix="Just tell it: 'Forget what you remembered about X.' Or open ~/.claude/projects/<your-project>/memory/ in your code editor and delete the file. It's only plain text."
          />
        </StuckPanel>

        <h3 className="font-semibold text-lg mt-8 mb-2">AGENTS.md: tell it about your project once</h3>
        <p>
          There&apos;s a second kind of memory that&apos;s a little different. You create a file called{" "}
          <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">AGENTS.md</code> in
          your project folder, write whatever you want Mastra Code to always know, and it reads
          that file at the start of every session.
        </p>
        <p>
          The difference from auto memory:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Auto memory</strong> = stuff Mastra Code figures out on its own. Lives on your
            computer only.
          </li>
          <li>
            <strong>AGENTS.md</strong> = stuff <em>you</em> write down on purpose. Gets saved to
            GitHub with your project, so anyone (or any other AI tool) working on it sees the same
            instructions.
          </li>
        </ul>
        <p>
          Use AGENTS.md for things like &quot;this project uses Next.js 15&quot;, &quot;always run
          <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono mx-1">npm run lint</code>
          after changes&quot;, or &quot;the API key lives in .env.local, never commit it.&quot;
        </p>

        <h4 className="font-semibold mt-4 mb-2">The easiest way to make one</h4>
        <p>Just ask Mastra Code:</p>
        <div className="p-3 bg-surface rounded border border-border my-2">
          <span className="text-accent font-mono text-sm">&gt;</span>{" "}
          <span className="text-sm">Set up an AGENTS.md for this project</span>
        </div>
        <p>
          Or run the built-in command inside a session, which does the same thing:
        </p>
        <CommandBlock command="/init" />
        <p className="text-sm text-muted">
          Note: you might also see this file called{" "}
          <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">CLAUDE.md</code> in
          some docs. They&apos;re the same idea, and both work.
        </p>

        <h3 className="font-semibold text-lg mt-8 mb-2">More slash commands worth knowing</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">/memory</code> —
            View and edit what Mastra Code remembers about this project.
          </li>
          <li>
            <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">/init</code> —
            Generate an AGENTS.md for the current project automatically.
          </li>
          <li>
            <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">/clear</code> —
            Start a fresh conversation. Useful when the chat has gotten long or you feel like Mastra
            Code is &quot;stuck&quot; on an earlier idea.
          </li>
          <li>
            <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">/help</code> —
            List every available command.
          </li>
        </ul>

        <h3 className="font-semibold text-lg mt-8 mb-2">Protect yourself from bad changes</h3>
        <p>
          Now that you have a real project, here&apos;s a habit that&apos;ll save you a lot of
          headaches: before asking Mastra Code for a big or risky change, make sure your current
          working version is saved somewhere safe. Two easy ways:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Commit first.</strong> Ask Mastra Code: &quot;Commit and push my current work
            to GitHub before we start.&quot; If the next change goes sideways, you can always go
            back to the version on GitHub.
          </li>
          <li>
            <strong>Use a branch and PR.</strong> See Step 12 — for anything bigger than a tweak,
            ask Mastra Code to make a new branch first, then open a pull request when
            you&apos;re happy. If the change goes wrong, you switch back to{" "}
            <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">main</code> and
            your working site is untouched. Bonus: Vercel gives every PR its own preview URL so
            you can test changes live before merging.
          </li>
        </ul>
        <div className="mt-4 p-4 rounded-lg bg-accent/5 border border-accent/20">
          <p className="text-sm">
            <strong>💡 Tip:</strong> You don&apos;t have to remember the git commands. Just describe
            what you want in plain English and Mastra Code will figure out the right commands to run.
          </p>
        </div>
      </Section>

      {/* Section 15 */}
      <Section id="now-what" number={15} title="Now what?">
        <p>
          You&apos;ve got the whole setup working. Here are some ideas for what to do next:
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">Things to try</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Modify your site:</strong> Go back to your project folder, run{" "}
            <code className="px-1 py-0.5 bg-surface rounded text-sm font-mono">mastracode</code>, and tell it to change things.
            &quot;Make the hero section taller and add an animation.&quot;
          </li>
          <li>
            <strong>Build something new:</strong> Create a new folder, start Mastra Code in it, and try a different project.
            A blog? A recipe site? A link-in-bio page?
          </li>
          <li>
            <strong>Learn as you go:</strong> Look at the code Mastra Code writes. Ask it to explain things:
            &quot;What does this CSS do?&quot; or &quot;Why did you use this component?&quot;
          </li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Helpful prompts</h3>
        <div className="space-y-2 my-4">
          {[
            "Add a dark/light theme toggle to my site",
            "Make this responsive so it looks good on phones",
            "Add a blog section where I can write posts in Markdown",
            "Help me set up a custom domain for my Vercel site",
            "Add page transitions and animations",
          ].map((prompt, i) => (
            <div key={i} className="flex items-start gap-2 p-3 bg-surface rounded border border-border">
              <span className="text-accent font-mono text-sm flex-shrink-0">&gt;</span>
              <span className="text-sm">{prompt}</span>
            </div>
          ))}
        </div>

        <h3 className="font-semibold text-lg mt-6 mb-2">Troubleshooting</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Hit a usage limit?</strong> Wait for it to reset (usually 5 hours on Pro) or upgrade
            your Claude plan.
          </li>
          <li>
            <strong>Something broke?</strong> Tell Mastra Code: &quot;Something broke. Here&apos;s the error: [paste error]&quot;
          </li>
          <li>
            <strong>Want to start over?</strong> Create a new folder and start fresh. Your old project is
            still safe on GitHub.
          </li>
        </ul>

        <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 text-center">
          <p className="text-lg font-semibold mb-2">
            You did it! 🎉
          </p>
          <p className="text-muted">
            You went from zero to deploying a website. That&apos;s a real accomplishment.
            Now go build something cool.
          </p>
        </div>
      </Section>
    </>
  );
}
