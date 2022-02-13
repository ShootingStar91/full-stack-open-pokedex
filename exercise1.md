# Exercise 11.1

I chose as the language for the imaginary project Rust, because I have used that before in a group project and want to refresh my memory.

Linting in Rust is usually done with tools called rustfmt and Clippy. They can be installed through the rust package manager called Cargo. Rustfmt checks that the formatting is correct (cargo fmt -- --check), and clippy can then be ran to see if there are any code quality warnings (cargo clippy -- -D warnings). Testing is usually done also by cargo, one can simply use the command "cargo test" which will run the tests written in the rust project. Building similarly happens by writing cargo build. The Rust project will have a cargo.toml file which tells all the different crates (rust packages) that the project needs to be built.

Alternatives to self-hosted CI tools include Concourse, Drone and Buddy. Cloud-based solutions are GitLab, AWS CodePipeline, and Azure DevOps.

A Rust project worked on by 6 people would probably be best with the CI ran in a cloud-based environment, assuming the software does not have any special needs, such as requiring more hardware performance (or a GPU) than the typical cloud setup grants. Linting, testing and building could be made very simple by for example GitHub Actions. Jenkins for example would require more work which probably would not pay off for a single team of six developers. Self-hosted solutions could come in handy when there are multiple teams, creating more complicated needs for organizing the integration process.

