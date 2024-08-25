import { SidebarIcon } from "lucide-react";
// import { SideBar } from "./_components/SideBar";
import SideBar from "./_components/SideBar"
import { Navbar } from "./_components/Navbar";
import { redirect } from "next/navigation";
import getSafeProfile  from "@/actions/get-safe-profile";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const safeProfile = await getSafeProfile();

  if (!safeProfile) {
    return redirect("/");
  }

  return (
    <div className="h-full dark:bg-gray-900">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50 dark:bg-gray-900">
        <Navbar currentProfile={safeProfile} />
      </div>

      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50 dark:bg-gray-900">
        <SideBar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;