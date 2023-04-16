export default function Layout() {
  return (
    <div className="layout h-screen border selection:border-1 border-red-100 overflow-hidden">
      <header className="font-bold text-center bg-green-200 min-h-8">
        Layout
      </header>

      <main className="container h-full mx-auto pt-4 bg-gray-100 columns-sm">
        <p className="mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          quos hic tempore itaque beatae ut vel quam illo nemo, inventore ab
          magni. Sit aliquam aliquid provident eligendi libero ullam non!
        </p>
        <p className="mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          quos hic tempore itaque beatae ut vel quam illo nemo, inventore ab
          magni. Sit aliquam aliquid provident eligendi libero ullam non!
        </p>
        <p className="mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          quos hic tempore itaque beatae ut vel quam illo nemo, inventore ab
          magni. Sit aliquam aliquid provident eligendi libero ullam non!
        </p>
        <p className="mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          quos hic tempore itaque beatae ut vel quam illo nemo, inventore ab
          magni. Sit aliquam aliquid provident eligendi libero ullam non!
        </p>
        <p className="mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          quos hic tempore itaque beatae ut vel quam illo nemo, inventore ab
          magni. Sit aliquam aliquid provident eligendi libero ullam non!
        </p>
        <p className="mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          quos hic tempore itaque beatae ut vel quam illo nemo, inventore ab
          magni. Sit aliquam aliquid provident eligendi libero ullam non!
        </p>
        <div className="container overflow-hidden">
          {/* object-none & object-center etc. allows to position photo inside an image tag */}
          <img
            src="https://images.unsplash.com/photo-1681502725768-165697a6c23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            alt="lakes landscape"
            className="w-64 h-64 object-none object-right-center rounded-3xl"
          />
        </div>
      </main>
    </div>
  );
}
