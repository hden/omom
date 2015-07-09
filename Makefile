NODEBIN   := ./node_modules/.bin
source    := $(shell find src -name '*.js')
testsuite := $(shell find test -name '*.js')

saucelabs: test/index.js
	$(NODEBIN)/zuul --concurrency 5 -- test/index.js

test: test/index.js
	$(NODEBIN)/zuul --local 8080 -- test/index.js

ci: test/index.js
	$(NODEBIN)/zuul --phantom -- test/index.js

lint: $(source) $(testsuite)
	@$(NODEBIN)/eslint --ext .js src test

clean:
	rm -rf *.log bundle

silent:
	@:

.PHONY: silent clean lint ci test saucelabs
