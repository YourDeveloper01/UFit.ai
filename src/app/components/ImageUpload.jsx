"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null); // Clear previous result
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null); // Clear previous result
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);

    setLoading(true);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setResult(data.result);
      } else {
        alert("Analysis failed. Please try again.");
      }
    } catch (error) {
      console.error("Error analyzing image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      {/* Upload Section */}
      <label
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center w-full h-52 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-red-500 transition p-4 text-center"
      >
        {preview ? (
          <Image
            src={preview}
            alt="Preview"
            width={180}
            height={180}
            className="rounded-md object-cover"
          />
        ) : (
          <>
            <svg
              className="w-10 h-10 mb-2 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M12 16v-4m0 0V8m0 4h4m-4 0H8m12 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-300">Click or drag & drop to upload image</p>
          </>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          className="hidden"
        />
      </label>

      {/* Analyze Button */}
      {image && (
        <div className="mt-4 text-center">
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg--700 transition disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Now"}
          </button>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="mt-6 p-4 border rounded-lg bg-white shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Analysis Result</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <span className="font-medium">🏋️ Weight Goal:</span>{" "}
              {result.weightGoal}
            </p>
            <p>
              <span className="font-medium">💪 Body Type:</span>{" "}
              {result.bodyType}
            </p>
            <p>
              <span className="font-medium">📊 Estimated BMI:</span>{" "}
              {result.estimatedBMI}
            </p>
            <p>
              <span className="font-medium">🥗 Diet Plan:</span>{" "}
              {result.dietPlan}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
