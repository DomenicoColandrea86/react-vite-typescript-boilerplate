import { StrictMode, Suspense, lazy } from 'react';

const LazyApp = lazy(async () => {
  const { App } = await import('@/app');

  return { default: App };
});

const SuspendedMainRender = () => {
  return (
    <StrictMode>
      <>
        <LazyApp />
      </>
    </StrictMode>
  );
};

export const MainRender = () => {
  return (
    <Suspense>
      <SuspendedMainRender />
    </Suspense>
  );
};
