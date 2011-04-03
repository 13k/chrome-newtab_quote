RELEASE_FILTER_OUT=README% %.zip Makefile
RELEASE_ALL_FILES=$(wildcard *)
RELEASE_FILES=$(filter-out $(RELEASE_FILTER_OUT),$(RELEASE_ALL_FILES))
RELEASE_VERSION=$(shell grep '"version"\s*:' manifest.json | sed -e 's/"version"\s*: //' -e 's/^\s*"//' -e 's/"\s*,\s*//')

release:
	@zip newtab_quote-$(RELEASE_VERSION).zip $(RELEASE_FILES)
