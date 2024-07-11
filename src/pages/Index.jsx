const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Your Logo</div>
          <nav className="space-x-4">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl">Welcome to Our Website</h1>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          © 2023 Your Company
        </div>
      </footer>
    </div>
  );
};

export default Index;