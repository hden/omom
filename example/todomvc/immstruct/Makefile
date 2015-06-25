NODEBIN   := ./node_modules/.bin
source    := $(shell find actions components stores -name '*.js')
testsuite := $(shell find test -name '*.js')

bundle.js: ci
	$(NODEBIN)/browserify index.js -t babelify > bundle.js

test: test/index.js
	$(NODEBIN)/zuul --local 8080 -- test/index.js

ci: test/index.js
	$(NODEBIN)/zuul --phantom -- test/index.js

lint: $(source) $(testsuite)
	@$(NODEBIN)/eslint --ext .js actions components stores test

clean:
	rm -rf *.log bundle.js

silent:
	@:

.PHONY: silent clean lint ci test
