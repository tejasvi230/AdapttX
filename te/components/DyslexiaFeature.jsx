import React from "react";
import DyslexiaFeature from "./components/DyslexiaFeature";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-navy-blue">
      <h1 className="text-white text-center text-4xl py-8">FEATURES</h1>

      {/* Search bar */}
      <div className="flex justify-center mb-8">
        <input type="text" placeholder="Hinted search text" className="..." />
      </div>

      {/* Feature buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          AUTISM
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          DYSLEXIA
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          COLOR BLINDNESS
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          MOBILITY
        </button>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* First block - Dyslexia Feature */}
        <DyslexiaFeature />

        {/* Other feature blocks */}
        <div className="bg-white rounded-lg shadow-lg">
          {/* Second feature */}
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          {/* Third feature */}
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          {/* Fourth feature */}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
