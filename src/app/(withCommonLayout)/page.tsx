import Landing from "@/src/components/module/home/Landing";
import RecentPost from "@/src/components/module/home/RecentPost";

/* eslint-disable prettier/prettier */
export default function Home() {
  return (
    <>
      <div className='bg-[url("/bgImage.jpg")] bg-cover bg-center h-screen  '>
        <Landing></Landing>
      </div>
      <RecentPost></RecentPost>
    </>
  );
}
