default:
    just --list

run-node-poppler:
    node src/node-poppler.js

clean:
    rm -rf html
