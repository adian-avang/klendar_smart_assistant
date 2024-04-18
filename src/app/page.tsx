import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

export default async function page(): Promise<JSX.Element> {
  const tasks = await prisma.task.findMany({
    cacheStrategy: { ttl: 60 },
  })

  return (
    <div>
      {tasks.map((row) => (
        <div key={row.id}>
          {row.id} - {row.title} - {row.description}
        </div>
      ))}
    </div>
  )
}
