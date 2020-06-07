# cryptic-colab

A project to allow multiple users to collaborate remotely on crosswords

## Prerequisites

Go v.1.14.2

## Project Structure

```
/bin
/cmd
	main.go <- our main project file
/internal
	/pkg <- will contain any internal packages (for use only within this project)
/pkg <- will contain any non-internal packages (for use within and without of this project)]
/web <- the front-end lives here
makefile
README.md
```

## Build and Run

When running for the first time, do

```
cd web && yarn build
```

This generates the static site in `./web/build` which is then served by the Go server when you run `make build && make run`.


### Make commands

- `make clean` - cleans the project
- `make build` - builds the project into a binary file
- `make run` - runs the project

Then navigate to localhost:8080

### Front end development

```
yarn start
```

More information in [front end specific README](web/README.md)
