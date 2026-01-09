"use client";

import { useState } from "react";
import {
  X,
  Home,
  Star,
  ChevronRight,
  Download,
  Trash2,
  Settings,
  BookOpen,
  Search,
} from "lucide-react";

interface MeetYourAIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MeetYourAIModal({
  isOpen,
  onClose,
}: MeetYourAIModalProps) {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 bg-black/50 backdrop-blur-sm">
      <div className="fixed inset-0 bg-white flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <div className="text-2xl font-bold tracking-tight">MAI</div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Home size={20} />
              <span className="font-medium">Home</span>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
              <Star size={20} />
              <span>Favorites</span>
            </button>

            <div className="pt-4 pb-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors group">
                <ChevronRight size={20} className="text-gray-400" />
                <span className="font-medium">MAIGent</span>
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors group">
                <ChevronRight size={20} className="text-gray-400" />
                <span className="font-medium">MAIGrid</span>
              </button>
            </div>
          </nav>

          {/* Bottom Navigation */}
          <div className="p-4 border-t border-gray-200 space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
              <Download size={20} />
              <span>Exports</span>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
              <Trash2 size={20} />
              <span>Trash</span>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings size={20} />
              <span>Settings</span>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
              <BookOpen size={20} />
              <span>Resources</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Credits
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  VC
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-900">
                    vineet chaturvedi
                  </div>
                  <div className="text-gray-500">Millions</div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-auto p-8">
            <div className="max-w-5xl mx-auto space-y-8">
              {/* Title */}
              <h1 className="text-3xl font-semibold text-gray-900 text-center">
                What do you want to explore today
              </h1>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search Agent/ Usecase"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg transition-colors">
                  Personalize Usecase
                </button>

                <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg transition-colors">
                  Category Leading Agents
                </button>

                <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg transition-colors">
                  Adoption Signals
                </button>

                <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg transition-colors">
                  Generate RFI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
