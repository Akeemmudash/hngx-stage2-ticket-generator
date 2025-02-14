const MainContentLayout = ({ children }) => {
  return (
    <div className="container">
      <main className="main-content bg-background-dark border-secondary-light container mt-12 mb-20 flex max-w-3xl flex-col items-center justify-center rounded-4xl border p-12 md:rounded-[40px]">
        {children}
      </main>
    </div>
  );
};

export default MainContentLayout;
