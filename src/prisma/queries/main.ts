import { write } from "./write.js"
import { read } from "./read.js"

export async function populateDb() {
  await write()
  // await getInfo()
}
