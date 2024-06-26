FROM golang:1.22.3

WORKDIR /app

COPY ./serverGO /app

COPY . .

RUN go build -o server .

EXPOSE 443

CMD ["./server"]
