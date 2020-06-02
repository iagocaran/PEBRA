import { Server, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  const server = new Server({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", { name: "Bob" })
      server.create("user", { name: "Alice" })
    },

    routes() {
      this.namespace = "api"

      this.get("/users", (schema) => {
        return schema.users.all()
      })

      this.post('/users', (schema, request) => {
        const user = JSON.parse(request.requestBody)

        return schema.users.create(user)
      })
    },
  })

  return server
}