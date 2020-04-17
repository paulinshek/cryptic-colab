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
makefile
README.md
```

## Build and Run

### Make commands

- `make clean` - cleans the project
- `make build` - builds the project into a binary file
- `make run` - runs the project

Then navigate to localhost:8080
