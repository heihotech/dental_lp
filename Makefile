PROJECT_NAME := "dental-landing_page"

.PHONY: all

all:

build-fresh: build  pm2-run

rebuild: pm2-stop pm2-del build-fresh

build:
	npm run build

pm2-run:
	pm2 start

pm2-stop:
	pm2 stop dental-landing_page

pm2-del:
	pm2 del dental-landing_page