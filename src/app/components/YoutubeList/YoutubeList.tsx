import Section from "../Section/Section";
import "./YoutubeList.css";

const YOUTUBE_PLAYLIST_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

const headshot = "/images/headshot.jpg";

export const config = {
  fetchCache: 'force-no-store'
};

export const fetchCache = 'force-no-store';

async function getData() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_API}?part=snippet&maxResults=10&playlistId=PLMvVU3l5gyKWcAGstohdAaMC6dPUttMIb&key=${process.env.YOUTUBE_API_KEY}&timestamp=${new Date().getTime()}`, {
      cache: 'no-cache'
    }
  );
  return res.json();
}

export default async function YoutubeList() {
  const data = await getData();
  return (
    <Section
      title="Youtube Top 10 of the Week"
      heading="Youtube Top 10 of the Week"
      id="youtube"
    >
      <p>Slide through to see my favorite youtube videos of the week! Courtsey of the YouTube API v3</p>
      <div className="yt-slider-container">
        <ul className="yt-slider">
          {data.items.map((item: any) => {
            const { id, snippet = {} } = item;
            const { title, thumbnails = {}, resourceId } = snippet;
            const { medium = {} } = thumbnails;
            return (
              <li key={id} className="yt-list-item">
                <a
                  href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                  target="_blank"
                >
                  <p>
                    <img
                      className="yt-slider-img"
                      src={medium.url}
                      alt={title}
                    />
                  </p>
                  <h3 className="yt-slider-title">{title}</h3>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
