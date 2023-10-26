import { PrismaClient } from "@prisma/client"
export const prisma = new PrismaClient().$extends({
  result: {
    target: {
      ra: {
        needs: { type: true, coord1: true },
        compute(target) {
          if (target.type === "FIXED") {
            return undefined
          } else {
            return {
              hms: deg2hms(target.coord1),
              degrees: target.coord1,
            }
          }
        },
      },
      dec: {
        needs: { type: true, coord2: true },
        compute(target) {
          if (target.type === "FIXED") {
            return undefined
          } else {
            return {
              dms: deg2dms(target.coord2),
              degrees: target.coord2,
            }
          }
        },
      },
      az: {
        needs: { type: true, coord1: true },
        compute(target) {
          if (target.type === "FIXED") {
            return {
              dms: deg2dms(target.coord1),
              degrees: target.coord1,
            }
          } else {
            return undefined
          }
        },
      },
      el: {
        needs: { type: true, coord2: true },
        compute(target) {
          if (target.type === "FIXED") {
            return {
              dms: deg2dms(target.coord2),
              degrees: target.coord2,
            }
          } else {
            return undefined
          }
        },
      },
    },
  },
})

function deg2hms(deg: number) {
  if (deg < 0) deg = deg + 360
  let total_hours = (deg / 360) * 24
  let hours = Math.trunc(total_hours)
  total_hours = (total_hours - hours) * 60
  let mins = Math.trunc(total_hours)
  let secs = (total_hours - mins) * 60
  if (secs.toFixed(2) == "60.00") {
    mins = mins + 1
    secs = 0
  }
  if (mins == 60) {
    hours = hours + 1
    mins = 0
  }
  return (
    hours.toString().padStart(2, "0") +
    ":" +
    mins.toString().padStart(2, "0") +
    ":" +
    secs.toFixed(3).padStart(6, "0")
  )
}

function deg2dms(deg: number) {
  let degrees = Math.trunc(deg)
  let rest = (deg - degrees) * 60
  let mins = Math.trunc(rest)
  let secs = (rest - mins) * 60
  if (deg < 0) {
    return (
      "-" +
      Math.abs(degrees).toString() +
      ":" +
      Math.abs(mins).toString() +
      ":" +
      Math.abs(secs).toFixed(2)
    )
  } else {
    return (
      Math.abs(degrees).toString().padStart(2, "0") +
      ":" +
      Math.abs(mins).toString().padStart(2, "0") +
      ":" +
      Math.abs(secs).toFixed(3).padStart(6, "0")
    )
  }
}
