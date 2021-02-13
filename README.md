# DavisAPIClient
Test Project for UC Davis Job

My test machine: Mac Mini 2021 M1 Chipset (Works but recommend Intel based system for compatibility)

Prerequisites: 
- IDE (recommend Visual Studio Code with Plugins: ESLint, Docker, Angular Language, npm, and JavaScript and TypeScript)
- OS prefer macOS but Windows and Linux should be compatible
- Chromium based browser like Chrome or Microsoft Edge (Safari also suffices)
- Terminal, prefer bash but macOS default zsh will also work
- Git for version control from command line
- Docker 

Dev Installation steps:

1. Clone the project to your computer
    `cd ~/Desktop`
    `git clone git@github.com:NolanGuzman97/DavisAPIClient.git`
    or `git clone https://github.com/NolanGuzman97/DavisAPIClient.git`

2. Now `cd ~/Desktop/DavisAPIClient`
3. Create a development branch based off master using `git checkout -b feature/FirstFeature`
   1. Naming convention of branch should have prefix of `feature/, bugfix/, etc. and body describing code`
4. Give permission to the setupDev.sh file by running `chmod +x setupDev.sh`
5. Execute `./setupDev`
6. You now have an up and running instance of the DavisAPIClient

Production links:

1. If you'd like to just see the application in action visit: http://198.199.90.120:4200 (Deployed on DigitalOcean Droplet through Docker)

Run simple test suite (backend only):
1. Change directory to `./backend`
2. Run `npm run test` and this will run some simple unit tests via jest
