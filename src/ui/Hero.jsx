import { useNavigate } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

import HeroHeadlines from "./HeroHeadlines";
import useUser from "../features/auth/useUser";

function Hero() {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  const handleGetStartedClick = () => {
    isAuthenticated ? navigate("/") : navigate("/auth/login");
  };
  return (
    <div className="home__hero">
      <HeroHeadlines />
      <div className="hero__get-started" onClick={handleGetStartedClick}>
        {isAuthenticated ? (
          <div className="get-started">
            <p className="get-started__text">Continue shopping</p>
            <span className="get-started__arrow">
              <HiArrowLongRight />
            </span>
          </div>
        ) : (
          "Let's Get Started"
        )}
      </div>
    </div>
  );
}

export default Hero;
