import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sequi cumque impedit placeat modi nam quod, veniam magnam est excepturi. Fuga rerum aliquid, reiciendis reprehenderit illum explicabo sit quo ullam.
        Aperiam consectetur voluptatum adipisci laborum explicabo tempore in necessitatibus nisi voluptatem! Nesciunt, eaque velit rem quasi deleniti sapiente quia dolorum voluptas amet. Explicabo repudiandae asperiores, doloribus cum vitae totam alias?
        Corrupti totam quo dolorum quam consequatur explicabo nemo recusandae molestiae, harum eos facilis impedit cumque accusamus atque expedita velit necessitatibus esse aliquid laborum, ducimus architecto consectetur magnam veritatis. Voluptatum, quae.
        Ipsum, molestias eos dolores aperiam soluta incidunt distinctio nostrum recusandae, suscipit quo libero porro maiores sint obcaecati tempore! Assumenda error unde libero obcaecati sint cupiditate praesentium sapiente hic architecto fugiat?
      </main>
      <footer>
        <p>Pie de página</p>
      </footer>
    </div>
  );
}
