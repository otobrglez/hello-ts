.PHONY: clean build watch

build:
	tsc -p .

install-dependencies:
	npm install && typings install

rebuild: clean build

watch:
	tsc -w -p .

clean:
	rm -rf build/*.js build/*.map
	rm -rf *.js *.map
