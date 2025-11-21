export default function AboutPage() {
  return (
    <div className="min-h-screen w-full px-5 py-40 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto bg-white p-10 shadow-2xl rounded-xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-red-600">
          About BodyFit AI
        </h1>

        <p className="text-lg mb-5 leading-7">
          <strong>BodyFit AI</strong> is a revolutionary fitness platform that
          merges <strong>artificial intelligence</strong> with{" "}
          <strong>personalized wellness</strong>. Whether you&apos;re a beginner
          starting your fitness journey or an experienced athlete seeking
          AI-driven guidance, BodyFit AI is built to help you achieve your
          physical goals with accuracy and ease.
        </p>

        <p className="text-lg mb-5 leading-7">
          Simply upload your body image and provide your current weight. Our
          advanced system uses cutting-edge image processing and{" "}
          <strong>machine learning</strong> to:
        </p>

        <ul className="list-disc list-inside text-lg mb-5 leading-8 text-gray-700">
          <li>Analyze your body structure with high precision</li>
          <li>Predict your body type</li>
          <li>Estimate your BMI (Body Mass Index)</li>
          <li>Suggest if you need to gain, lose, or maintain weight</li>
          <li>Generate a personalized, dynamic diet plan</li>
        </ul>

        <p className="text-lg mb-5 leading-7">
          Our diet recommendations are tailored to your goals and consider
          multiple factors like body type, target weight, and health balance.
        </p>

        <p className="text-lg mb-5 leading-7">
          The platform is powered by modern web technologies like{" "}
          <strong>Next.js</strong> for full-stack development,{" "}
          <strong>MongoDB</strong> for fast and flexible data storage, and{" "}
          <strong>JWT</strong> for secure authentication. We use{" "}
          <strong>Tailwind CSS</strong> and <strong>Framer Motion</strong> to
          ensure a smooth, responsive, and visually engaging experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-red-500">
          Why Choose BodyFit AI?
        </h2>
        <ul className="list-disc list-inside text-lg mb-5 leading-8 text-gray-700">
          <li>AI-powered body analysis in seconds</li>
          <li>Goal-based, adaptive diet recommendations</li>
          <li>Secure user accounts with email verification</li>
          <li>Simple and user-friendly interface</li>
          <li>Continuously improving through user feedback</li>
        </ul>

        <p className="text-lg leading-7 text-center mt-10 italic text-gray-700">
          Empower your fitness journey with technology. Stay consistent, stay
          fit — with <strong>BodyFit AI</strong>.
        </p>
      </div>
    </div>
  );
}
