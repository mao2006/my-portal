
import { lazy, Suspense } from "react";


const HomePage = lazy(() => import("./sections/HomePage"));
const ServerIntro = lazy(() => import("./sections/ServerIntro"));
const ProfileCard = lazy(() => import("./sections/ProfileCard"))


export const MainSections = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
    <section className="h-screen snap-start flex items-center justify-center">
      <Suspense fallback={<div>loading...</div>}>
        <HomePage />
      </Suspense>
    </section>
    <section className="h-screen snap-start flex items-center justify-center">
      <Suspense fallback={<div>loading...</div>}>
        <ServerIntro />
      </Suspense>
    </section>
    <section className="h-screen snap-start flex items-center justify-center">
      <Suspense fallback={<div>loading...</div>}>
        <ProfileCard />
      </Suspense>
    </section>
  </div>
  );
}
