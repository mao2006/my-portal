
import { lazy, Suspense } from "react";


const HomePage = lazy(() => import("./sections/HomePage"));


export const MainSections = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
    <section className="h-screen snap-start flex items-center justify-center">
      <Suspense fallback={<div>loading...</div>}>
        <HomePage />
      </Suspense>
    </section>
    <section className="h-screen snap-start flex items-center justify-center">
      456
    </section>
  </div>
  );
}