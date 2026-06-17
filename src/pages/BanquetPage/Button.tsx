export default function Button() {
  const ba = ["FILTER-ALL", "SHANE", "SHAGUN", "TABLE CLOTHS", "NAPKINS AVLABLE"];
  return (
    <div className="flex justify-center flex-wrap gap-4 mb-30"> 
      {ba.map((item, index) => (
        <button key={index} className="text-white bg-red-600 px-6 py-2 rounded-lg font-medium transition">{item}</button>
      ))}
    </div>
  );
}