import React, { useContext, useEffect, lazy } from 'react';
import './welcomePage.styles.scss';
import { ShowsContext } from '../context/index';
import { PlatformsView } from '../components/platformsView/platformsView.component';
import { HowItWorks } from '../components/howItWorks/howItWorks.component';
import { PriceCards } from '../components/priceCards/priceCards.component';

const PodcastCard = lazy(() =>
  import('../components/podcastCard/podcastCard.component')
);

export const WelcomePage = () => {
  const { externalPodcasts, getPodcasts, podcastSearch } =
    useContext(ShowsContext);

  useEffect(() => {
    const fetchDataByTag = async () => {
      await getPodcasts({
        page: 1,
        limit: 8,
        name: podcastSearch,
        external: true,
      });
    };
    fetchDataByTag();
  }, []);

  return (
    <div className="page-container">
      <div className="header-container-welcome">
        <div className="header-content">
          <span className="header-sentense">
            The Easiest Way To Make a Jewish Podcast
          </span>
          <span className="header-description">
            We can help you start your podcast today!
          </span>
          <a
            className="link-button"
            href={`${process.env.REACT_APP_URL}/signup`}
          >
            Get Started<span className="link-hover">{'>'}</span>
          </a>
        </div>
      </div>
      <div className="welcome-content-container">
        <strong className="description">
          Jewish Podcasts is an all-in-one platform where you can create and
          distribute your very own podcast and share it with the world.
        </strong>
        <div className="dote"></div>

        <PlatformsView />
      </div>

      {externalPodcasts && (
        <div className="show-container">
          <span className="podcasts-header">Featured Podcasts</span>
          <div className="podcasts-list">
            {externalPodcasts.map((show) => (
              <PodcastCard show={show} />
            ))}
          </div>
          <div className="link-container">
            <a
              className="link-button"
              href={`${process.env.REACT_APP_URL}/podcasts`}
            >
              View All Shows<span className="link-hover">{'>'}</span>
            </a>
          </div>
        </div>
      )}

      <HowItWorks />
      <PriceCards />
    </div>
  );
};
