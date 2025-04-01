// src/components/LayoutWrapper.jsx
export default function LayoutWrapper({ children }) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-500 text-white p-4">
          {/* Header content */}
          <h1>My App</h1>
        </header>
        <main className="flex-grow p-4">
          {children}
        </main>
        <footer className="bg-gray-200 p-4">
          {/* Footer content */}
          <p>© 2023 My App</p>
        </footer>
      </div>
    )
  }