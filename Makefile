src/types/travis.ts: schemata/travis.yml.json
	./node_modules/.bin/quicktype -l ts -s schema --just-types $< > $@

schemata/travis.yml.json:
	curl -fsSL https://raw.githubusercontent.com/travis-ci/travis-yml/master/schema.json > $@
