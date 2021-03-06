
GOPATH=$(shell pwd)/vendor:$(shell pwd)
GOBIN=$(shell pwd)/bin
GOFILES=$(wildcard cmd/*.go)
GONAME=$(shell basename "$(PWD)")
PID=/tmp/go-$(GONAME).pid


test:
	@echo $(GOPATH)

build:
	@echo "Building $(GOFILES) to ./bin"
	@GOBIN=$(GOBIN) go build -mod=mod -o bin/$(GONAME) $(GOFILES) 

buildaws:
	@echo "Building $(GOFILES) to $(GOPATH)/application"
	@echo "GOPATH $(GOPATH)"
	@GOBIN=$(GOBIN) GOARCH=amd64 GOOS=linux go build -mod=mod -o bin/application $(GOFILES) 
	@cd web && yarn install && yarn build

# get:
#   @GOPATH=$(GOPATH) GOBIN=$(GOBIN) go get .

install:
	@GOPATH=$(GOPATH) GOBIN=$(GOBIN) go install $(GOFILES)

run:
	@GOPATH=$(GOPATH) GOBIN=$(GOBIN) go run -mod=mod $(GOFILES)

# watch:
#   @$(MAKE) restart &
#   @fswatch -o . -e 'bin/.*' | xargs -n1 -I{}  make restart

# restart: clear stop clean build start

# start:
#   @echo "Starting bin/$(GONAME)"
#   @./bin/$(GONAME) & echo $$! > $(PID)

# stop:
#   @echo "Stopping bin/$(GONAME) if it's running"
#   @-kill `[[ -f $(PID) ]] && cat $(PID)` 2>/dev/null || true

# clear:
#   @clear

clean:
	@echo "Cleaning"
	@GOPATH=$(GOPATH) GOBIN=$(GOBIN) go clean

# .PHONY: build get install run watch start stop restart clean