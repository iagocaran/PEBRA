import { Server, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  const server = new Server({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", { name: "Bob", email: "bob@mail.com", password: "1234" })
      server.create("user", { name: "Alice", email: "a@a", password: "a", token: "qr8qp8ytb1o"})
    },

    routes() {
      this.namespace = "api"

      this.post("/users/login", (schema, req) => {
        const now = new Date()
        const cookieExpiration = new Date(now.getTime() + 24 * 3600 * 1000)
        const credentials = JSON.parse(req.requestBody)
        const user = schema.users.where({ email: credentials.email, password: credentials.password }).models[0]
        // TODO: Verify if user exists, if not create it
        // const token = Math.random().toString(36).substr(2)
        const token = 'qr8qp8ytb1o'
        document.cookie = `token=${token}; domain=localhost; path=/PEBRA; expires=${cookieExpiration.toUTCString()};`
        return user.update({ token })
      })

      this.get("/users/me", (schema) => {
        const token = document.cookie.split('; ').map((i) => i.split('=')).find((i) => i[0] === 'token')[1]
        const user = schema.users.where({ token }).models[0]
        return { email: user.email }
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