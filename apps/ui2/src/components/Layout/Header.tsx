import { FileText } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-primary text-white border-b border-primary-dark sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold">
              LaunchCraft Studio
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
