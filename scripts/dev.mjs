import { networkInterfaces } from "node:os"
import { spawn } from "node:child_process"

const PORT = process.env.PORT || "3000"

function getLanIp() {
  const nets = networkInterfaces()
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] ?? []) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address
      }
    }
  }
  return null
}

const lanIp = getLanIp()

console.log("")
console.log(`  Local:    http://localhost:${PORT}`)
console.log(lanIp ? `  Network:  http://${lanIp}:${PORT}` : "  Network:  (no se detectó una IP de red)")
console.log("")

const child = spawn(`next dev -H 0.0.0.0 -p ${PORT}`, {
  stdio: "inherit",
  shell: true,
})

child.on("exit", (code) => process.exit(code ?? 0))
