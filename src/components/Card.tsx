import { ShareIcon } from "../Icons/ShareIcon";
import { NoteBook } from "../Icons/NoteBook";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

// Extract YouTube video ID from various formats
function extractYouTubeId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:.*v=|embed\/)|youtu\.be\/)([^&?/]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export function Card({ title, link, type }: CardProps) {
  const youtubeId = type === "youtube" ? extractYouTubeId(link) : null;
  const embedUrl = youtubeId ? `https://www.youtube.com/embed/${youtubeId}` : "";

  return (
    <div className="p-4 bg-white rounded-md border-gray-200 border max-w-72 min-h-48 min-w-72">
      <div className="flex justify-between">
        <div className="flex items-center text-md">
          <div className="text-gray-500 pr-2">
            <NoteBook />
          </div>
          {title}
        </div>
        <div className="flex items-center">
          <div className="pr-2 text-gray-500">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ShareIcon />
            </a>
          </div>
          <div className="text-gray-500">
            <ShareIcon />
          </div>
        </div>
      </div>

      <div className="pt-4">
        {type === "youtube" && youtubeId && (
          <iframe
            className="w-full aspect-video"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
}
