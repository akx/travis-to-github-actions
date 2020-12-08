QUICKTYPE_OPTIONS := -l ts -s schema --just-types --no-enums --converters all-objects

all: src/types/travis.ts

src/types/travis.ts: schemata/travis.yml.json
	./node_modules/.bin/quicktype ${QUICKTYPE_OPTIONS} --out $@ $<

schemata/travis.yml.json:
	curl -fsSL https://raw.githubusercontent.com/travis-ci/travis-yml/master/schema.json > $@
