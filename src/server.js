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

      this.post("/users/login", (schema) => {
        const now = new Date()
        const cookieExpiration = new Date(now.getTime() + 24 * 3600 * 1000)
        document.cookie = `token=${Math.random().toString(36).substr(2)}; domain=localhost; path=/PEBRA; expires=${cookieExpiration.toUTCString()};`
        return schema.users.find(1)
      })

      this.get("/users", (schema) => {
        return schema.users.all()
      })

      this.post('/users', (schema, request) => {
        const user = JSON.parse(request.requestBody)

        return schema.users.create(user)
      })

      this.namespace = ""
      this.passthrough()
    },
  })

  return server
}