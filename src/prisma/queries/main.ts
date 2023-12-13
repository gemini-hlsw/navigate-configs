import { write } from "./write"
import { read } from "./read"

export async function populateDb() {
  await write()
  // await getInfo()
}
