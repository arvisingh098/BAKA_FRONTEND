import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhaseComponent from "./components/PhaseComponent";

const ConnectToPlay     = lazy(() => import("./pages/ConnectToPlay"));
const BakaLanding       = lazy(() => import("./pages/BakaLanding"));
const ConnectWalletName = lazy(() => import("./pages/ConnectWalletName"));
const BribesPage        = lazy(() => import("./pages/BribesPage"));
const BribeProfile      = lazy(() => import("./pages/BribeProfile"));
const BakaPhase2        = lazy(() => import("./pages/BakaPhase2"));
const NicknameModal     = lazy(() => import("./components/NicknameModal"));
const Carousel          = lazy(() => import("./components/Crousel"));
const BattleGround      = lazy(() => import("./pages/BattleGround"));
const BattleModal       = lazy(() => import("./components/BattleModal"));
const SubmissionPages   = lazy(() => import("./pages/SubmissionPages"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading…</div>}>
        <Routes>
          <Route path="/"              element={<ConnectToPlay />} />
          <Route path="/landing"       element={<BakaLanding />} />
          <Route path="/connect-wallet" element={<ConnectWalletName />} />
          <Route path="/bribes"        element={<BribesPage />} />
          <Route path="/manage-bribes" element={<BribeProfile />} />
          <Route path="/phase-2"       element={<BakaPhase2 />} />
          <Route path="/nickname"      element={<NicknameModal />} />
          <Route path="/carousel"      element={<Carousel />} />
          <Route path="/battle"        element={<BattleGround />} />
          <Route path="/submission"    element={<SubmissionPages />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
