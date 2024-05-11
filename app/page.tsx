import Image from 'next/image';

const data = [
  {
    name: 'Yawaliyul Nur Jailani',
    description: 'This is one of the dependencies!',
    url_npm: 'https://www.npmjs.com/package/my_tea_portofolio',
  },
  {
    name: 'Sofii',
    description: 'This is one of the dependencies!',
    url_npm: 'https://www.npmjs.com/package/@yawaliyul/sofii',
  },
  {
    name: 'Hendra',
    description: 'This is one of the dependencies!',
    url_npm: 'https://www.npmjs.com/package/@yawaliyul/hendra',
  },
  {
    name: 'Bintan',
    description: 'This is one of the dependencies!',
    url_npm: 'https://www.npmjs.com/package/@yawaliyul/bintan',
  },
  {
    name: 'Ozen',
    description: 'This is one of the dependencies!',
    url_npm: 'https://www.npmjs.com/package/@yawaliyul/ozen',
  },
  {
    name: 'Arep',
    description: 'This is one of the dependencies!',
    url_npm: 'https://www.npmjs.com/package/@yawaliyul/arep',
  },
  {
    name: 'Riski',
    description: 'This is one of the dependencies!',
    url_npm: 'https://www.npmjs.com/package/@yawaliyul/riski',
  },
  {
    name: 'Ikbal',
    description: 'This is one of the dependencies!',
    url_npm: 'https://www.npmjs.com/package/@yawaliyul/ikbal',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image
        src="/tea.jpeg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <div className="z-10 max-w-5xl items-center font-mono text-sm lg:flex fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <div className="column-2">
          <div className="pb-5 text-2xl">
            <code className="font-mono font-bold text-center">
              This app is only for tea portfolio on npm :D
            </code>
          </div>
          <div className="text-center">
            created by :{' '}
            <code className="font-mono font-bold">Yawaliyul Nur Jailani</code>
          </div>
        </div>
      </div>
      <br />
      <code className="font-mono font-bold text-2xl">Dependents : </code>
      <br />
      <div className="z-10 max-w-5xl items-center font-mono text-sm lg:flex fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          {data.map((item, index) => (
            <a
              key={index} // Add a unique key prop
              href={item.url_npm}
              className="group rounded-lg border px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mr-2 ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                {item.name + ' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
