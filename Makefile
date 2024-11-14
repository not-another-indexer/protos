# project setup
GEN_PATH=gen/
PROTOC_GEN_GRPC_WEB_BINARY_PATH=node_modules/protoc-gen-grpc-web/bin
PROTOC_GEN_JS_BINARY_PATH=node_modules/protoc-gen-js/bin

# ==================================================================================== #
# HELPERS
# ==================================================================================== #

## help: print this help message
.PHONY: help
help:
	@echo 'Usage:'
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' | sed -e 's/^/  /'

# ==================================================================================== #
# CLEAN
# ==================================================================================== #

## clean: remove all generated files
.PHONY: clean
clean:
	@rm -rf ${GEN_PATH}

# ==================================================================================== #
# GENERATE
# ==================================================================================== #

## generate: generate all proto files
.PHONY: generate
generate:
	@mkdir -p ${GEN_PATH}
	@bun protoc -I=proto proto/nai_auth.proto --ts_out ${GEN_PATH}
	@bun protoc -I=proto proto/nai.proto --ts_out ${GEN_PATH}

