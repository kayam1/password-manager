import { useState } from "react";
import TabBar from "../components/TabBar";
import PasswordGeneratorPage from "./PasswordGeneratorPage";
import SettingsPage from "./SettingPage";
import VaultPage from "./VaultPage";

export default function MainPage() {  
  const [activeTab, setActiveTab] = useState("vault");
  let pageToLoad;
  
  if (activeTab === "vault") {
    pageToLoad = <VaultPage />;
  }
  else if (activeTab === "generator") {
    pageToLoad = <PasswordGeneratorPage />;
  }
  else {
    pageToLoad = <SettingsPage />;
  }
  
  return (
    <div className="flex flex-col w-100 h-150 bg-base-200 font-mono tracking-tighter">
      <div className='grow border-2 border-secondary border-b-0'>
        {pageToLoad}
      </div>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab}/>
    </div>
  );
}