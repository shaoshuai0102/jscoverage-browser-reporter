install:
	@tnpm install
	@spm install

build:
	@node_modules/.bin/gulp template
	@spm build

deploy:
	@qingting scp dist/jscoverage-browser-reporter dev
