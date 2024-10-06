export const VideoCardUpdated = ({ title, videoSrc, videoThumbnail, author, authorThumbnail } : any) => {
    return (
        <div className="p-3">
            <video controls src={videoSrc} poster={videoThumbnail} className="w-full h-auto rounded-xl" />
            <div className="pt-2">
                <div className="font-bold">{title}</div>
                <div className="text-gray-400">
                    <img className="inline rounded-full w-8 h-8" src={authorThumbnail} alt={author} />
                    <span className="pl-2">{author}</span>
                </div>
            </div>
        </div>
    );
};
