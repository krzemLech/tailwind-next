export default function FlexBox() {
  return (
    <div className="home m-4">
      <header>Header</header>
      <div className="flex flex-col-reverse md:flex-row-reverse">
        <main className="basis-3/4 bg-green-400">Main content</main>
        <aside className="flex flex-col basis-1/4 bg-sky-400">
          <div>Sidebar</div>
          <div>Menu</div>
        </aside>
      </div>
    </div>
  );
}
