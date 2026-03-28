#!/bin/bash
docker build -t tlc-site . && docker run --rm -p 8080:80 tlc-site
