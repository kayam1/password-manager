
export default function TabBar({ activeTab, setActiveTab }) {

  function getTabClass(tabName) {
    if (activeTab === tabName) {
      return "bg-base-200 text-amber-600 border-l-2 border-r-2 border-b-2 border-secondary rounded-b-lg -mt-1.5 z-10 text-stroke-4";
    }
    return "text-primary-content/80 hover:text-amber-600 rounded-lg";
  }

  return (
    <div className="border-t-2 border-secondary z-0">
      <div className="flex w-full pt-1">   
        <button className={`flex-1 py-2 px-4 text-sm font-bold transition-colors transition-speed ${getTabClass("generator")}`} onClick={() => setActiveTab("generator")}><strong>Generator</strong></button>
        <button className={`flex-1 py-2 px-4 text-sm font-bold transition-colors ${getTabClass("vault")}`} onClick={() => setActiveTab("vault")}>Vault</button>
        <button className={`flex-1 py-2 px-4 text-sm font-bold transition-colors ${getTabClass("settings")}`} onClick={() => setActiveTab("settings")}>Settings</button>
      </div>
    </div>
  );
}