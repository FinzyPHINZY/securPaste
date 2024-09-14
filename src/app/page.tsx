import MaxWidthWrapper from '../components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
// import { db } from '@/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export default async function Home() {
  const { getUser } = getKindeServerSession()

  const user = await getUser()

  const pastes = Array(5).fill({
    title: 'title',
    createdAt: '2 years ago',
    visibility: 'public',
    size: '1.2kb',
  })

  return (
    <div className="bg-slate-50">
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <div className="flex mt-12">
        <MaxWidthWrapper className="w-full">
          <div className="flex">
            {/* Main Content Section - takes 80% of the width */}
            <section className="bg-teal-700 flex-grow p-5">
              <textarea
                name=""
                id=""
                defaultValue="this is where the input menu will live."
              ></textarea>
              <p>title</p>
              <p>category</p>
              <p>tags</p>
              <p> </p>
              <p>select the number of days it will last. paste expiration</p>
              LKJGH
              <p>select public or private paste:paste exposure</p>
              <button>create new paste</button>
              <Button>Create new paste</Button>{' '}
            </section>

            {/* Sidebar Section - takes 20% of the width */}
            <aside className="bg-blue-700 w-[30%] flex flex-col gap-16 p-5">
              <div className="">
                <h2>my pastes</h2>

                <ul className="flex flex-col gap-1">
                  {pastes.map((paste, i) => (
                    <div className="" key={i}>
                      <h4>{paste.title}</h4>
                      <div className="flex text-sm">
                        <span className="mr-1">{paste.createdAt}</span> |
                        <span className="ml-1">{paste.size}</span>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>

              <div className="">
                <h2>public pastes</h2>

                <ul className="flex flex-col gap-1">
                  {pastes.map((paste, i) => (
                    <div className="" key={i}>
                      <h4>{paste.title}</h4>
                      <div className="flex text-sm">
                        <span className="mr-1">{paste.createdAt}</span> |
                        <span className="ml-1">{paste.size}</span>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}
