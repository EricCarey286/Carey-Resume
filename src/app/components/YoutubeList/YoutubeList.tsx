import Section from "../Section/Section";
import Slider from "../Slider/Slider";
import { YouTubeApiResponse } from "../../types";

const YOUTUBE_PLAYLIST_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export const config = {
  fetchCache: "force-no-store",
};

async function getData(): Promise<YouTubeApiResponse> {
  //fetch playlist snippet from YT api
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_API}?part=snippet&maxResults=10&playlistId=PLMvVU3l5gyKWcAGstohdAaMC6dPUttMIb&key=${
      process.env.YOUTUBE_API_KEY
    }&timestamp=${new Date().getTime()}`,
    {
      cache: "no-cache", //no chache to keep playlist real time
    }
  );
  return res.json();
}

export default async function YoutubeList() {
  //store data in const to send to slider component
  const data = await getData();

  return (
    <Section
      title="Youtube Top 10 of the Week"
      heading="Youtube Top 10 of the Week"
      id="youtube"
    >
      <p>
        Slide through to see my favorite youtube videos of the week! Courtsey of
        the YouTube API v3
      </p>
      <Slider>
        {data.items.map((item: any, index) => {
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId } = snippet;
          const { medium = {} } = thumbnails;
          return (
            <li key={id} className="slider-li">
              <a
                href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                target="_blank"
              >
                <p>
                  <img className="slider-img" src={medium.url} alt={title} />
                </p>
                <h3 className="slider-title">{title}</h3>
              </a>
            </li>
          );
        })}
      </Slider>
    </Section>
  );
}
