# 1: Build the exe
FROM rust:1.47 as builder
WORKDIR /usr/src

# 1a: Prepare for static linking
RUN apt-get update && \
    apt-get dist-upgrade -y && \
    apt-get install -y musl-tools && \
    rustup target add x86_64-unknown-linux-musl

# 1b: Download and compile Rust dependencies (and store as a separate Docker layer)
RUN USER=root cargo new cloud_tomb
WORKDIR /usr/src/cloud_tomb
COPY Cargo.toml Cargo.lock ./
RUN cargo install --target x86_64-unknown-linux-musl --path .

# 1c: Build the exe using the actual source code
COPY src ./src
RUN cargo install --target x86_64-unknown-linux-musl --path .

# 2: Copy the exe and extra files ("static") to an empty Docker image
FROM scratch
WORKDIR /cloud_tomb
COPY --from=builder /usr/local/cargo/bin/cloud_tomb .

# for testing image with a full build env, use these lines below instead of the above lines
# WORKDIR /cloud_tomb
# RUN cp /usr/local/cargo/bin/cloud_tomb .

COPY dist ./dist
USER 1000
CMD ["./cloud_tomb"]